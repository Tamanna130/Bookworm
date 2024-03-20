import AppHeader from "../templates/Appheader";
import ProductCard from "../templates/ProductCard";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState,useEffect } from 'react'
import { auth, db } from '../firebase/FirebaseConfig.js'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
  where,
} from 'firebase/firestore';
import ProductDetails from "../templates/ProductDetails.js";

function ProductListView() {

    const [products, setProducts] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Function to handle showing modal
    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Function to handle closing modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    // Function to add product to cart
    const addToCart = async (product) => {
        try {
            await addDoc(collection(db, 'cartItems'), {
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1, // Initial quantity, can be adjusted as needed
            });
    
            console.log("Product added to cart:", product);
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };
    // Read products from firebase
    useEffect(() => {
      const q = query(collection(db, 'Products'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let productInfo = [];
        querySnapshot.forEach((doc) => {
          productInfo.push({ ...doc.data(), id: doc.id});
        });
        setProducts(productInfo);
      console.log(productInfo)

      });
      return () => unsubscribe();
    }, []);
    
    // Render the product list view
    return (
        <div>
            <AppHeader/>
            <div className="row px-5 pt-3">
                {products.map(product => (
                    <div key={product.id} className="col-sm-3 col mb-4 ">
                        <ProductCard product={product} onShowModal={handleShowModal}/>
                    </div>
                ))}
            </div>
            
            {/* To render the modal */}
            <ProductDetails show={showModal} handleCloseModal={handleCloseModal} product={selectedProduct} addToCart={addToCart}/>
        </div>
    );
}
export default ProductListView

