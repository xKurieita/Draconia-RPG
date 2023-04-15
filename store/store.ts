import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import gameSlice from "./gameSlice";

// Import your reducers here

const rootReducer = combineReducers({
    // Add your reducers here
    gameState: gameSlice,
    // Other reducers here
    // Example: counter: counterReducer
});

const middleware = [thunk];

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: {
        rootReducer,
    },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);