import React from 'react'
import Mask from '../assets/Mask.png'
import What from '../assets/What.png'
import Whatdark from '../assets/Whatdark.png'

function Section11() {
    return (
        <div className="dark:bg-primary bg-white ">
            <div className='z-[1]  h-[1vh] w-[50vw] ' >
            <img src={Mask} alt="" />
            </div>
            <div className="z-[10]  ">
                <img className='dark:inline hidden ' src={What} alt="" />
                <img className='dark:hidden' src={Whatdark} alt="" />
            </div>
        </div>
    )
}

export default Section11
