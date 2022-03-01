//this file sets up our store of action dispatches to be provided to the rest of the app so as to dispatch acitons upon state change

import { createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {//default state
    if (action.type === 'INCREMENT') {//action statement
        return {
            counter: state.counter + 1//what the action does to the state
        }
    }
    if (action.type === 'DECREMENT') {//action statement
        return {
            counter: state.counter - 1 //what is does to the state
        }
    }
    return state//return default state if neither if statements are met
}

const store = createStore(counterReducer);//creates the store of all this data

export default store;