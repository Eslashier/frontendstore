import { Link } from 'react-router-dom'
import logo from '../imgs/Logo.png'
import "./stylesNavBar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img style={{height: 50}} src={logo}/>
      </Link>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/ProductList">Product List</Link>
        <Link to="/ProductListAll">Product List 2</Link>
        <button className="logout">Log out</button>
      </ul>
    </nav>
  )
}

