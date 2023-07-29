// App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';

function App() {
  const [Bots, setBots] = useState([]);
  const [addBot,setAddBot] = useState([])

  function handleBotAdd(bot) {
     const findBot = addBot.find(Bot => Bot.id === bot.id)
     if(!findBot) {
      setAddBot([...addBot,bot])
     }
   }
  
   function handleRealese(bot) {
      setAddBot((addBot) =>  addBot.filter(armybot => armybot.id !== bot.id ))
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
  <div>
    <YourBotArmy addBot={addBot} onRealese={handleRealese}/>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '52px' }}>
      {Bots.map(bot => (
        <div key={bot.id} className="bot-card" onClick={() => handleBotAdd(bot)}>
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
      
  </div>
  );
}

export default App;
