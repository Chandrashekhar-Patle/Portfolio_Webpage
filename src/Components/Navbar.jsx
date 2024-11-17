import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css'

const Navbar = ()=>{
    return (
        <>
        <div className="navbar">
            <h1>PORTFOLIO</h1>
            <div className="Links">
                <NavLink to="/">Home </NavLink>
                <NavLink to="/about"> About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/project">Project</NavLink>
            </div>
        </div>
        </>
    )
}

export default Navbar;