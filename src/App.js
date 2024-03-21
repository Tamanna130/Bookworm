import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import ProductListView from './pages/ProductsListView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartView from './pages/CartView';
import Login from './pages/Login';
import SignUp from './pages/Signup';
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route path="/all-products" element={<ProductListView/>} />
          <Route path="/cart" element={<CartView/>} />
        </Routes>
    </Router>
  );
}

export default App;
