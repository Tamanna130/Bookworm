import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/FirebaseConfig.js';

function TotalBill({ cartItems, handleCheckout }) {
    // Calculate total bill
    const totalBill = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    return (
        <Card className="total-bill-container">
            <Card.Body>
                <Card.Title>Total Bill</Card.Title>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity} x {item.price} = {item.quantity * item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><strong>Total Bill</strong></td>
                            <td className="text-right">{totalBill}</td>
                        </tr>
                    </tfoot>
                </table>
                <Button variant="primary" className="mt-3" block onClick={handleCheckout}>Checkout</Button>
            </Card.Body>
        </Card>
    );
}

export default TotalBill;
