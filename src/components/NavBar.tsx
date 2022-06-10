import { Link } from 'react-router-dom'
import logo from "../imgs/Logo.png"
import "./stylesNavBar.css";
import { RootState } from '../state/store';
import { useSelector } from "react-redux";

export default function Navbar() {
  const { user } = useSelector((state: RootState) => state.logging)
  
    if(user!==null){
      return(
      <nav className="nav">
        <Link to="/" className="site-title">
          <img style={{height: 50}} src={logo}/>
        </Link>
        <ul>
          <Link to="/ProviderList">Providers</Link>
          <Link to="/ProductAdd">Add a Product</Link>
          <Link to="/ProductList">Product List</Link>
          <Link to="/ProductListAll">Product List 2</Link>
          <Link to="/Bills">Bills</Link>
          <Link to="/Receipts">Receipts</Link>
          <button className="logout">Log out</button>
        </ul>
      </nav>)}
    return(<nav className="nav">
    <Link to="/" className="site-title">
      <img style={{height: 50}} src={logo}/>
    </Link>

  </nav>)
 
}

