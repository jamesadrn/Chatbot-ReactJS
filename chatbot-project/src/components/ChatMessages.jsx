import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  // initial value is null now
  const chatMessagesRef = useRef(null);


  useEffect(() => {
    // useEffect run after the components created. and then we can accses the div element 
    // ending the variable with 'Elem' artinya variabel itu nyimpen elemen html
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
    // dependency array
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              time={chatMessage.time}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        })}
    </div>
  );
}

// default Export
export default ChatMessages;
