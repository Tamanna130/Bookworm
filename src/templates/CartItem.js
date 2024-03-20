import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

function CartItem ({ item, handleIncreaseQuantity, handleDecreaseQuantity, handleDeleteItem }) {
    return (
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
    );
}

export default CartItem;
