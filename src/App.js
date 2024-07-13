import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/users/Home/Home';
import ListProduct from './pages/users/products/ListProduct';
import DetailProduct from './pages/users/products/DetailProduct';

function App() {
  return (
    <>
        <Routes>
          <Route path="products" element={<Home />}>
            <Route path="" element={<ListProduct />}></Route>
            <Route path='detail' element={<DetailProduct></DetailProduct>}></Route>
          </Route>
          
        </Routes>
    </>
  );
}

export default App;
