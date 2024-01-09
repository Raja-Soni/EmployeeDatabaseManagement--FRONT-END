import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className="bg-blue-500">
      <div className='h-16 flex items-center'>
        <div className='h-12 bg-red-400 rounded px-2 py-2 font-bold mx-auto'>
            <Link to="/" className='no-underline text-white' ><h4>Employees Management</h4></Link>
        </div>
      
      </div>
    </div>
  )
}
