import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import { Routes, Route, Outlet } from "react-router-dom";
import ListProduct from "../products/ListProduct";


export default function Home(){
    return (
        <>           
            <Nav></Nav>
            <div className="container">
                <ListProduct></ListProduct> 
            </div>
                                            
        </>
    )
}