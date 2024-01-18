// OptionChatbot.js

import React, { useState, useEffect } from 'react';
import chatbot from '../assets/chatbot.png'

const OptionChatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionClick = (option) => {
    // Add selected option to chat history
    setChatHistory([...chatHistory, { type: 'user', message: option }]);

    // Set the selected option
    setSelectedOption(option);

    // Expand the chatbot and start loading animation
    setIsExpanded(true);
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      // Handle logic based on the selected option
      let botResponse = '';

      switch (option) {
        case 'How to Create a Mentee Account':
          botResponse = 'To create a Mentee Account... Click on Register button on Navbar , then fill the details and Click on Register ';
          break;
        case 'How to Become a Mentor':
          botResponse = 'To create a Mentor ... Click on "Become a Mentor" tap on Navbar , then fill the details and Click on Register... After that Click on "Create a Profile" tap in Navbar, fill the form .. And finally your account is created !!  ';
          break;
        case 'Find Mentors':
          botResponse = 'For finding Mentor first SignIn or Register as Mentee , Then click on "Find a Mentor" tap on Navbar';
          break;
        case 'Explore Free Workshops':
          botResponse = 'SignIn or Register as Mentee and go to Workshop tab on Navbar, there you will find all the free workshops hosted by top Mentors';
          break;
        case '1:1 MentorShip Code':
          botResponse = 'When a Mentee Subscribe to a Mentor , Mentor provides and PIN to Mentee which is used to join 1:1 session , this is a very confidential PIN and mentee should preserve it. ';
          break;
        default:
          botResponse = `You selected: ${option}. Here is a link to ${option} page.`;
      }

      // Add bot response to chat history
      setChatHistory([...chatHistory, { type: 'bot', message: botResponse }]);
      
      // Stop loading animation after receiving the response
      setIsLoading(false);

      // Reset selectedOption after displaying the bot response
      setSelectedOption(null);

      // Scroll chat history to the bottom
      const chatContainer = document.getElementById('chatContainer');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 2000); // Simulated delay for the loading animation and better visual separation
  };

  // Function to close the chatbot and reset chat history
  const handleCloseChatbot = () => {
    setSelectedOption(null);
    setIsExpanded(false);
    setChatHistory([]);
  };

  useEffect(() => {
    // Scroll chat history to the bottom when new messages are added
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className={`font-playfair fixed mb-2 bottom-4 right-4 transition-all ${isExpanded ? 'h-[70%] w-[350px] mb-[1vh]  ' : 'h-12 w-12'}`}>
      {isExpanded && (
        <button className="absolute top-4 pt-1 pr-1 right-2 text-lg font-bold" onClick={handleCloseChatbot}>
          X
        </button>
      )}
      {!isExpanded ? (
        <div className=" cursor-pointer absolute bottom-0 right-0" onClick={() => setIsExpanded(true)}>
          {/* You can customize the appearance of the small circle here */}
          <div className=" h-[9vh] w-[9vh] rounded-full flex justify-center bg-white ">
            <img className='p-1' src={chatbot} alt="" />
          </div>
        </div>
      ) : (
        <div className="max-w-lg mx-auto mt-4 p-4 border-2 rounded-xl border-black  shadow  bg-pink-100 ">
          
          <div>
            {isLoading && <p>Loading...</p>}
            {selectedOption && (
              <p className="mb-2">You selected: {selectedOption}</p>
            )}
            {!isLoading && !selectedOption && (
              <div className='flex flex-col items-center justify-center gap-2'>
                <p className=" text-[20px] font-bold ">Please choose an option:</p>
                <div className="flex gap-4 flex-wrap  ">
                  <button onClick={() => handleOptionClick('How to Create a Mentee Account')} className="btn p-1 pl-2 pr-2 border-[1.5px] border-black bg-secondary rounded-3xl text-white text-[14px]  ">How to Create a Mentee Account</button>
                  <button onClick={() => handleOptionClick('How to Become a Mentor')} className="btn p-1 pl-2 pr-2 border-[1.5px] border-black bg-secondary rounded-3xl text-white text-[14px] ">How to Become a Mentor</button>
                  <button onClick={() => handleOptionClick('Find Mentors')} className="btn p-1 pl-2 pr-2 border-[1.5px] border-black bg-secondary rounded-3xl text-white text-[14px] ">Find Mentors</button>
                  <button onClick={() => handleOptionClick('Explore Free Workshops')} className="btn p-1 pl-2 pr-2 border-[1.5px] border-black bg-secondary rounded-3xl text-white text-[14px] ">Explore Free Workshops</button>
                  <button onClick={() => handleOptionClick('1:1 MentorShip Code')} className="btn p-1 pl-2 pr-2 border-[1.5px] border-black bg-secondary rounded-3xl text-white text-[14px] ">1:1 MentorShip Code</button>
                {/* Add more buttons/options as needed */}
                </div>
              </div>
            )}
          </div>
          <div id="chatContainer" className="mb-4 h-[40vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2">Chatbot</h2>
            <div className="flex flex-col">
              {chatHistory.map((entry, index) => (
                <div key={index} className={`mb-2 ${entry.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`rounded p-2 inline-block ${entry.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                    {entry.message}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionChatbot;
