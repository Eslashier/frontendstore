import { Link } from 'react-router-dom'
import logo from "../imgs/Logo.png"
import "./stylesNavBar.css";

export default function Navbar() {
  return (
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
    </nav>
  )
}

