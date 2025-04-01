import React, { useRef, useState } from 'react';
import './Hero.css';

import logo from '../assests/logo.png';
import profileIcon from '../assests/profile.png';
import sendIcon from '../assests/send.png';
import uploadIcon from '../assests/upload.png';
import convertIcon from '../assests/convert.png';
import flowchartIcon from '../assests/flowchart.png';
import cancelIcon from '../assests/cancel.png';

const Hero = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'question',
      text: 'How Can I Increase My Property Sales In A Competitive Market?',
    },
    {
      type: 'answer',
      text: 'To boost your property sales, focus on enhancing your property listings with high-quality images and detailed descriptions. Leverage targeted social media ads and collaborate with local influencers to reach potential buyers. Additionally, host virtual tours to attract remote buyers.',
    },
    {
      type: 'question',
      text: 'What Should I Consider When Managing Multiple Property Listings?',
    },
    {
      type: 'answer',
      text: 'When managing multiple property listings, prioritize organization and efficiency. Use a property management tool to keep track of listings, deadlines, and client interactions. Regularly update your listings with current information and high-quality images. Effective communication with clients and timely follow-ups are crucial for maintaining a smooth operation.',
    },
  ]);

  // Handle file upload
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      console.log('File selected:', file.name);
    }
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    fileInputRef.current.value = '';
    console.log('File upload canceled');
  };

  // Handle message send
  const handleSendMessage = () => {
    if (chatInput.trim() !== '') {
      setChatMessages([...chatMessages, { type: 'question', text: chatInput }]);
      setChatInput('');
    }
  };

  return (
    <div className="dashboard">
      {/* Navbar */}
      <div className="home-navbar">
        <div className="logo">
          <img src={logo} alt="ReoFlow" />
          <div className="logo-name">REQFLOW</div>
        </div>
        <button className="profile-btn">
          <img src={profileIcon} alt="Profile" />
        </button>
      </div>

      {/* Chat Section */}
      <div className="chat-container">
        <div className="chat-box">
          {chatMessages.map((msg, index) => (
            <div key={index} className={msg.type === 'question' ? 'question' : 'answer'}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="action-bar">
          {/* Upload Button */}
          <button className="icon-btn" onClick={handleUploadClick}>
            <img src={uploadIcon} alt="Upload" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          {/* Show file name and cancel button */}
          {selectedFile && (
            <div className="file-info">
              <p className="file-name">Selected: {selectedFile}</p>
              <button className="cancel-btn" onClick={handleCancelUpload}>
                <img src={cancelIcon} alt="Cancel" />
              </button>
            </div>
          )}

          {/* Convert Button */}
          <button className="icon-btn">
            <img src={convertIcon} alt="Convert" />
          </button>

          {/* Flowchart Button */}
          <button className="flowchart-btn">
            <img src={flowchartIcon} alt="Flowchart" />
          </button>

          {/* Chat Input */}
          <input
            type="text"
            className="chat-input"
            placeholder="Message Chatbot..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // Send message on Enter key
          />
          <button className="send-btn" onClick={handleSendMessage}>
            <img src={sendIcon} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;