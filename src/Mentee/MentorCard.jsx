import React, { useState } from 'react'
function MentorCard({ props }) {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.roomCode);
        setIsCopied(true);
    };
    return (
        <>
            <div className=" bg-gradient-to-r from-[#FAF5FF] from-0% via-[#3ec6d7] via-65% to-[#FAF5FF] to-100% md:w-[70%] w-[80%] h-[40vh] rounded-[25px] border border-black  flex items-center mb-[3vh] overflow-hidden ">
                <div className=" w-[25%] h-[80%] border-2 ml-[5%] rounded-[25px] border-black hidden md:block  ">
                    <img className='h-[100%] w-[100%] rounded-[25px]' src={props.imageUrl} alt="" />
                </div>
                <div className="md:w-[70%] w-[100%] h-[100%] flex flex-col items-center gap-3 justify-center  ">
                    <h1 className='font-playfair md:text-[40px] text-[30px] font-bold pt-[2vh] ' >{props.name} </h1>
                    <p className='font-playfair  ' > {props.domain} </p>
                    <p className='font-playfair text-[15px] ' >{props.qualification}</p>
                    <p className='font-playfair text-[20px] font-semibold ' > Room Code: {props.roomCode}</p>
                    <div className='flex md:w-[50%] w-[70%] justify-center gap-2 ' > 
                    <button onClick={copyToClipboard} className="py-2 px-4 w-[30%] flex justify-center bg-secondary rounded-3xl text-[18px] text-white ">
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                    <a href="/room-mentor" className='py-2 px-4 w-[30%] flex justify-center bg-secondary rounded-3xl text-[18px] text-white'>Join </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MentorCard;
