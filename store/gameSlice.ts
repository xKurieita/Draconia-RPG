import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GameState = {
    gameState: string;
};

const initialState: GameState = {
    gameState: 'start', // Initial gamestate to start screen
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameState: (state, action: PayloadAction<string>) => {
            state.gameState = action.payload;
        }
        // Other game state actions here
    }
});


export const { setGameState } = gameSlice.actions;

export default gameSlice.reducer;