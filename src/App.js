import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/users/Home/Home';
import ListProduct from './pages/users/products/ListProduct';
import DetailProduct from './pages/users/products/DetailProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/users/Cart/Cart';
import Admin from './pages/admin/Admin';
import ListUsers from './pages/admin/users/ListUsers';
import ListCarts from './pages/admin/carts/ListCarts';
import Products from './pages/admin/products/Products';

function App() {
  
  return (
    <>
        <Routes>
          <Route path='' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>       
          <Route path='cart' element={<Cart/>}></Route>
          <Route path="products" element={<Home />}>
            <Route path="" element={<ListProduct />}></Route>
            <Route path='detail/:id' element={<DetailProduct/>}></Route>            
          </Route>
          <Route path='admin' element={<Admin></Admin>}>
            <Route path='users' element={<ListUsers></ListUsers>}></Route>
            <Route path='carts' element={<ListCarts></ListCarts>}></Route>
            <Route path='products' element={<Products></Products>}></Route>
          </Route>
            
        </Routes>
    </>
  );
}

export default App;
