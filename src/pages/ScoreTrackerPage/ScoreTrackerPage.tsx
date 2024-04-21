import { useEffect } from "react";
import usePlayerStorage from "../../common/hooks/usePlayerStorage"
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
    </main>
  )
}

export default ScoreTrackerPage