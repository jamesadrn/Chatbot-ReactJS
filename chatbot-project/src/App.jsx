import { useState, useEffect } from 'react'
// Named Export menggunakan curly bracket
import { ChatInput } from './components/ChatInput';
// default export jadi tidak memerlukan curly bracket '{}'
import ChatMessages from './components/ChatMessages';
import ToggleThemeButton from './components/ToggleThemeButton';
import { Chatbot } from 'supersimpledev'
import './App.css'

function App() {

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    Chatbot.addResponses({
      // "Abel" = Key , "Hello Abel," = Value jadi bot menerima key dan memberikan value
      "Abel" : "Hello Abel",
      'Give me a unique id' : function(){
        // Di bawah ini namanya template literal. jadi kita pakai backtick(`) bukan (') tanda petik karna nanti function call ${crypto...} malah jadi string bukan function call.
        return `Sure! Here is your unique ID: ${crypto.randomUUID()}`;
      }
    });
    // 
    // [] dibawah sini digunakan untuk memberikan instruksi agar useEffect hanya jalan sekali waktu mount
  }, [])

  return (
    <div className="app-container">
      <div className="theme-container">
        <ToggleThemeButton
          darkMode={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
      </div>
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
