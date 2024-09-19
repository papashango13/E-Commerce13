import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { remove } from "../Redux/Cartslice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const cartitems = useSelector((state)=>state.cart)
    const handleremove = (id) =>{
        dispatch(remove(id))
    }
    return (
        
        <div>
        
            {cartitems.map((item)=>(
                <div className="cartCard">
                <img src={item.image} alt="Cart-Img" />
                <h5>{item.title}</h5>
                <h5>INR : {item.price}</h5>
                <button onClick={()=>handleremove(item.id)}>Remove</button>
                </div>
            ))}
        
        </div>
    )
}
export default Cart