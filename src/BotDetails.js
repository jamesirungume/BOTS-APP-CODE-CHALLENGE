
import React from "react";
import './App.css';

function BotDetails({ viewSpecs, onEnlistBot, onGoBackToList }) {
  return (
    <div className="botDetails">
      {/* <h1 className="centered-heading">Bot Details</h1> */}
      <div className="bot-card">
        <img src={viewSpecs.avatar_url} alt={viewSpecs.name} />
        <li>{viewSpecs.name}</li>
        <p>Health: {viewSpecs.health}</p>
        <p>Damage: {viewSpecs.damage}</p>
        <p>Armor: {viewSpecs.armor}</p>
        <p>Class: {viewSpecs.bot_class}</p>
        <div className="catchphrase-data">{viewSpecs.catchphrase}</div>
        <button className="realese" onClick={() => onEnlistBot(viewSpecs)}>Enlist</button>
        <button className="realese"  onClick={onGoBackToList}>Go Back</button>
      </div>
    </div>
  );
}

export default BotDetails;
