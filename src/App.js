import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import ProductListView from './pages/ProductsListView';
import ProductDetails from './templates/ProductDetails';
import CartView from './pages/CartView';

function App() {
  return (
    <div>
      {/* <Homepage/> */}
      <ProductListView/>
      {/* <ProductDetails/> */}
      <CartView/>
    </div>
  );
}

export default App;
