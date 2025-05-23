import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../CartSlice";




const CartDes=()=>{
    let dispatch=useDispatch();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

    const [data,setData]=useState([]);
const {id}=useParams();
const loadData=async()=>{
      let api=`http://localhost:3000/Books/?id=${id}`;
      let res=await axios.get(api);
      console.log(res.data);
      setData(res.data);
      
}

let ans=data.map((key)=>{
    return(
        <>
        
        
        <div style={{display:"flex",justifyContent:"center",gap:"70px",alignItems:"center",height:"350px"}}>

        
        
        <div style={{width:"200px",height:"250px"}}>
        <img src={key.image}  style={{width:"200px",height:"250px",boxShadow:"15px 15px 15px 0px grey"}}  data-aos="zoom-in"/>
        </div>
        
        <div style={{marginTop:"40px",width:"400px",height:"250px",marginBottom:"50px"}}>
            <h6 style={{fontSize:"25px",fontWeight:"700",fontFamily:"initial"}}>{key.name}</h6>
            <h4>{key.price}</h4>
            <div style={{display:"flex",gap:"20px"}}>
           <div> <p style={{fontWeight:"400"}}>{key.author}  |</p></div>
            <div><p style={{fontWeight:"400"}}>{key.genre}  |</p></div>
            <div><p style={{fontWeight:"400"}}>{key.binding}</p></div>
            </div>
            <p style={{fontSize:"10px",fontWeight:"400"}}>{key.description}</p>
            <button style={{border:"none",
            color:"black",
            backgroundColor:"rgb(251, 201, 0)" ,
            width:"400px",borderRadius:"20px"}}
                    onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description,genre:key.genre, image:key.image, qnty:1, price:key.price }))}}>
            Add to Cart
            </button>
        </div>
        </div>
        
        </>
    )
})

useEffect(()=>{
    loadData()
},[])

   return(
        <>
        <body className="cartBody">
            
       
        <h1 style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>Book Description</h1>
         

         {ans}

         </body>
        
        </>
    )
}
export default CartDes;