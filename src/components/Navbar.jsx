import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



const Navbar = () =>{
    const items = useSelector((state)=>state.cart)
    return(
        <div >
            <div style={{display:'flex' , alignItems:"center" , justifyContent:"space-between"}}>
                <NavLink className='nav-link' style={{fontWeight:"bolder" , fontSize:"50px" , textDecoration:"none" }} to={"/"}>Home</NavLink>
                <NavLink className='nav-link' style={{fontWeight:"bolder" , fontSize:"50px",textDecoration:"none"}} to={"/cart"}>Cart</NavLink>
                <span style={{fontSize:"50px" , fontWeight:"bolder"}}>items : {items.length}</span>
            </div>
        </div>
    )
}
export default Navbar