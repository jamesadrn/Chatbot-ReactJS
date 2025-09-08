import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState('');

  // event adalah sebuah object
  function saveInputText(event){
    setInputText(event.target.value);
  }

  function clearMessage(){
    setChatMessages([]);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]

    setChatMessages(newChatMessages);

    // Using chatbot external library to reply
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputText.trim() !== "") {
            sendMessage();
          }
        }}
      />
      <button
        onClick={sendMessage}
        className="send-button"
        disabled={inputText.trim() === ""}
        title={inputText.trim() === '' ? 'Message is empty' : ''}
      >
        Send
      </button>
      <button
        onClick={clearMessage}
        className='clear-button'
      >
        Clear
      </button>
    </div>
  );
}