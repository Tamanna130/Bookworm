import AppHeader from "../templates/Appheader";
import ProductCard from "../templates/ProductCard";
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

function ProductListView() {

    const [products, setProducts] = useState([])

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
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductListView

