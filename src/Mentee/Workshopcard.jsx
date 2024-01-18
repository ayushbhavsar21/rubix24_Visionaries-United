import React from 'react'
import img from '../assets/Image.png'
function Workshopcard() {
    return (
        <>
        <div className=" bg-gradient-to-r from-[#FAF5FF] from-0% via-[#3ec6d7] via-65% to-[#FAF5FF] to-100% md:w-[70%] w-[80%] h-[35vh] rounded-[25px] border border-black  flex items-center mb-[3vh]  ">
                <div className=" w-[25%] h-[80%] border-2 ml-[5%] rounded-[25px] border-black ">
                    <img className='h-[100%] w-[100%] rounded-[25px] ' src={img} alt="" />
                </div>
                <div className="w-[70%] h-[100%] flex flex-col items-center gap-3   ">
                    <h1 className='font-playfair md:text-[40px] text-[30px] font-bold pt-[2vh] ' >Title of Workshop </h1>
                    <p className='font-playfair pl-[35%] ' >By Satya Prakash Jena</p>
                    <p className='font-playfair text-[15px] pl-[50%]  ' >BTech(NIT Raipur)</p>
                    <p className='font-playfair text-[20px] font-semibold ' >Room Code: 5555</p>
                    <a href="/room-code" className='py-2 px-4 w-[30%] flex justify-center bg-secondary rounded-3xl text-[18px] text-white'>Join </a>
                </div>
            </div>
        </>
    )
}

export default Workshopcard
