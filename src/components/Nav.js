import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Nav(){

    let[categories, setCategories] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/categories').then(x =>{
            setCategories(x.data);
        })
    })

    return(
        <>
                    
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top mb-3">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">EShop</a>
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
                                    <li><Link className="dropdown-item" value="0">All</Link></li>
                                    {categories.map(item =>(
                                        <li><Link  class="dropdown-item" value={item.id}>{item.name}</Link></li>
                                    ))}
                                    
                                </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}