import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

// Import your reducers here

const rootReducer = combineReducers({
    // ...
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: {
        rootReducer,
    },
});

export default store;