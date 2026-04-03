import React from 'react'
import daisyui from 'daisyui'
import { Link } from 'react-router-dom'



function Nav() {
  return (
    <>
    <div className='fixed  px-4 max-lg:px-2  left-0 right-0 z-10 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg '>
     <div className="navbar  text-black shadow-sm">
  <div className="navbar-start">

    <div className="dropdown ">
       <div tabIndex={0} role="button" className="btn btn-ghost md:hidden font-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 text-white hover:cursor-pointer text-xl p-2 shadow">
        <li><a><Link to="/">Home</Link></a></li>
        <li>
          <a><Link to="/buy">Buy</Link></a>
          {/* <ul className="p-2">
            <li><a>Price 1cr</a></li>
            <li><a>Price 5cr</a></li>
            <li><a>Price 15cr</a></li>
            <li><a>Price 20cr</a></li>
          </ul> */}
        </li>
        <li><a><Link to="/rent">Rent</Link></a></li>
        <li><a><Link to="/about">About</Link></a></li>
      </ul>
    </div>
    <a className="  text-[25px] font-medium font-sans  max-sm:text-[19px]">Dream Home</a>
  </div >
  <div className="navbar-center hidden md:flex pr-10">
    <ul className="menu menu-horizontal px-2 text-xl ">
      <li><a className="hover:text-white hover:bg-black"><Link to="/">Home</Link></a></li>
      <li>
        {/* <details> */}
          <summary className="hover:text-white hover:bg-black"><Link to="/buy">Buy</Link></summary>
          {/* <ul className="p-2 bg-white w-40 z-1">
            <li><a className="hover:text-white hover:bg-black">Price 1cr</a></li>
            <li><a className="hover:text-white hover:bg-black">Price 5cr</a></li>
             <li><a className="hover:text-white hover:bg-black">Price 15cr</a></li>
              <li><a className="hover:text-white hover:bg-black">Price 20cr</a></li>
          </ul> */}
        {/* </details> */}
      </li>
      <li><a className="hover:text-white hover:bg-black"><Link to="/rent">Rent</Link></a></li>
       <li><a className="hover:text-white hover:bg-black"><Link to="/about">About</Link></a></li>
    </ul>
  </div>

  <label className="input bg-white border-black border-2 rounded-lg flex items-center gap-2 px-2 py-1 max-lg:hidden">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round" 
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" className='text-black' />
</label>
<div className='flex justify-end items-center gap-4 '>


<div className='flex justify-end items-end max-lg:flex-1 mx-4'>
  <div className="navbar-end">
    <a className="btn bg-green-500 "><Link to="/login">Login</Link></a>
            
  </div></div></div>
</div>

    </div>
    
    </>
  )
}

export default Nav
