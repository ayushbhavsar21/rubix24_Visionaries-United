import React, { useState } from 'react';
import section31 from '../assets/section31.png';
import CourseCards from '../Components/CourseCards';
import { Data } from '../api/Data.js';
import { Data2 } from '../api/Data2.js';
import { Data3 } from '../api/Data3.js';
import { Data4 } from '../api/Data4.js';

function Section3() {
  const [selectedCategory, setSelectedCategory] = useState('DSA'); // Set default category

  return (
    <div className='flex w-full h-[100vh] bg-primary ' style={{ backgroundImage: `url(${section31})` }}>
      <div className='flex flex-col h-[100vh] justify-evenly text-gray-900 font-playfair'>
        <div>
          <button className='py-6 w-[200px] bg-white' onClick={() => setSelectedCategory('DSA')}>
            DSA →
          </button>
        </div>
        <div>
          <button className='py-6 w-[200px] bg-white' onClick={() => setSelectedCategory('WebDevelopment')}>
            Web Development →
          </button>
        </div>
        <div>
          <button className='py-6 w-[200px] bg-white' onClick={() => setSelectedCategory('aiml')}>
            AI/ML →
          </button>
        </div>
        <div>
          <button className='py-6 w-[200px] bg-white' onClick={() => setSelectedCategory('blockchain')}>
            Blockchain →
          </button>
        </div>
        {/* Add buttons for other categories as needed */}
      </div>
      <div className="overflow-y-auto max-h-[100vh]">
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {selectedCategory === 'DSA' && Data.map((item) => (
            <CourseCards key={item.id} props={item} />
          ))}

          {selectedCategory === 'WebDevelopment' && Data2.map((item) => (
            <CourseCards key={item.id} props={item} />
          ))}

          {selectedCategory === 'aiml' && Data3.map((item) => (
            <CourseCards key={item.id} props={item} />
          ))}
          
          {selectedCategory === 'blockchain' && Data4.map((item) => (
            <CourseCards key={item.id} props={item} />
          ))}
          
          {/* Add conditions for other categories */}
        </div>
      </div>
    </div>
  );
}

export default Section3;
