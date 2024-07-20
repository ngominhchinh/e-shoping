import { Link } from "react-router-dom";

export default function AdminNavbar(){
    return(
        <>
            <div className="container">
                
                    <Link className="no-underline" to='users'>User </Link> |
                    <Link to='products'>Products </Link>   | 
                    <Link to='carts'>Cart</Link>   | 
                    
            </div>
            
            <hr/>
        </>
    )
}