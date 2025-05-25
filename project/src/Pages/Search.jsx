import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../CartSlice';
import { useDispatch } from 'react-redux';

const Search=()=>{
    const [mydata, setMydata] = useState([]);
    const dispatch= useDispatch();
    const [pro, setPro]= useState("");
   
    const loadData=async()=>{
        let url="http://localhost:3000/Books";
      const response = await axios.get(url);
      console.log(response.data);
      setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, [])

      
    const handleInput=(e)=>{
       let proval= e.target.value;
       setPro(proval);
    }




    const ans= mydata.map((key)=>{
           let myval=pro.toLocaleLowerCase();
           let mystring= key.name.toLocaleLowerCase();
         const status= mystring.includes(myval);
         console.log(status)

       if (status)
       {
        
       

        return(
            <>
            <div >
                <Card style={{ width: '13rem', height:"400px" }}>
                    
      <Card.Img variant="top" src={key.image} style={{height:"250px"}} />
      <Card.Body>
        <p style={{fontSize:"12px"}}>{key.name}</p>
        <h6> Price : {key.price}</h6>
        <Button variant="primary"
        onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description,category:key.category, image:key.image, qnty:1, price:key.price }))}}>Add To Cart</Button>
      </Card.Body>
       </Card>
            </div>
                 
      
            
            </>
        )
        }
    })


    return(
        <>
        
          <center>
          <h3>Our Bestsellers</h3>
          Enter Product name : <input type="text" value={pro} onChange={handleInput} />
           
          </center>
          <div className='homeProduct' style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"50px",marginTop:"50px",width:"90%"}}>
          {ans}
          </div>
          
        </>
    )
}
export default Search;