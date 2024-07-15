import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { MyContext } from "../../../MyContext";
import Sort from "../../../components/Sort";

export default function ListProduct(){
    let navigate = useNavigate();
    let [cxt, setCxt] = useContext(MyContext);
    
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
            if(cxt.searchValue != null){
                let nlist = list.filter(e => e.name.toLowerCase().includes(cxt.searchValue.toLowerCase()));
                
                setList(nlist);
            } else{
                if(Number(cxt.selectedCategoryId) == 0 ){
                    setList(list);
                } else{
                    setList(list.filter(e => e.category.id == Number(cxt.selectedCategoryId)));
                }          
            }
            
        })
    }

    useEffect(()=>{
        getList();
    })

    // useEffect(()=>{
    //     axios.get('http://localhost:3000/products').then(item =>{
    //         if(Number(cxt.selectedCategoryId) == 0){
    //             setList(item.data);
    //         } else{
    //             setList(item.data.filter(e => e.category.id == Number(cxt.selectedCategoryId)));
    //         }
            
    //     })
    // })

    return(
        <>
            <h1>{cxt.selectedCategoryId}</h1>
            <h1>{cxt.searchValue}</h1>
            <Sort></Sort>
            {/* <h4>Xin chao: {cxt.currentUser.username}</h4> */}
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