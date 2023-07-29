import React from "react";
import './App.css';

function BotsCollection({ Bots, addBot, onRelease, onDelete, onViewDetails }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '52px' }}>
      {Bots.map(bot => (
        <div key={bot.id} className="bot-card" onClick={() => onViewDetails(bot)}>
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

export default BotsCollection;
