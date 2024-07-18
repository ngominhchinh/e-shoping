import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { MyContext } from "../../../MyContext";

export default function ListProduct(){
    let navigate = useNavigate();
    let [cxt, setCxt] = useContext(MyContext);
    let [selected, setSelected] = useState(0);  
    let [list, setList] = useState([{
        name:"",
        price:"",
        quantity:"",
        category:{
            name:""
        },
        images:[]
    }])    
    
    let getList = () =>{
        axios.get('http://localhost:3000/products').then((res) =>{
            let list = res.data;
            let nlist;        
            if(Number(cxt.selectedCategoryId) == 0 ){
                nlist = [...list];
            } else{
                nlist = list.filter(e => e.category.id == Number(cxt.selectedCategoryId));
            }        
            if(cxt.searchValue!= ""){
                nlist = nlist.filter(e => e.name.toLowerCase().includes(cxt.searchValue.toLowerCase()));
            }
            
            setList(nlist);
        })
    }        
    useEffect(()=>{
        getList();
    },[cxt])   
    

    return(
        <>
            <h1>{cxt.selectedCategoryId}</h1>
            <h1>{cxt.searchValue}</h1>     
            {/* <p className="mt-3">Xin chào: {cxt.user.username} </p>       */}
            <div className="col-2">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e)=>{setSelected(e.target.value);}}>                   
                    <option value="0">Default</option>
                    <option value="1">Low to high</option>
                    <option value="2">High to low</option>
                </select>
            </div>
            
                                       
            <div className="row mt-5">           
                {                                   
                    list.map((e) => (
                    <div className="col-3 mt-3">
                        <div class="card" style={{width: '18rem'}}>
                            <img src={"images/"+e.images[0]} class="card-img-top" alt="..."/>
                            <div class="card-body text-center">
                                <h5 class="card-title">{e.name}</h5>                                
                                <Link class="btn btn-primary"
                                    to = {'detail/' + e.id}
                                >Detail</Link>
                            </div>
                        </div>
                    </div>
                    
                ))}
             </div>
        </>
    )    
    
}
