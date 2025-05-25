import  b1 from "../Images/banner10.png";
import  b2 from "../Images/banner2.webp";
import  b3 from "../Images/banner3.avif";
import Carousel from 'react-bootstrap/Carousel';
import { useState,useEffect } from "react";
import api from "../Config/URL";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";


import AOS from 'aos';
import 'aos/dist/aos.css';





const Home=()=>{
let navigate=useNavigate();
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

   
    const [data,setData]=useState([]);

    const readData=async()=>{
        let url=api;
        let res=await axios.get(url);
        console.log(res.data);   
        setData(res.data);
    }

    useEffect(()=>{
        readData();
    },[])


    const jumpCart=(id)=>{
         navigate(`/cartDes/${id}`)
    }

     const jumpWishlist=(id)=>{
        navigate(`/wishlist/${id}`);
    }



    let ans=data.map((key)=>{
        return(
            <>

            

<div  >


            
        <Card style={{ width: '11rem',height:"300px" }}  id="card">
          <p id="homeHeart" onClick={()=>{jumpWishlist(key.id)}}><FaRegHeart/></p>
          <div onClick={()=>{jumpCart(key.id)}}> 
        <Card.Img variant="top" src={key.image} id="cardImg" />
        <p className="bookName">{key.name}</p>
        </div>
        </Card>
            
      </div>

            </>
        )
    })


    return(
        <>
        

        <section className="sec1">


       <Carousel>
      <Carousel.Item>
        <img src={b1}  className="bannerImg"/>
        <Carousel.Caption  className="slide1content">
          <div id="slide1content" data-aos="zoom-in">
            <h1>BOOKAHOLIC!</h1>
          <h3 >Your Ultimate Online Bookstore!</h3>
          <p>Discover a World of Books at Your Fingertips. </p>
          </div>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img src={b3} className="bannerImg" />  
            <Carousel.Caption>

          <div id="slide2content">
             <h1>A Sofa,</h1>
             <h1>A Good Book</h1>
             <h1>And you!</h1>
          </div>
          
          
        </Carousel.Caption>



      </Carousel.Item>
      <Carousel.Item>
      
      <img src={b2}  className="bannerImg"/> 
             <Carousel.Caption>
              <div id="slide3content">
          <h3>We Craft Collections that Really Matter!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


       </section>

       <section className="sec2">
               
               <h1 className="sec2heading">Bestsellers</h1>


     <div className="homeCards" data-aos="fade-up">
        {ans}
     </div>


       </section>
        
        
        </>
    )
}
export default Home;