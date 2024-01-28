import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style.scss"

function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="logo">
          <Link to={"/"}> 
           <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
          </Link>
        </div>
        <div className="menu">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/basket"}>Basket</NavLink></li>
                <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
                <li><NavLink to={"/addPage"}>Add Page</NavLink></li>

            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar