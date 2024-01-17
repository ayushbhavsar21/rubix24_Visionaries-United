import React from 'react';
import Section11 from '../assets/Section11.jpg';

function Section1() {
  return (
    <div className='w-full h-[88vh] bg-cover bg-center flex justify-start items-center text-white font-playfair flex-col' style={{ backgroundImage: `url(${Section11})` }}>
   <h1 className=' text-[60px] font-bold pt-[10%]'>Learn and grow with help from </h1>
   <h1 className=' text-[60px] font-bold '>world class mentors</h1>
   <p className='text-[20px]'>Book and meet over 6,086+ mentors for 1:1 mentorship in our </p>
   <p className='text-[20px]'>global community.</p>
    </div>
  );
}

export default Section1;
