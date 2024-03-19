import AppHeader from "../templates/Appheader";
import ProductCard from "../templates/ProductCard";

// Dummy data for products
const products = [
    { id: 1, name: 'Product 1', price: 10.99, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 19.99, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 14.99, description: 'Description for Product 3' },
    { id: 4, name: 'Product 1', price: 10.99, description: 'Description for Product 1' },
    { id: 5, name: 'Product 2', price: 19.99, description: 'Description for Product 2' },
    // Add more products as needed
];

function ProductListView() {
    // Render the product list view
    return (
        <div>
            <AppHeader/>
            <div className="row px-5 pt-3">
                {products.map(product => (
                    <div key={product.id} className="col-sm-3 col mb-4">
                        <ProductCard/>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductListView

