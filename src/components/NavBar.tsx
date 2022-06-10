import * as React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Raul Hardware Store
      </Link>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/ProductList">Product List</Link>
        <Link to="/ProductListAll">Product List 2</Link>
        <button className="">Log out</button>
      </ul>
    </nav>
  )
}

