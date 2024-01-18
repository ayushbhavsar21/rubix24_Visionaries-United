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
        case 'How to Buy':
          botResponse = 'To buy a product, visit our product pages and click on the "Buy Now" button.';
          break;
        case 'Order History':
          botResponse = 'To view your order history, log in to your account and go to the order history section.';
          break;
        case 'Language Support':
          botResponse = 'We currently support multiple languages. You can change your language preference in your account settings.';
          break;
        case 'Product Options':
          botResponse = 'Explore our range of products and choose the one that suits your needs.';
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
    <div className={`font-playfair fixed bottom-4 right-4 transition-all ${isExpanded ? 'h-[70%] w-[350px]' : 'h-12 w-12'}`}>
      {isExpanded && (
        <button className="absolute top-4 right-2 text-lg" onClick={handleCloseChatbot}>
          X
        </button>
      )}
      {!isExpanded ? (
        <div className=" cursor-pointer absolute bottom-0 right-0" onClick={() => setIsExpanded(true)}>
          {/* You can customize the appearance of the small circle here */}
          <img src={chatbot} alt="" />
        </div>
      ) : (
        <div className="max-w-lg mx-auto mt-4 p-4 border rounded shadow bg-white">
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
          <div>
            {isLoading && <p>Loading...</p>}
            {selectedOption && (
              <p className="mb-2">You selected: {selectedOption}</p>
            )}
            {!isLoading && !selectedOption && (
              <div className='flex flex-col items-center gap-2'>
                <p className="mb-2">Please choose an option:</p>
                <button onClick={() => handleOptionClick('How to Buy')} className="btn w-[200px] bg-secondary text-white">How to Buy</button>
                <button onClick={() => handleOptionClick('Order History')} className="btn w-[200px] bg-secondary text-white">Order History</button>
                <button onClick={() => handleOptionClick('Language Support')} className="btn w-[200px] bg-secondary text-white">Language Support</button>
                <button onClick={() => handleOptionClick('Product Options')} className="btn w-[200px] bg-secondary text-white">Product Options</button>
                {/* Add more buttons/options as needed */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionChatbot;
