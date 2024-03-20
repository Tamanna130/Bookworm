import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import ProductListView from './pages/ProductsListView';
import ProductDetails from './templates/ProductDetails';
import CartItems from './pages/CartItems';

function App() {
  return (
    <div>
      {/* <Homepage/> */}
      <ProductListView/>
      {/* <ProductDetails/> */}
      <CartItems/>
    </div>
  );
}

export default App;
