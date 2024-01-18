import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RoomCode() {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleRoomCodeChange = (event) => {
        setRoomCode(event.target.value);
    };

    const handleEnterRoom = () => {
        // You can add your logic here for handling entering the room with the code
        console.log(`Entering room with code: ${roomCode}`);
        navigate(`/room/${roomCode}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEnterRoom();
    };

    const handleGoToHome1 = () => {
        // Navigate to Home1 component when the button is clicked
        navigate('/notifications-page');
    };

    return (
        // <div className="w-full flex items-center justify-center bg-gray-100">
        //     <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        //         <h1 className="text-2xl font-bold mb-6 text-center">Enter Room Code</h1>
        //         <form onSubmit={handleSubmit} className="space-y-4">
        //             <div>
        //                 <label htmlFor="roomCode" className="block text-gray-700 text-sm font-bold mb-2">Room Code</label>
        //                 <input
        //                     id="roomCode"
        //                     type="text"
        //                     required
        //                     placeholder="Enter Room Code"
        //                     value={roomCode}
        //                     onChange={handleRoomCodeChange}
        //                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        //                 />
        //             </div>
        //             <div>
        //                 <button
        //                     type="submit"
        //                     className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        //                 >
        //                     Enter Room
        //                 </button>
        //             </div>
        //         </form>
               
        //     </div>
        // </div> 
        <div className="w-full h-screen flex items-center justify-center bg-primary">
        <div className="bg-[#FAF5FF] shadow-md rounded-md p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Enter Room Code</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="roomCode"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Room Code
              </label>
              <input
                id="roomCode"
                type="text"
                required
                placeholder="Enter Room Code"
                value={roomCode}
                onChange={handleRoomCodeChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                Enter Room
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default RoomCode;