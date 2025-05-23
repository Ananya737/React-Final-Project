import logoImg from "../Images/logo.png";
import { IoBagCheck } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";




const Header=()=>{
    const cartData=useSelector(state=>state.mycart.cart)
    const cartDatalength=cartData.length;
    const navigate=useNavigate();
    useEffect(()=>{
        AOS.init({duration:300})
    },[])


    const jumpWishlist=()=>{
        navigate("/wishlist");
    }




    return(
        <>
        <div className="header">

       
       <header>
        <div className="topNav">
            <p>Get upto 50% percent discount on orders above 799/-</p>
        </div>
        
        <div className="nav">
            <ul>
                
                <li><FaRegHeart id="wishlist" onClick={jumpWishlist} /></li>
               
                <li onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}}><IoBagCheck id="cart"/></li>
            </ul>
            <p id="cartDataLength">{cartDatalength}</p>
        </div>
        
        <div className="logo" data-aos="fade-right"><img src={logoImg}  /></div>
        
       </header>

       </div>


       
        
        </>
    )
}
export default Header;