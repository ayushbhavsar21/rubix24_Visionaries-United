import React from 'react'

function Workshopcard() {
    return (
        <>
        <div className=" md:w-[70%] w-[80%] h-[35vh] rounded-[25px] border border-black bg-[#c1d3dc] flex items-center mb-[3vh]  ">
                <div className=" w-[25%] h-[80%] border ml-[5%] rounded-[25px] border-black ">
                    <img src="" alt="" />
                </div>
                <div className="w-[70%] h-[100%] flex flex-col items-center gap-3   ">
                    <h1 className='font-playfair text-[30px] font-bold pt-[2vh] ' >Title of Workshop </h1>
                    <p className='font-playfair pl-[35%] ' >By Satya Prakash Jena</p>
                    <p className='font-playfair text-[15px] pl-[50%]  ' >BTech(NIT Raipur)</p>
                    <p className='font-playfair text-[20px] font-semibold ' >Duration : 1 Hour</p>
                    <a href="/MenteeRegister" className='py-2 px-4 w-[30%] flex justify-center bg-secondary rounded-3xl text-[18px] text-white'>Join </a>
                </div>
            </div>
        </>
    )
}

export default Workshopcard
