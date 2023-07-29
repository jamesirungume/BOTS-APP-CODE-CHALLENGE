
import React from "react";

function BotDetails({ viewSpecs, onEnlistBot, onGoBackToList }) {
  return (
    <div className="BotDea">
      <h1 className="centered-heading">Bot Details</h1>
      <div className="bot-card">
        <img src={viewSpecs.avatar_url} alt={viewSpecs.name} />
        <li>{viewSpecs.name}</li>
        <p>Health: {viewSpecs.health}</p>
        <p>Damage: {viewSpecs.damage}</p>
        <p>Armor: {viewSpecs.armor}</p>
        <p>Class: {viewSpecs.bot_class}</p>
        <div className="catchphrase-data">{viewSpecs.catchphrase}</div>
        <button onClick={() => onEnlistBot(viewSpecs)}>Enlist</button>
        <button onClick={onGoBackToList}>Go Back</button>
      </div>
    </div>
  );
}

export default BotDetails;
