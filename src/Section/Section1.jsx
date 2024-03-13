import React from 'react';
import Section11 from '../assets/section11.jpg';

function Section1() {
  return (
    <div className='w-full h-[88vh] bg-cover bg-center flex justify-center items-center text-white font-playfair flex-col' style={{ backgroundImage: `url(${Section11})` }}>
   
   <h1 className=' [font-size:_clamp(5vw,6vw,7vw)] font-bold pt-[10%]'>Learn and grow with help from </h1>
   <h1 className=' [font-size:_clamp(4vw,5vw,7vw)] font-bold '>world class mentors</h1>
   <p className='[font-size:_clamp(2vw,3vw,6vw)]'>Book and meet over 6,086+ mentors for 1:1 mentorship in our </p>
   <p className='[font-size:_clamp(2vw,3vw,6vw)]'>global community.</p>
   
    </div>
  );
}

export default Section1;
