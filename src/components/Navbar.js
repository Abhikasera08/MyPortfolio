import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
 <>
  <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Abhijeet's Portfolio</h1>
                <ul className="flex space-x-6"> <li className="hover:text-yellow-400 cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                            <Link to="/project">Projects</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                            <Link to="/contact">Contact</Link>
                        </li>
                </ul>
            </div>
        </nav>
 </>
  )
}

export default Navbar
