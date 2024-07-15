import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import { Routes, Route, Outlet } from "react-router-dom";
import Sort from "../../../components/Sort";



export default function Home(){
    return (
        <>     
          
            <Nav></Nav>
  
             
                <div className="container mt-3 ">
                    
                    <Outlet></Outlet>
                </div>
            
            <Footer></Footer>                                 
        </>
    )
}