import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CoverPhoto from './images/coverPhoto.jpg'
function ProductCard({product}) {
  console.log(product)
  return (
    
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={product.image} style={{height: '250px',}} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  );
}

export default ProductCard;