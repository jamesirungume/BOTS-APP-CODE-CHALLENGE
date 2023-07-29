import React, { useEffect, useState } from "react";
import './App.css';

function YourBotArmy({addBot,onRealese}) {
    function handleRelease(bot) {
        onRealese(bot)
    }
function handleDelete(bot) {
  onD
} 


return (
 <div className="botArmy" >
        <h1 className="centered-heading" >My bot army</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '70px' }}>
        {addBot.map(bot => (
    <div key={bot.id} className="bot-card">
           <img src={bot.avatar_url} alt={bot.name} />
          <li>{bot.name}</li>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <div className="catchphrase-data">{bot.catchphrase}</div>
          <button onClick={() => handleRelease(bot)}>Release</button>
          <button onClick={() => handleDelete(bot)}>X</button>
    </div>
        ))}
    </div>
 </div>
)
}
 
export default YourBotArmy;