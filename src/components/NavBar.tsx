import * as React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";

interface INavbarProps {
}

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Raul Hardware Store
      </Link>
        <Link to="/">Home</Link>
        <Link to="/ProductList">Product List</Link>
        <Link to="/ProductListAll">Product List 2</Link>
    </nav>
  )
}

