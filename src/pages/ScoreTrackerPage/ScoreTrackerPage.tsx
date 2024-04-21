import './scoreTracker.css'
import usePlayerStorage from "../../common/hooks/usePlayerStorage"
import { useEffect } from "react";
import ScoreContainer from "./components/ScoreContainer/ScoreContainer";
import { Link } from 'react-router-dom';

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
      <Link to="/score-tracker/newplayer" className="add-player-button">+</Link>
    </main>
  )
}

export default ScoreTrackerPage