import { configureStore } from "@reduxjs/toolkit";

import LoginReducer from "../reducers/LoginReducer";

const store = configureStore({
  reducer: {
    login: LoginReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch