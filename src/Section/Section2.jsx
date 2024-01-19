import React from 'react'
import section21 from '../assets/Section21.svg'
import section22 from '../assets/section22.png'
import section23 from '../assets/section23.png'
import section24 from '../assets/section24.png'
import section23dark from '../assets/section23dark.png'
function Section2() {
  return (
    <div className='flex justify-around items-center w-full dark:bg-primary h-[100vh]'>
      <div className='w-[50%] relative left-16 top-20'>
       <img src={section21} alt="" className='relative left-28 top-24 w-[45%]' />
       <img src={section22} alt="" className='relative bottom-[350px] w-[130px] left-12'/>
       <img src={section23} alt="" className='hidden dark:inline relative bottom-[110px] w-[130px] left-12 '/>
       <img src={section23dark} alt="" className='dark:hidden relative bottom-[110px] w-[130px] left-12 '/>
       <img src={section24} alt="" className='relative  w-[150px] bottom-[300px] left-10'/>
      </div>
      <div className='flex flex-col w-[35%] dark:text-white text-black font-playfair relative right-28 bottom-20 gap-4'>
       <p className='text-[20px]'>ABOUT US</p>
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
