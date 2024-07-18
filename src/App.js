import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/users/Home/Home';
import ListProduct from './pages/users/products/ListProduct';
import DetailProduct from './pages/users/products/DetailProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import { MyContext } from './MyContext';
import { useContext } from 'react';
import Cart from './pages/users/Cart/Cart';

function App() {
  // const ct = useContext(MyContext);
  // let [cxt, setCxt] = useContext(MyContext);
  // const storedUser = localStorage.getItem('user');
  // if(storedUser){
  //   const user = JSON.parse(storedUser);
  //   setCxt({...cxt, currentUser: user});
  // }
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
          
        </Routes>
    </>
  );
}

export default App;
