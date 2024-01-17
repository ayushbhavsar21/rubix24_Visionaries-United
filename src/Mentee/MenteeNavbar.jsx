import React from 'react'
import NavLogo from '../assets/navLogo.svg'
import Ham from '../assets/ham.svg'
import { useState } from 'react'

function MenteeNavbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
    return (
        <>
        <div className='h-[12vh] bg-primary flex justify-between items-center text-white w-full md:p-8 pr-4 pl-2'>
      <div className='flex justify-start items-center'>
        <a href="/">
        <img src={NavLogo} alt="" />
        </a>
      </div>
      <div className='md:flex  gap-[5vw] items-center j hidden'>
        <a href="">DashBoard</a>
        <a href="">Workshops</a>
        <a href="">Find a mentor</a>
        <a href="" className='py-2 px-5 rounded-3xl border-[2px] border-secondary'>Log Out</a>
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
            <a href="" className='text-[18px] text-white pl-2'>
              DashBoard
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div>
            <a href="" className='text-[18px] text-white pl-2'>
              Workshops
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div>
            <a href="" className='text-[18px] text-white pl-2'>
            Find a mentor
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div className='self-center pt-8'> 
          
            <a href="" className='py-2 px-4 bg-secondary rounded-3xl text-[18px] text-white'>Log Out</a>
           
          </div>
    </div>
    )}
        </>
    )
}

export default MenteeNavbar
