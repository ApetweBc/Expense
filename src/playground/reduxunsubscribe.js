

import {createStore} from 'redux';

// const store = createStore((state ={count:0}, action) => {
//     console.log('running');    
//     if (action.type === 'INCREMENT'){
//         return {
//                count: state.count + 1 
//             };
//          }
//          else {
//            return state;
//          };
// });
// console.log(store.getState());
// Actions - Nothing more than an object that gets sent to the store
// examples : walk, stop, sit, work, stop_working
// Increment,
//   store.dispatch({
//     type:'INCREMENT'
// });
// console.log(getState());
// // decrement, reset 


const store = createStore ((state={count:0}, action)=>{
   
        switch (action.type){
            case 'INCREMENT':
                return {
                    count: state.count + 1
                };

            case 'DECREMENT':
                return {
                    count: state.count - 1
                };

                case 'RESET':
                return {
                    count: state.count = 0
                };

                case 'DECREMENT':
                return {
                    count: state.count - 1
                };

            default:
            return state;
            
        };   
        
        

});

// This is calling all the dispatch sent to the store
// store.subscribe(() =>{
//     console.log(store.getState());
// });

// this method let you unsubscribe from the store. You can yuse the variable to stop
const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});
// ADD
store.dispatch({
    type: 'INCREMENT'
});

// we call the method to stop the dispact below
unsubscribe();

//ADD
store.dispatch({
    type: 'INCREMENT'
});
// RESET
store.dispatch({
    type: 'RESET'
});
// MINUS
store.dispatch({
    type: 'DECREMENT'
});


