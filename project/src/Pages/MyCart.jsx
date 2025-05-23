import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { qntyInc,qntyDec,proRemove } from "../CartSlice";
import { FaRupeeSign } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const MyCart=()=>{
    const cartData= useSelector(state=>state.mycart.cart);
    const dispatch = useDispatch();

    let TotAmount=0;
   const ans=cartData.map((key)=>{
    TotAmount+=key.qnty*key.price;
    return(
        <>
          <tr>
            <td>
                <img src={key.image} width="40" height="50" />
                </td>
            <td>{key.name}</td>
            <td>{key.genre}</td>
            <td style={{fontSize:"20px"}}>
            <FaMinusSquare onClick={()=>{dispatch(qntyDec({id:key.id}))}} style={{cursor:"pointer"}} />
                {key.qnty}

            <FaPlusSquare onClick={()=>{dispatch(qntyInc({id:key.id}))}} style={{cursor:"pointer"}} />
             
             </td>
            <td>{key.price}</td>
            <td>
                {key.qnty * key.price}
            </td>
            <td style={{fontSize:"30px"}}>
                  <MdDeleteSweep style={{cursor:"pointer"}} onClick={()=>{dispatch(proRemove({id:key.id}))}} />

            </td>
          </tr>
        
        </>
    )
   })
    return(
        <>
          <h1 style={{display:"flex",justifyContent:"center"
          }}>  Cart </h1>
          <h2 align="center"> <FaRupeeSign /> : {TotAmount}</h2>
          <hr />

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Genre</th>
          <th> Quantity </th>
          <th> Price</th>
          <th> Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
       </Table>
        </>
    )
}
export default MyCart;