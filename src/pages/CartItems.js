import React, { useState, useEffect } from 'react';
import { db } from '../firebase/FirebaseConfig.js';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Button, Card, ListGroup, Row, Col } from 'react-bootstrap';

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

    return (
        <div className="cart-view-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Shopping Cart</h2>
            <Row className="justify-content-center">
                {cartItems.map(item => (
                    <div key={item.id}>
                        <Card className="cart-item" >
                            <Row noGutters>
                                <Col md={4}>
                                    <div className='px-3 py-3'>
                                        <Card.Img variant="top" src={item.image} alt={item.name} style={{width:'180px', height: '150px'}}/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            Price: {item.price}<br />
                                            Quantity: {item.quantity}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
                                        <Button variant="secondary" onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
                                        <Button variant="danger" onClick={() => handleDeleteItem(item.id)}>Remove</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                ))}
            </Row>
        </div>
    );
}

export default CartView;
