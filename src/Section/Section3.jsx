import React, { useState, useEffect} from 'react';
import section31 from '../assets/section31.png';
import Worldmap from '../assets/Worldmap.png'
import CourseCards from '../Components/CourseCards';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

function Section3() {
  const [selectedCategory, setSelectedCategory] = useState('DSA'); 
  const [mentorList, setMentorList] = useState([]);

  const mentorCollectionRef = collection(db, "Mentors");

  useEffect(() => {
    const getMentorList = async () => {
      try {
        const data = await getDocs(mentorCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setMentorList(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    getMentorList();
  }, [])
  
  return (
<>
<div>
  <p className='font-playfair text-[40px] pl-4  dark:text-white dark:bg-primary'>Upskilling Courses</p>
</div>
<div ref={(section) => section && section.scrollIntoView({ behavior: 'smooth' })} id="targetSection" className='flex w-full h-[80vh] justify-between p-4 dark:bg-primary' style={{ backgroundImage: `url(${Worldmap})` , backgroundRepeat: 'no-repeat' }}>
      <div className='flex flex-col h-[80vh] justify-evenly text-gray-900 font-playfair'>
        
        <div>
          <button className='py-6 w-[200px] dark:bg-black dark:hover:bg-secondary focus:bg-secondary bg-secondary text-white' onClick={() => setSelectedCategory('DSA')}>
            DSA →
          </button>
        </div>
        <div>
          <button className='py-6 w-[200px] dark:bg-black dark:hover:bg-secondary focus:bg-secondary bg-secondary text-white' onClick={() => setSelectedCategory('WebDevelopment')}>
            Web Development →
          </button>
        </div>
        <div>
          <button className='py-6 w-[200px] dark:bg-black dark:hover:bg-secondary focus:bg-secondary bg-secondary text-white' onClick={() => setSelectedCategory('aiml')}>
            AI/ML →
          </button>
        </div>
        <div>
          <button className='py-6 w-[200px] dark:bg-black dark:hover:bg-secondary focus:bg-secondary bg-secondary text-white' onClick={() => setSelectedCategory('blockchain')}>
            Blockchain →
          </button>
        </div>
        {/* Add buttons for other categories as needed */}
      </div>
      <div className="overflow-y-auto max-h-[100vh]">
        <div className="mx-auto grid w-[80%] max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {selectedCategory === 'DSA' && mentorList
       .filter(mentor => mentor.domain === 'DSA')
       .map((item) => (
       <CourseCards 
         key={item.id}
         props={item}
       />
        ))}

          {selectedCategory === 'WebDevelopment' && mentorList.filter(mentor=>mentor.domain=='Development').
          map((item) => (
            <CourseCards 
            key={item.id}
            props={item}
            />
          ))}

          {selectedCategory === 'aiml' && mentorList.filter(mentor=>mentor.domain=='AI/ML').
          map((item) => (
            <CourseCards 
            key={item.id}
            props={item}
            />
          ))}
          
          {selectedCategory === 'blockchain' && mentorList.filter(mentor=>mentor.domain=='Blockchain').
          map((item) => (
            <CourseCards 
            key={item.id}
            props={item}
            />
          ))}
          
          {/* Add conditions for other categories */}
        </div>
      </div>
    </div>
</>
    
  );
}

export default Section3;
