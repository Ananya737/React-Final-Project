import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Genre from "./Pages/Genre";
import Author from "./Pages/Author";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CartDes from "./Pages/CartDes";
import MyCart from "./Pages/MyCart";
import Wishlist from "./Pages/Wishlist";
import Search from "./Pages/Search";

const App=()=>{
  return(
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="genre" element={<Genre/>}/>
        <Route path="author" element={<Author/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="cartDes/:id" element={<CartDes />}/>
        <Route path="mycart" element={<MyCart />}/>
        <Route path="wishlist/:id" element={<Wishlist />}/>
        <Route path="search" element={<Search />}/>
      


        </Route>
      </Routes>
    </BrowserRouter>


    
    </>
  )
}
export default App;