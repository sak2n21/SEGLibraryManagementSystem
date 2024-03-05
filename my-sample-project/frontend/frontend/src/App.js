import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
        .then(response => response.json())
        .then(data => setMessages(data.messages))
        .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          {messages.length > 0 ? (
              messages.map((message, index) => <p key={index}>{message}</p>)
          ) : (
              <p>Loading messages...</p>
          )}
        </header>
      </div>
  );
}

export default App;
