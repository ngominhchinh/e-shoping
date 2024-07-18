import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";

export default function Nav(){

    let[categories, setCategories] = useState([]);    
    let [cxt, setCxt] = useContext(MyContext);    

    useEffect(()=>{
        axios.get('http://localhost:3000/categories').then(x =>{
            setCategories(x.data);            
        })
    },[])        
    
    return(
        <>
                    
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary  mb-3">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to={"/products"}>EShop</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link to={'/products'} className="dropdown-item" value="0" onClick={()=>setCxt({...cxt,selectedCategoryId:0})}>All</Link></li>
                                    {categories.map(item =>(
                                        <li><Link to={'/products'}  class="dropdown-item" value={item.id}  onClick={(e)=> setCxt({...cxt,selectedCategoryId: item.id})}>{item.name}</Link></li>
                                    ))}                                    
                                </ul>
                            </li>                            
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <input style={{width:'400px'}} class="form-control me-3" type="search" placeholder="Search" aria-label="Search" onChange={(e) =>{setCxt({...cxt,searchValue:e.target.value})}}/>
                            <p className="mt-3">Xin chào: {cxt.currentUser.username} </p>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
            {}
        </>
    )
}