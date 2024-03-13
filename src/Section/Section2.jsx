import React from 'react'
import About from '../assets/About.png'
import Aboutdark from '../assets/Aboutdark.png'
function Section2() {
  return (
    <div className='flex justify-around items-center w-full dark:bg-primary md:h-[70vh] lg:h-[90vh]   '>
      <div className='w-[30%] md:block hidden '>
      <img src={About} alt="" className='  hidden dark:inline relative  '/>
      <img src={Aboutdark} alt="" className='dark:hidden relative  '/>
      </div>
      <div className='flex flex-col  md:items-start justify-center items-center md:w-[35%] dark:text-white text-black font-playfair  gap-4'>
       <p className='text-[25px]  '>ABOUT US</p>
       <p className='text-[25px]'>Book 1:1 Sessions</p>
       <p className='text-[20px]'>Creative & Proffesional Digital Mentors!</p>
       <p className='text-[18px]'>Schedule a session instantly with a mentor and work with them directly on Teetors - whether it's for one-off tactical advice or multiple sessions towards a long-term goal.
       </p>

       <p className='text-[18px]'>
       Schedule a session instantly with a mentor and work with them directly on Teetors - whether it's for one-off tactical advice or multiple sessions towards a long-term goal.
       </p>
       <button className='text-xs py-2 rounded-3xl bg-secondary w-[180px] text-white'>EXPLORE MENTORS</button>
      </div>
    </div>
  )
}

export default Section2
