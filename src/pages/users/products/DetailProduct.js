import { useLocation } from "react-router-dom";

export default function DetailProduct() {
  let data = useLocation();
  let st = data.state.obj;
  return (
    <>
        <h1>Detail Product</h1>
        <p>ID: {st.id}</p>
        <p>Name: {st.name}</p>
        <p>Price: {st.price}</p>
       
     
    </>
  );
}
