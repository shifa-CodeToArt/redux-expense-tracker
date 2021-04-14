import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <>
        <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink exact to="/add" activeClassName="is-active">Add Expense</NavLink>
        <NavLink exact to="/help" activeClassName="is-active">Help</NavLink>
        </>
    )
}

export default Navbar
