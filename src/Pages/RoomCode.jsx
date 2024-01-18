import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateDoc, getDocs, doc, collection } from 'firebase/firestore';
import { db , auth} from '../config/firebase';

function HomePage() {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const mentorCollectionRef = collection(db, "Mentors");

    const handleRoomCodeChange = (event) => {
        setRoomCode(event.target.value);
    };

    const handleEnterRoom = () => {
        // You can add your logic here for handling entering the room with the code
        console.log(`Entering room with code: ${roomCode}`);
        navigate(`/room/${roomCode}`);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        const data = await getDocs(mentorCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))

        const currentUserId = auth?.currentUser?.uid;

        const foundDocument = filteredData.find((doc) => doc.userId === currentUserId);

        console.log(filteredData);
            const foundDocumentId = foundDocument.id;
            
            const mentorDocRef = doc(db, "Mentors", foundDocumentId);
        
            try {

                await updateDoc(mentorDocRef, {
                    roomCode: roomCode,
                });
        
                await handleEnterRoom();
                
                console.log('Room code updated successfully.');
            } catch (error) {
                console.error('Error updating room code:', error.message);
            }
        
    };

    const handleGoToHome1 = () => {

        navigate('/home1');
    };

    return (
        <>
        <div className="w-full flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Enter Room Code</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="roomCode" className="block text-gray-700 text-sm font-bold mb-2">Room Code</label>
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
                <div className="mt-4">
                    <button
                        onClick={handleGoToHome1}
                        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Go to Home1
                    </button>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default HomePage;
