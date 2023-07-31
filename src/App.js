import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotDetails from "./BotDetails";
import BotsCollection from "./BotsCollection";
import FilterByClass from "./FilterByClass";

function App() {
  // State variables
  const [Bots, setBots] = useState([]); // List of all bots fetched from the server
  const [addBot, setAddBot] = useState([]); // List of bots added to the user's army
  const [viewSpecs, setViewSpecs] = useState(null); // Bot whose details are currently being viewed
  const [selectedmyClass, setSelectedmyClasss] = useState([]); // Selected bot class for filtering
  const [filteredBots, setFilteredBots] = useState([]); // List of bots filtered by the selected class

  // Fetch bots data from the server on component mount
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Filter bots based on selected bot class
  useEffect(() => {
    setFilteredBots(
      Bots.filter((bot) => {
        if (selectedmyClass.length === 0) return true;
        return selectedmyClass.includes(bot.bot_class);
      })
    );
  }, [selectedmyClass, Bots]);

  // Function to handle bot class filtering
  function handlefilterClass(classe) {
    setSelectedmyClasss(classe);
  }

  // Function to go back from bot details view to the main list view
  function handleGoBack() {
    setViewSpecs(null);
  }

  // Function to view details of a specific bot
  function handleViewDetails(bot) {
    setViewSpecs(bot);
  }

  // Function to add a bot to the user's army
  function handleBotAdd(bot) {
    const findBot = addBot.find((Bot) => Bot.id === bot.id);
    if (!findBot) {
      setAddBot([...addBot, bot]);
      setViewSpecs(null);
      setBots((Bots) => Bots.filter((Bot) => Bot.id !== bot.id));
    }
  }

  // Function to release a bot from the user's army
  function handleRealese(bot) {
    setAddBot((addBot) => addBot.filter((armybot) => armybot.id !== bot.id));
  }

  // Function to delete a bot from the server
  function handleDelete(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    }).then((data) => {
      setAddBot((addBot) => addBot.filter((armybot) => armybot.id !== bot.id));
    });
  }

  return (
    <div id="app">
      {/* If a specific bot's details are being viewed, show the details view */}
      {viewSpecs ? (
        <BotDetails
          viewSpecs={viewSpecs}
          onEnlistBot={handleBotAdd}
          onGoBackToList={handleGoBack}
        />
      ) : (
        /* Otherwise, show the main list view */
        <>
          <FilterByClass onClassChange={handlefilterClass} />
          <YourBotArmy
            addBot={addBot}
            onRealese={handleRealese}
            onDelete={handleDelete}
          />
          <BotsCollection
            Bots={filteredBots}
            addBot={addBot}
            onViewDetails={handleViewDetails}
          />
        </>
      )}
    </div>
  );
}

export default App;
