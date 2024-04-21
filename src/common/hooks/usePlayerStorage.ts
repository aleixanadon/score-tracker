import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { RootState } from "../../store";
import * as playerStorageReducer from '../../features/playerStorageSlice'
import { PlayerState } from "../../features/playerStorageSlice";

const usePlayerStorage = () => {

  const dispatch = useDispatch();
  const { players } = useSelector((state: RootState) => state.playerStorageSlice);
  
  const addPlayer = (player: PlayerState) => {
    dispatch(playerStorageReducer.addPlayer(player));
  }
  const updatePlayer = (player: PlayerState) => {
    dispatch(playerStorageReducer.updatePlayer(player));
  }
  const deletePlayer = (player: PlayerState) => {
    dispatch(playerStorageReducer.deletePlayer(player));
  }
  const addPoints = (player: PlayerState) => {
    dispatch(playerStorageReducer.addPoints(player));
  }
  const updatePoints = (player: PlayerState) => {
    dispatch(playerStorageReducer.updatePoints(player));
  }
  const substractPoints = (player: PlayerState) => {
    dispatch(playerStorageReducer.substractPoints(player));
  }

  return {
    players,
    addPlayer,
    updatePlayer,
    deletePlayer,
    addPoints,
    updatePoints,
    substractPoints
  }
}

export default usePlayerStorage