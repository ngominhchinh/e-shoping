import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import axios from "axios";
import { MyContext } from "../../../MyContext";
export default function DetailProduct() {
  let {id} = useParams('');
  let [cxt, setCxt] = useContext(MyContext);  
  let [data, setData] = useState({
    name:"",
    price:"",
    quantity:"",
    category:"",
    images:[]
  });

  useEffect(()=>{
    axios.get('http://localhost:3000/products/' + id).then(res =>{
      setData(res.data);      
    })           
  },[])  
  
  return (
    <>        
        <div className="row">
          <div className="col-2">
          </div>

          <div className="col-4">            
            <MDBCarousel showControls showIndicators interval={2500}>
                {data.images.map((image,index)=>(
                    <MDBCarouselItem itemId={index}>
                      <img src={"/images/"+ image} className='d-block w-100' alt={image}  />                                                      
                  </MDBCarouselItem>                                 
                ))}                
            </MDBCarousel>             
          </div>
          <div className="col-4 mx-auto my-auto">
            <h3>{data.name}</h3>
            <h6>Price: ${data.price}</h6>
            <h6>Category: {data.category.name}</h6>
            {cxt.user.user?(
              <button className="btn btn-primary">Add to Cart</button>
            ):(<Link to={'/'} className="btn btn-primary">Add </Link>)}
          </div>

          <div className="col-2">
          </div>                   
        </div>                       
    </>
  );
}