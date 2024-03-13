import React from 'react'
import MenteeNavbar from './MenteeNavbar'
import Workshopcard from './Workshopcard'
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
function Workshop() {
    const navigate = useNavigate();
    const handleGoToHome1 = () => {
        // Navigate to Home1 component when the button is clicked
        navigate('/notifications-page');
    };
    return (
        <div className='dark:bg-primary h-[100vh] bg-white ' >
        <MenteeNavbar/>
        <div className='dark:bg-primary w-[100%] flex flex-col gap-[5vh] items-center  '>
            <h1 className='dark:text-white  text-[30px] md:text-[35px] lg:text-[40px] font-playfair pt-[5vh] ' >Join Free Interactive WorkShops by top Mentors</h1>
            <Workshopcard/>
            <Workshopcard/>
            <div className="mt-4">
                    <button
                        onClick={handleGoToHome1}
                        className="w-full bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Notification Page
                    </button>
                </div>
        </div>
        
        <div className=''> <Footer/> </div>
        </div>
    )
}

export default Workshop
