//this file sets up our store of action dispatches to be provided to the rest of the app so as to dispatch acitons upon state change

import { createStore } from 'redux';// need to import this so that this store will even do anything

const initialState = { counter: 0, showCounter: true}

const counterReducer = (state = initialState, action) => {//default state
    if (action.type === 'INCREMENT') {//action statement
        return {
            counter: state.counter + 1,//what the action does to the state
            showCounter: state.showCounter
        }
    }
    if (action.type === 'INCREASE') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'DECREMENT') {//action statement
        return {   
            counter: state.counter - 1, //what is does to the state
            showCounter: state.showCounter
        }
    }
    if (action.type === 'TOGGLE') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state//return default state if neither if statements are met
}

const store = createStore(counterReducer);//creates the store of all this data

export default store;