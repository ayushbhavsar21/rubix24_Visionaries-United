import React from 'react'
import NavLogo from '../assets/navLogo.svg'
import Ham from '../assets/ham.svg'
import { useState } from 'react'
function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
  return (
    <>
   
    <div className='h-[12vh] bg-primary flex justify-between items-center text-white w-full md:p-8 pr-4 pl-2'>
      <div className='flex justify-start items-center'>
        <img src={NavLogo} alt="" />
      </div>
      <div className='md:flex gap-4 items-center hidden'>
        <a href="">Find a mentor</a>
        <a href="">Become a mentor</a>
        <a href="" className='py-2 px-5 rounded-3xl border-[2px] border-secondary'>Log In</a>
        <a href="" className='py-2 px-4 bg-secondary rounded-3xl'>Sign Up</a>
      </div>
      <div className='md:hidden'>
       <button onClick={toggleDropdown}>
       <img src={Ham} className='h-[30px]' alt="" />
       </button>
      </div>

    </div>
    {isDropdownOpen && (
    <div className='w-full h-[88vh] bg-primary flex flex-col gap-6 pt-8'>
    <div>
            <a href="/" className='text-[18px] text-white pl-2'>
              Become a mentor
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div>
            <a href="/" className='text-[18px] text-white pl-2'>
              Find a mentor
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div>
            <a href="/" className='text-[18px] text-white pl-2'>
              Log In
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div className='self-center pt-8'> 
          
            <a href="" className='py-2 px-4 bg-secondary rounded-3xl text-[18px] text-white'>Sign Up</a>
           
          </div>
    </div>
    )}
    
</>
    
  )
}

export default Navbar
