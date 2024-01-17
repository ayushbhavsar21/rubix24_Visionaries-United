import React from 'react'
import MenteeNavbar from './MenteeNavbar'
import Workshopcard from './Workshopcard'
function Workshop() {
    return (
        <>
        <MenteeNavbar/>
        <div className='bg-primary w-[100%] flex flex-col gap-[5vh] items-center  '>
            <h1 className='text-white text-[40px] font-playfair pt-[5vh] ' >Join Free Interactive WorkShops by top Mentors</h1>
            <Workshopcard/>
            <Workshopcard/>
        </div>
        </>
    )
}

export default Workshop
