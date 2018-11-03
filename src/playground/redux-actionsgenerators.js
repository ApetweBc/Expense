

import {createStore} from 'redux';

// NB: Another Example of deconstructuring the object.

// Default value
const add = ({a = {} , b = {}}, c) => {
    return a + b + c;
};
console.log(add({a:13, b:2}, 100));
// Deconstructuring
// const add = ({a,b}, c) => {
//     return a + b + c;
// };
// console.log(add({a:13, b: 2}, 100));

// Object
// const add = (data) => {
//     return data.a + data.b
// };
// console.log(add({a:13, b: 2}));

// Normal
// const add = (a,b) => {
//     return a + b
// };
// console.log(add(13, 2));


// -----End ---

// Decustructing
const incrementCount = ({incrementBy = 1} ={}) =>({
    type:'INCREMENT',
    incrementBy: incrementBy
});
const incrementPlus = ({plus = 1} ={}) =>({
    type:'PLUS',
    plus
});
const resetIncrement = ({resetBy=0} ={}) =>({
    type:'RESET',
    resetBy
});
const minusIncrement= ({minusBy = 20} ={}) =>({
    type:'DECREMENT',
    minusBy
});

// Normal style
// const incrementCount = (payload = {}) =>({
//     type:'INCREMENT',
//     incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy:20
   
// });
const store = createStore ((state={count:0}, action)=>{
        switch (action.type){
            case 'INCREMENT':
                return {
                    count: state.count + action.incrementBy
                };
            case 'PLUS':
                return {
                    count: state.count + action.plus
                };

            case 'RESET':
            return {
                count: state.count = 0
            };        
            case 'DECREMENT':
            return {
                count: state.count - action.minusBy
            };
            default:
            return state;
            
        };   
});

// This is calling all the dispatch sent to the store
store.subscribe(() =>{
    console.log(store.getState());
});
store.dispatch(incrementCount({incrementBy:20 }));
//PLUS
store.dispatch(incrementPlus({plus:25}));
// using a method instead of the above method enable us to catch errors. Let say we make a mispell the action value'INCREMENT', it wont throw an error but when use method function declared, and there is misspelled name, it will throw an errow in the dom. 
// store.dispatch(incrementCount());
// RESET
store.dispatch(resetIncrement({resetBy: 0}));
// MINUS
store.dispatch(minusIncrement({minusBy: 20}));
// // we call the method to stop the all the dispacth below
// unsubscribe();

// this method let you unsubscribe from the store. You can yuse the variable to stop
// const unsubscribe = store.subscribe(() =>{
//     console.log(store.getState());
// });



