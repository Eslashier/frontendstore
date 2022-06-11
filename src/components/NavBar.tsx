import { Link } from 'react-router-dom'
import logo from "../imgs/Logo.png"
import "./styles/stylesNavBar.css";
import { RootState } from '../state/store';
import { useSelector } from "react-redux";
import LogOut from './LogOut';

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
          <Link to="/Inventory">Inventory</Link>
          <Link to="/NewOrder">New Order</Link>
          <Link to="/Bills">Bills</Link>
          <Link to="/Receipts">Receipts</Link>
          <LogOut/>
        </ul>
      </nav>)}
    return(<nav className="nav">
    <Link to="/" className="site-title">
      <img style={{height: 50}} src={logo}/>
    </Link>

  </nav>)
 
}

