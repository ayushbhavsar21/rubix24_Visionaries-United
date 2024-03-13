import React from 'react'
import Mask from '../assets/Mask.png'
import What from '../assets/What.png'
import Whatdark from '../assets/Whatdark.png'

function Section11() {
    return (
        <div className="dark:bg-primary bg-white h-[50vh]  md:h-[60vh] lg:h-[80vh] pt-[6vh] w-[full]  ">
            <div className='z-[1]  h-[1vh] w-[50vw] ' >
            <img src={Mask} alt="" />
            </div>
            <div className="z-[10] w-[100%] flex justify-center ">
                <img className='dark:inline hidden ' src={What} alt="" />
                <img className='dark:hidden' src={Whatdark} alt="" />
            </div>
            
        </div>
    )
}

export default Section11
