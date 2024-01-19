import React, { useState } from 'react';
import StarRating from './StarRating';
import { updateDoc, getDocs, doc, collection } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

function CourseCards({ props }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const navigate = useNavigate();
  const handleViewProfile = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const userCollectionRef = collection(db, 'users');
  const handleClick = async (event, mentorId) => {
    event.preventDefault();

    const data = await getDocs(userCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))

    const currentUserId = auth?.currentUser?.uid;

    const foundDocument = filteredData.find((doc) => doc.userId === currentUserId);
    const foundDocumentId = foundDocument.id;
    console.log(foundDocument);
    const userDocRef = doc(db, "users", foundDocumentId);

    try {

      await updateDoc(userDocRef, {
        MentorId: mentorId,
      });
      navigate("/Payment");
    } catch (error) {
      console.error('Error updating room code:', error.message);
    }

  };

  // Helper function to truncate bio to 10-15 words
  const truncateBio = (bio) => {
    const words = bio.split(' ');
    return words.slice(0, 10).join(' ') + " . . .";
  };

  return (
    <>
      <div className="rounded-md border dark:text-white bg-white dark:bg-primary">
        <img
          src={props.imageUrl}
          alt="Laptop"
          className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">{props.name}</h1>
          <p className="mt-3 text-sm">{truncateBio(props.bio)}</p>
          <p>{props.availability}</p>
          <p>Popularity: {props.popularity}</p>
          <StarRating rating={props.popularity} />
          <button
            type="button"
            onClick={handleViewProfile}
            className="mt-4 w-full rounded-sm bg-secondary px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-300"
          >
            View Profile
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <div className='fixed top-5 left-3 border-2 border-black w-[90vw] h-[90vh] dark:bg-primary  bg-[#FAF5FF] '>
          <button
            type="button"
            onClick={handleClosePopup}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 dark:text-white "
          >
            Close
          </button>
          <div className="flex pt-20 dark:text-white  "> <p className=' pl-5 text-[20px]'  >Name:</p>
            <p className=' pl-5 text-[20px] ' >{props.name}</p>
          </div>
          <div className="flex dark:text-white  "> <p className=' pl-5 text-[20px] '  >Popularity: </p>
            <p className='pl-5 text-[20px] ' >{props.popularity}</p>
          </div>
          <div className="flex dark:text-white  "> <p className=' pl-5 text-[20px] '  >Bio:</p> 
          <p className='pl-5' >{props.bio}</p>
          </div>
          <div className="flex dark:text-white  "> <p className=' pl-5 text-[20px] '  >Phone:</p> 
          <p className=' pl-5 text-[20px] ' >{props.phone}</p>
          </div>
          <div className="flex dark:text-white  "> <p className=' pl-5 text-[20px] '  >Pricing:</p> 
          <p className=' pl-5 text-[20px] ' >{props.price}</p>
          </div>
          <div className="flex dark:text-white  "> <p className=' pl-5 text-[20px] '  >Email:</p> 
          <p>{props.email}</p>
          </div>
          <div className="flex dark:text-white  "> <p className=' pl-5 text-[20px] '  >Availability:</p> 
          <p>{props.availability}</p>
          </div>
          <div className="flex dark:text-white  "> <p className=' pl-5 text-[20px] '  >Qualification:</p> 
          <p className='pl-5 text-[20px] ' >{props.qualification}</p></div>
          <div className="flex dark:text-white  "> <p className=' pl-5 text-[20px] '  >Domain:</p> 
          <p className='pl-5 text-[20px] ' >{props.domain}</p></div>
          <div className="pl-9 ">
          <StarRating  rating={props.popularity} /></div>
          <button onClick={async (event) => handleClick(event, props.id)} className="ml-[37%]  drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] px-4 py-3 w-[120px] bg-secondary text-white  rounded-3xl  self-center mt-4 " >
            Register
          </button>
        </div>
      )}
    </>
  );
}

export default CourseCards;
