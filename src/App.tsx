import './App.css';
import Home from './Components/HomeArea/Home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ProductList from './Components/ProductsArea/ProductList/ProductList';
import ProductPage from './Components/ProductsArea/ProductPage/ProductPage';
import Cart from './Components/CartArea/Cart/Cart';
import Register from './Components/AuthArea/Register/Register';
import Login from './Components/AuthArea/Login/Login';
import { store, useAppSelector } from './Redux/Store';

function App() {

  const user = useAppSelector(state => state.user.currentUser);
  console.log(user);
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/" element={<Navigate to="/home"/>}/>    
    <Route path="/products/:category" element={<ProductList/>} />
    <Route path="/products" element={<ProductList/>} />
    <Route path="/product/:_id" element={<ProductPage/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/login" element={user ? <Navigate to="/home"/> : <Login/>} />
    <Route path="/register" element={user ? <Navigate to="/home"/> : <Register/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
