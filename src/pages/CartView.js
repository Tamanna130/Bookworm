import React, { useState, useEffect } from 'react';
import { db } from '../firebase/FirebaseConfig.js';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import CartItem from '../templates/CartItem.js';
import TotalBill from '../templates/TotalBill.js';
import { Card, Button, Col, Row } from 'react-bootstrap';
import AppHeader from '../templates/Appheader.js';

function CartView() {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items from Firebase Firestore
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'cartItems'));
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({ id: doc.id, ...doc.data() });
                });
                setCartItems(items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    // Function to handle deletion of an item from the cart
    const handleDeleteItem = async (itemId) => {
        try {
            await deleteDoc(doc(db, 'cartItems', itemId));
            setCartItems(cartItems.filter(item => item.id !== itemId));
            console.log('Item deleted from cart:', itemId);
        } catch (error) {
            console.error('Error deleting item from cart:', error);
        }
    };

    // Function to handle increasing item quantity
    const handleIncreaseQuantity = async (itemId) => {
        try {
            const itemRef = doc(db, 'cartItems', itemId);
            await updateDoc(itemRef, { quantity: cartItems.find(item => item.id === itemId).quantity + 1 });
            setCartItems(prevItems => prevItems.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
        } catch (error) {
            console.error('Error increasing item quantity:', error);
        }
    };

    // Function to handle decreasing item quantity or removing item if quantity is zero
    const handleDecreaseQuantity = async (itemId) => {
        try {
            const currentQuantity = cartItems.find(item => item.id === itemId).quantity;
            if (currentQuantity > 1) {
                const itemRef = doc(db, 'cartItems', itemId);
                await updateDoc(itemRef, { quantity: currentQuantity - 1 });
                setCartItems(prevItems => prevItems.map(item => item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item));
            } else {
                await handleDeleteItem(itemId);
            }
        } catch (error) {
            console.error('Error decreasing item quantity:', error);
        }
    };

    // Function to clear all items from the cart
    const clearCart = async () => {
        try {
            // Delete all documents from 'cartItems' collection
            const querySnapshot = await getDocs(collection(db, 'cartItems'));
            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });
            // Update state to reflect empty cart
            setCartItems([]);
            console.log('Cart cleared successfully');
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    // Function to handle checkout
const handleCheckout = async () => {
    try {
        // Create a new array to store promises for each document addition
        const promises = [];

        // Add each item in the cart to the "orders" collection
        cartItems.forEach((item) => {
            // Add a promise for each document addition
            promises.push(addDoc(collection(db, 'orders'), {
                productName: item.name,
                quantity: item.quantity,
                price: item.price
            }));
        });

        // Wait for all promises to resolve
        await Promise.all(promises);

        // Clear the cart
        await clearCart();

        // Show success message
        alert('Successfully checked out!');
    } catch (error) {
        console.error('Error checking out:', error);
        alert('Error checking out. Please try again later.');
    }
};

    return (
        <div>
            <AppHeader/>
            <Row className="justify-content-center pt-3 px-3">
            <Col md={8} className="cart-view-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div>
                            {cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    handleIncreaseQuantity={handleIncreaseQuantity}
                                    handleDecreaseQuantity={handleDecreaseQuantity}
                                    handleDeleteItem={handleDeleteItem}
                                />
                            ))}
                        </div>    
            </Col>
            <Col md={4} className="px-3"><TotalBill cartItems={cartItems} handleCheckout={handleCheckout} /></Col>
            </Row>
        </div>
    );
}

export default CartView;
