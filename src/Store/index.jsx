//this file sets up our store of action dispatches to be provided to the rest of the app so as to dispatch acitons upon state change

//import { createStore } from 'redux';// need to import this so that this store will even do anything
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true};

const counterSlice = createSlice({//this is practically the same as the counterRedcuer function
    name: 'counter',
    initialState: initialState,
    reducers: {//these are the 'INCREMENT', 'DECREMENT', 'INCREASE', 'TOGGLE' if checks below.
        increment(state) {//don't need 'action' bc we know that an action is not being changed or mutated. Only a state change
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {//here 'action' is added becasue a clear action is dispatched after the state change
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
});


// const counterReducer = (state = initialState, action) => {//default state
//     if (action.type === 'INCREMENT') {//action statement
//         return {
//             counter: state.counter + 1,//what the action does to the state
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'INCREASE') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'DECREMENT') {//action statement
//         return {   
//             counter: state.counter - 1, //what is does to the state
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'TOGGLE') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state//return default state if neither if statements are met
// }

//const store = createStore(counterRedcuer);//creates the store of all this data

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;