import './App.css';
import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";


function App(props) {
  const playerDataArray = preparePlayerData(playerData); // return an array of playersObj
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData); // add "wins" key to playerObject
  console.log("test1========>", playerDataArray);
  console.log("test2========>", parsedPlayerData);


  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={parsedPlayerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
