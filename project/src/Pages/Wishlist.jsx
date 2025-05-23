import axios from "axios";
import api from "../Config/URL"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import Card from 'react-bootstrap/Card';




const Wishlist=()=>{
    const [data,setData]=useState([]);
    const {id}=useParams();

    const getData=async()=>{
        let url=`${api}/?id=${id}`;
        let res=await axios.get(url);
        setData(res.data);
        console.log(res.data);
    }

   useEffect(()=>{
    getData()
   },[])

   const ans=data.map(
    (key)=>{
        return(
            <>
            
            <div>

        <Card style={{ width: '11rem',height:"300px" }}  id="card">
        <p id="homeHeart" ><FaRegHeart/></p>
        <div > 
        <Card.Img variant="top" src={key.image} id="cardImg" />
        <p className="bookName">{key.name}</p>
        </div>
        </Card>
                        


            </div>
            
            
            
            
            </>
        )
    }
   )


    return(
        <>
        <h1 style={{display:"flex",justifyContent:"center"}}>Wishlist!</h1>
        
        {ans}
        
        </>
    )
}
export default Wishlist;