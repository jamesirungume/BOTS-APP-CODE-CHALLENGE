import React, { useEffect, useState } from "react";
import './App.css';

function YourBotArmy({ addBot,onRealese,onDelete }) {
    function handleRelease(bot) {
        onRealese(bot)
    }
    function handleDelete(bot) {
    onDelete(bot)
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
          <button
              className="realese"
              onClick={() => handleRelease(bot)}
              
            >
              Release
            </button>
            <button
              onClick={() => handleDelete(bot)}
              style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer', marginTop: "5px", padding:"4px 9px", borderRadius:"4px" }}
            >
              X
            </button>
    </div>
        ))}
    </div>
 </div>
)
}
 
export default YourBotArmy;