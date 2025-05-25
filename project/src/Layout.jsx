import Header from "./Components/Header";
import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Header/>

        <div className="NAV">
        <Link to="/" className="navUl">Home</Link>
        <Link to="genre"  className="navUl">Genre</Link>
        <Link to="author" className="navUl">Author</Link>
        <Link to="about" className="navUl">About</Link>
        <Link to="contact" className="navUl">Contact</Link>
        <Link to="search" className="navUl">Search</Link>
        </div>
        
        
        <Outlet/>
        
        </>
    )
}
export default Layout;