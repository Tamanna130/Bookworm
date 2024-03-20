import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductDetails({ show, handleCloseModal, product, addToCart }) {
    const handleAddToCart = () => {
        addToCart(product); 
        handleCloseModal(); // Close the modal after adding to cart
    };
    return (
        <Modal show={show} onHide={handleCloseModal} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{product && product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {product &&
                    <>
                        <div className='d-flex justify-content-center'>
                            <img src={product.image} alt={product.name} style={{ width: '55%', height:"350px" }} />
                        </div>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                    </>
                }
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductDetails;
