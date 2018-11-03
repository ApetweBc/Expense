

import {createStore} from 'redux';

// Reducers
// 1: They are pure functions. The out is only determined by the input

// example of not pure functions. you can see the function using a value from a global object
let a = 10;
const add = (a , b)=> {
    return a + b; 
};
console.log(add(a, 2));
// 2. Never change state or action. Dont want to mutate the state 

const  CountReducer = ((state={count:0}, action)=>{
    switch (action.type){
        case 'INCREMENT':
        const incrementBy = typeof action.decrementBy === 'number' ? action.incrementBy: 20
            return {
                count: state.count + incrementBy
            };
         
            case 'INCREMENT':
                return {
                    count: state.count + 1
                };
            case 'RESET':
            return {
                count: state.count = 0
            };
            case 'ADD_INCREMENT':
            return {
                count: state.count + 250
            };
            case 'DOUBLE_DECREMENT':
            const double_decrementBy = typeof action.double_decrementBy === 'number' ? action.decrementBy:20
            return {
                count: state.count - double_decrementBy
            };
            case 'SET':
            return {
                count: action.count
            }

        default:
        return state;
        
    };      

});
const store = createStore(CountReducer);

// This is calling all the dispatch sent to the store
store.subscribe(() =>{
    console.log(store.getState());
});

// this method let you unsubscribe from the store. You can yuse the variable to stop
// const unsubscribe = store.subscribe(() =>{
//     console.log(store.getState());
// });
// ADD
store.dispatch({
    type: 'INCREMENT',
    incrementBY: 20
});

// // we call the method to stop the dispact below
// unsubscribe();

//ADD
store.dispatch({
    type: 'INCREMENT'
});

// RESET
store.dispatch({
    type: 'RESET'
});

// ADD
store.dispatch({
    type: 'ADD_INCREMENT'
});
// dynamic setting the state to change
store.dispatch({
    type: 'DOUBLE_DECREMENT',
    decrementBy:40
});
