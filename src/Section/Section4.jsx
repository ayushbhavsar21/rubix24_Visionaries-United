import React from 'react'
import section41 from '../assets/section41.png'
function Section4() {
  return (
    <div className='h-[130vh] bg-primary bg-cover bg-center flex flex-col  items-center gap-28' style={{ backgroundImage: `url(${section41})` }}>
      <div className='text-center text-white'>
     <p className='text-[40px] '>OUR TESTIMONIALS</p>
     <p className='text-[50px] font-bold'>Wins from all around the</p>
     <p className='text-[50px] font-bold'>Globe.</p>
      </div>
      <div className='flex justify-center gap-8  w-full items-center'>
         <div className='w-[300px] h-[300px] bg-secondary shadow-lg shadow-white'>
           <div className='flex flex-col gap-2 h-[100%] justify-center pl-4 text-white w-[280px]'>
           <p className='font-bold ' >Ayush Bhavsar</p>
            <p>12 September 2023</p>
            <p>
                
            "Incredible programming course! Engaging content, clear explanations, and hands-on projects enhanced my coding skills. A must for anyone seeking practical knowledge and advancement in programming."
            </p>
           </div>
            
         </div>
         <div className='w-[300px] h-[300px] bg-white shadow-lg shadow-white'>
         <div className='flex flex-col gap-2 h-[100%] justify-center pl-4 text-gray-400 w-[280px]'>
           <p className='font-bold ' >Satya Prakash Jena</p>
            <p>18 December 2023</p>
            <p>
                
            "Incredible programming course! Engaging content, clear explanations, and hands-on projects enhanced my coding skills. A must for anyone seeking practical knowledge and advancement in programming."
            </p>
           </div>
         </div>
         <div className='w-[300px] h-[300px] bg-white shadow-lg shadow-white'>
         <div className='flex flex-col gap-2 h-[100%] justify-center pl-4 text-gray-400 w-[280px]'>
           <p className='font-bold ' >Aviral Patel</p>
            <p>17 January 2024</p>
            <p>
                
            "Incredible programming course! Engaging content, clear explanations, and hands-on projects enhanced my coding skills. A must for anyone seeking practical knowledge and advancement in programming."
            </p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Section4
