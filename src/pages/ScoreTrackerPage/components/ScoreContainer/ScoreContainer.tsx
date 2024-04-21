import { PlayerState } from "../../../../features/playerStorageSlice"
import './scoreContainer.css'
import { ThreeDots } from "../../../../common/icons/icons"
import usePlayerStorage from "../../../../common/hooks/usePlayerStorage"

const ScoreContainer: React.FC<PlayerState> = (player: PlayerState) => {

  const { playerName, points } = player;
  const { addPoints, /* updatePoints, */ substractPoints } = usePlayerStorage();

  return (
    <li className="li-container">
      <div className="points-box">{ points }</div>
      <div className="playerName">{ playerName }</div>
      <button className="minus-button" onClick={() => { substractPoints(player) }} >-</button>
      <button className="plus-button" onClick={() => { addPoints(player) }}>+</button>
      <button className="three-dots-button">
        <ThreeDots/>
      </button>
    </li>
  )
}

export default ScoreContainer