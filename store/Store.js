'use client'
import { createContext, useReducer } from 'react';
import {  reducer } from './reducer';


export const Store = createContext();

const initialState = {
    story:  localStorage.getItem('next-ai-adventure')
            ? JSON.parse(localStorage.getItem('next-ai-adventure'))
            : {
                place: '',
                mode:'',
                name: '',
                profession: '',
                life: 9,
                attack: 0,
                defense: 0,
                luck:0
            }
};

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}