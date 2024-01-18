import React from 'react'

function CourseCards({props}) {
  return (
    
          <div className="rounded-md border text-white bg-primary">
            <img
              src={props.photo}
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">{props.name}</h1>
              <p className="mt-3 text-sm">
              {props.text}
              </p>
              <p>{props.timing}</p>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-secondary px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 "
              >
                View Profile
              </button>
            </div>
          </div>

  )
}

export default CourseCards
