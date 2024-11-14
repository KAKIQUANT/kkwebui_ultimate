// components/LLMChat.jsx

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar'; // If Navbar is to be included here; else, handled in App.jsx
import Footer from '../components/Footer'; // If Footer is to be included here; else, handled in App.jsx
import './LLMChat.css'; // Import component-specific styles

const LLMChat = () => {
  const [currentChatId, setCurrentChatId] = useState(null);
  const [chatHistories, setChatHistories] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Load chat histories from localStorage on component mount
  useEffect(() => {
    const savedChats = JSON.parse(localStorage.getItem('chatHistories')) || [];
    setChatHistories(savedChats);
    if (savedChats.length > 0) {
      setCurrentChatId(savedChats[0].id);
      setMessages(savedChats[0].messages);
    } else {
      // Initialize with a default chat
      const initialChat = createNewChat();
      setCurrentChatId(initialChat.id);
      setMessages(initialChat.messages);
    }
  }, []);

  // Save chat histories to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatHistories', JSON.stringify(chatHistories));
  }, [chatHistories]);

  // Scroll to the latest message when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      name: `Chat ${chatHistories.length + 1}`,
      messages: [{ sender: 'LLM', text: 'Hello! How can I assist you today?' }],
    };
    setChatHistories((prevChats) => [newChat, ...prevChats]);
    return newChat;
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'User', text: input.trim(), timestamp: new Date().toLocaleTimeString() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    // Mock LLM response after 1.5 seconds
    setTimeout(() => {
      const llmResponse = generateLLMResponse(input.trim());
      const updatedMessagesWithLLM = [...updatedMessages, llmResponse];
      setMessages(updatedMessagesWithLLM);
      setIsLoading(false);

      // Update the current chat history
      setChatHistories((prevChats) =>
        prevChats.map((chat) =>
          chat.id === currentChatId ? { ...chat, messages: updatedMessagesWithLLM } : chat
        )
      );
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const generateLLMResponse = (userInput) => {
    // Placeholder for actual LLM integration
    // Replace this with API call to your LLM service
    return {
      sender: 'LLM',
      text: `You said: "${userInput}". This is a mock response from the LLM.`,
      timestamp: new Date().toLocaleTimeString(),
    };
  };

  const handleSelectChat = (chatId) => {
    const selectedChat = chatHistories.find((chat) => chat.id === chatId);
    if (selectedChat) {
      setCurrentChatId(chatId);
      setMessages(selectedChat.messages);
    }
  };

  const handleNewChat = () => {
    const newChat = createNewChat();
    setCurrentChatId(newChat.id);
    setMessages(newChat.messages);
  };

  const handleDeleteChat = (chatId) => {
    const updatedChats = chatHistories.filter((chat) => chat.id !== chatId);
    setChatHistories(updatedChats);
    if (chatId === currentChatId && updatedChats.length > 0) {
      setCurrentChatId(updatedChats[0].id);
      setMessages(updatedChats[0].messages);
    } else if (updatedChats.length === 0) {
      const initialChat = createNewChat();
      setCurrentChatId(initialChat.id);
      setMessages(initialChat.messages);
    }
  };

  return (
    <div className="llm-chat-page">
      {/* Navigation Bar */}
      {/* If Navbar is handled globally in App.jsx, remove the following line */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Sidebar for Chat Histories */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h3>Chat History</h3>
            <button className="new-chat-button" onClick={handleNewChat}>New Chat</button>
          </div>
          <ul className="chat-list">
            {chatHistories.map((chat) => (
              <li
                key={chat.id}
                className={`chat-item ${chat.id === currentChatId ? 'active' : ''}`}
                onClick={() => handleSelectChat(chat.id)}
              >
                {chat.name}
                <button
                  className="delete-chat-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering handleSelectChat
                    handleDeleteChat(chat.id);
                  }}
                  aria-label={`Delete ${chat.name}`}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Window */}
        <main className="chat-container">
          <h1>{currentChatId ? 'LLM Chat Interface' : 'No Chat Selected'}</h1>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === 'LLM' ? 'llm-message' : 'user-message'
                }`}
              >
                <span className="message-sender">{msg.sender}:</span>
                <span className="message-text">{msg.text}</span>
                {msg.timestamp && <span className="message-timestamp">{msg.timestamp}</span>}
              </div>
            ))}
            {isLoading && (
              <div className="chat-message llm-message">
                <span className="message-sender">LLM:</span>
                <span className="message-text">Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input-area">
            <textarea
              className="chat-input"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              rows="3"
            ></textarea>
            <button className="send-button" onClick={handleSend} aria-label="Send Message">
              Send
            </button>
          </div>
        </main>
      </div>

      {/* Footer Bar */}
      {/* If Footer is handled globally in App.jsx, remove the following line */}
      {/* <Footer /> */}
    </div>
  );
};

export default LLMChat;
