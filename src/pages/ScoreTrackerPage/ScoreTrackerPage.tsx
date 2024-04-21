import './scoreTracker.css'
import usePlayerStorage from "../../common/hooks/usePlayerStorage"
import { useEffect } from "react";
import ScoreContainer from "./components/ScoreContainer/ScoreContainer";

const ScoreTrackerPage = () => {

  const { players } = usePlayerStorage();

  useEffect(() => {
    
  }, [players]);

  return (
    <main>
      {
        players ? (
          players.map((player, index) => (
            <ScoreContainer  {...player} key={index} />
          ))
        ) : (
          <>no players yet...</>
        )
      }
      <button className="add-player-button">+</button>
    </main>
  )
}

export default ScoreTrackerPage