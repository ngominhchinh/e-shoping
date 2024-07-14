import { useLocation } from "react-router-dom";
import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
export default function DetailProduct() {
  let data = useLocation();
  let st = data.state.obj;
  return (
    <>
      
        <div className="row">
          <div className="col-2">
          </div>
          <div className="col-4">
          <MDBCarousel showControls showIndicators interval={2500}>
                {st.images.map((item,index)=>(
                    <MDBCarouselItem itemId={{index}}>
                      <img src={"/images/"+ item} className='d-block w-100' alt={item}  />    
                            
                  </MDBCarouselItem>
                  
                ))}                
              </MDBCarousel>
          </div>
          <div className="col-4 mx-auto my-auto">
            <h3>{st.name}</h3>
            <h6>Price: ${st.price}</h6>
            <h6>Category: {st.category.name}</h6>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
          <div className="col-2">
          </div>
          
         
        </div>                       
    </>
  );
}
