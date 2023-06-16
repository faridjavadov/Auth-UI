import { createStore } from "redux";
import {configureStore, } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";

export const store = configureStore({
    reducer:{
        AuthSlice:AuthSlice
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>