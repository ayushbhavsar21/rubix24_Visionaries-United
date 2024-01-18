import React from 'react'
import MenteeNavbar from './MenteeNavbar'
// import CourseCards from '../Components/CourseCards'
// import { Data } from '../api/Data'
import Workshopcard from './Workshopcard';

function Dashboard() {
    return (
        <>
            <MenteeNavbar />
            <div className="bg-primary   flex flex-col   ">
                <div>
                    <h1 className='text-white text-[36px] w-[90%] ml-9 pl-9 pb-1 mb-9 border-b-4 border-white ' >Mentors</h1>
                </div>
                <div>
                    <h1 className='text-white text-[36px] w-[90%] ml-9 pl-9 pb-1 mb-9 border-b-4 border-white   ' >Workshops</h1>
                    <div className='bg-primary w-[100%] flex flex-col gap-[5vh] items-center  '>
                        <Workshopcard />
                        <Workshopcard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
