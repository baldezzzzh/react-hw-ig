import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./hw5.module.css";


function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.header_inner}>
                <NavLink to="/pre-junior" className={classes.header_link}>Pre junior</NavLink>
                <NavLink to="/junior" className={classes.header_link}>Junior</NavLink>
                <NavLink to="/junior-plus" className={classes.header_link}>JuniorPlus</NavLink>
                <div className={classes.link_div}></div>
            </div>
        </div>

    )
}

export default Header
