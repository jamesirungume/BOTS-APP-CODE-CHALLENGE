// App.js
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [Bots, setBots] = useState([]);
  comst []

  function handleBotAdd() {
  
   }

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(resp => resp.json())
      .then(data => {
        setBots(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
   

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
      {Bots.map(bot => (
        <div key={bot.id} className="bot-card" onClick={handleBotAdd}>
          <img src={bot.avatar_url} alt={bot.name} />
          <li>{bot.name}</li>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <div className="catchphrase-data">{bot.catchphrase}</div>

        </div>
      ))}
    </div>
  );
}

export default App;
