
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import cartReducer from "./cartSlice";

export function makeStore(){
    return configureStore({
        reducer:{
            users: userReducer,
            cart: cartReducer,
        }
    })
}

export const store =  makeStore()

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

