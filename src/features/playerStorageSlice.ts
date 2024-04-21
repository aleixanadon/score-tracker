import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface PlayerState {
  id: number;
  playerName: string;
  points: number;
}

export interface PlayerStorageState {
  players: PlayerState[]
}

const initialState: PlayerStorageState = {
  players: [
    {
      id: 1,
      playerName: "Joe Doe",
      points: 23,
    },
    {
      id: 2,
      playerName: "Joe Doe",
      points: 5,
    },
    {
      id: 3,
      playerName: "Joe Doe",
      points: 16,
    },
    {
      id: 1,
      playerName: "Joe Doe",
      points: 23,
    },
    {
      id: 2,
      playerName: "Joe Doe",
      points: 5,
    },
    {
      id: 3,
      playerName: "Joe Doe",
      points: 16,
    },
    {
      id: 4,
      playerName: "Joe Doe",
      points: 23,
    },
    {
      id: 5,
      playerName: "Joe Doe",
      points: 5,
    },
    {
      id: 6,
      playerName: "Joe Doe",
      points: 16,
    },
  ]
}

export const playerStorageSlice = createSlice({
  name: 'playerStorage',
  initialState,
  reducers: {
    addPlayer: (state: PlayerStorageState, action: PayloadAction<PlayerState>) => {
      state.players = [...state.players, action.payload]
    },
    updatePlayer: (state: PlayerStorageState, action: PayloadAction<PlayerState>) => {
      let targetPlayer = action.payload;
      state.players = state.players.map((player: PlayerState) => player.id === targetPlayer.id ? {
        ...targetPlayer,
        playerName: targetPlayer.playerName,
      } : player);
    },
    deletePlayer: (state: PlayerStorageState, action: PayloadAction<PlayerState>) => {
      let targetPlayer = action.payload;
      let newPlayerStorage = state.players.filter((player) => player.id !== targetPlayer.id);
      state.players = newPlayerStorage;
    },
    addPoints: (state: PlayerStorageState, action: PayloadAction<PlayerState>) => {
      let targetPlayer = action.payload;
      state.players = state.players.map((player: PlayerState) => player.id === targetPlayer.id ? {
        ...targetPlayer,
        points: targetPlayer.points + 1,
      } : player);
    },
    updatePoints: (state: PlayerStorageState, action: PayloadAction<PlayerState>) => {
      let targetPlayer = action.payload;
      state.players = state.players.map((player: PlayerState) => player.id === targetPlayer.id ? {
        ...targetPlayer,
        points: targetPlayer.points,
      } : player);
    },
    substractPoints: (state: PlayerStorageState, action: PayloadAction<PlayerState>) => {
      let targetPlayer = action.payload;
      state.players = state.players.map((player: PlayerState) => player.id === targetPlayer.id ? {
        ...player,
        points: player.points - 1,
      } : player);
    },
  }
})

export const {
  addPlayer,
  updatePlayer,
  deletePlayer,
  addPoints,
  updatePoints,
  substractPoints
} = playerStorageSlice.actions

export default playerStorageSlice.reducer