import React, { useState } from 'react';
import StarRating from './StarRating';

function CourseCards({ props }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleViewProfile = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div className="rounded-md border text-white bg-primary">
        <img
          src={props.photo}
          alt="Laptop"
          className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">{props.name}</h1>
          <p className="mt-3 text-sm">{props.text}</p>
          <p>{props.timing}</p>
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
        <div className='fixed top-0 left-0 w-full h-full  bg-white'>
         
            <button
              type="button"
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <p>{props.text}</p>
            <p>{props.timing}</p>
            <p>Popularity: {props.popularity}</p>
          <StarRating rating={props.popularity} />
        </div>
      )}
    </>
  );
}

export default CourseCards;
