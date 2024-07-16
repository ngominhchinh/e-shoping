import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { MyContext } from "../../../MyContext";

export default function ListProduct(){
    let navigate = useNavigate();
    let [cxt, setCxt] = useContext(MyContext);
    let setLowToHigh = (array) =>{            
       let n = [...array] 
       return n.sort((a,b) => a.price - b.price);        
    }
    let setHighToLow = (array) =>{  
        let n = [...array]           
       return n.sort((a,b) => b.price - a.price);        
    }

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
            let showList;
            if(cxt.searchValue != null){
                nlist = list.filter(e => e.name.toLowerCase().includes(cxt.searchValue.toLowerCase()));                
                
            } else{
                if(Number(cxt.selectedCategoryId) == 0 ){
                    nlist = [...list];
                } else{
                    nlist = list.filter(e => e.category.id == Number(cxt.selectedCategoryId));
                }          
            }            
            if(cxt.sort == ""){
                showList = [...nlist]
            } else if(cxt.sort == "0"){
                showList = setHighToLow(nlist);
            } else{
                showList = setLowToHigh(nlist);
            }

            setList(showList);
        })
    }    

    

    useEffect(()=>{
        getList();
    })   

    return(
        <>
            <h1>{cxt.selectedCategoryId}</h1>
            <h1>{cxt.searchValue}</h1>
           
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sap xep
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item"  value={""} onClick={(e) =>setCxt({sort: e.target.value})} >Default</button></li>
                    <li><button class="dropdown-item"   value={"1"}onClick={(e) =>setCxt({sort: e.target.value})} >Low to high</button></li>
                    <li><button class="dropdown-item"  value={"0"} onClick={(e) =>setCxt({sort: e.target.value})} >High to low</button></li>
                </ul>
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
