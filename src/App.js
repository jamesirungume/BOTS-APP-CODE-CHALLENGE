import './App.css';
import React, { useState, useEffect } from 'react';
import YourBotArmy from './YourBotArmy';
import BotDetails from './BotDetails';
import BotsCollection from './BotsCollection';


function App() {
  const [Bots, setBots] = useState([]);
  const [addBot, setAddBot] = useState([]);
  const [viewSpecs, setViewSpecs] = useState(null);

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

  function handleGoBack() {
    setViewSpecs(null);
  }

  function handleViewDetails(bot) {
    setViewSpecs(bot);
  }

  function handleBotAdd(bot) {
    const findBot = addBot.find(Bot => Bot.id === bot.id);
    if (!findBot) {
      setAddBot([...addBot, bot]);
      setViewSpecs(null);
    setBots((Bots) => Bots.filter(Bot => Bot.id !== bot.id))
    }
  }

  function handleRealese(bot) {
    setAddBot((addBot) => addBot.filter(armybot => armybot.id !== bot.id));
  }

  function handleDelete(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE"
    })
    .then(data => {
      setAddBot((addBot) => addBot.filter(armybot => armybot.id !== bot.id));
    });
  }

  return (
    <div>
      {viewSpecs ? (
        <BotDetails viewSpecs={viewSpecs} onEnlistBot={handleBotAdd} onGoBackToList={handleGoBack} />
      ) : (
        <>
          
          <YourBotArmy addBot={addBot} onRealese={handleRealese} onDelete={handleDelete} />
          <BotsCollection Bots={Bots} addBot={addBot} onViewDetails={handleViewDetails} />
        </>
      )}
    </div>
  );
}

export default App;
