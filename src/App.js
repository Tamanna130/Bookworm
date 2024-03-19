import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import ProductListView from './pages/ProductsListView';
import ProductDetails from './templates/ProductDetails';

function App() {
  return (
    <div>
      {/* <Homepage/> */}
      <ProductListView/>
      {/* <ProductDetails/> */}
    </div>
  );
}

export default App;
