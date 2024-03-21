import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CoverPhoto from './images/coverPhoto.jpg'
function ProductCard({product, onShowModal}) {
  const handleShowDetails = () => {
    onShowModal(product);
  };
  return (
    
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={product.image} style={{height: '250px',}} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary" onClick={handleShowDetails}>View details</Button>
        </Card.Body>
      </Card>
  );
}

export default ProductCard;