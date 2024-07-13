import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function ListProduct(){
    let navigate = useNavigate();
    let [list, setList] = useState([{
        name:"",
        price:"",
        quantity:"",
        category:{
            name:""
        },
        images:{}
    }])

    useEffect(()=>{
        axios.get('http://localhost:3000/products').then(item =>{
            setList(item.data);
        })
    })

    return(
        <>
            <div className="row mt-5">           
                {list.map((e) => (
                    <div className="col-3">
                        <div class="card" style={{width: '18rem'}}>
                            <img src={"images/"+e.images[0]} class="card-img-top" alt="..."/>
                            <div class="card-body text-center">
                                <h5 class="card-title">{e.name}</h5>
                                
                                <button class="btn btn-primary"
                                    onClick={() => {
                                        navigate("/products/detail/", { state: { obj: e } });
                                      }}
                                >Detail</button>
                            </div>
                    </div>
                    </div>
                    
                ))}
             </div>
        </>
    )
}