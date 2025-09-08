import RobotProfileImage from '../assets/robot2.jpeg';
import UserProfileImage from '../assets/user2.png';
import dayjs from 'dayjs';
import './ChatMessage.css';

export function ChatMessage({ message, sender, time }) {
  const hasText = typeof message === 'string' && message.trim().length > 0;
  if (!hasText) return null;

  return (
    <div className={sender === 'user' 
      ? 'chat-message-user' 
      : 'chat-message-robot'
    }>
      {sender === "robot" &&(              
        <img src={RobotProfileImage} 
        className="chat-message-profile"/>
        )}
      <div className='chat-message-text'>
        {message}
        {time && (
          <div className='chat-message-time'>
          {dayjs(time).format('h:mma')}
        </div>
        )}
      </div>
      {sender === "user" &&(
        <img src={UserProfileImage} 
        className="chat-message-profile"/>
      )}
    </div>
  );
}