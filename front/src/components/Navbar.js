import React from 'react'
import {Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='w-full bg-sky-400 p-4 sticky top-0 flex'>
        <nav className='flex justify-between w-full'>
            <h3>Blog Spot</h3>

            <ul className='flex'>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar