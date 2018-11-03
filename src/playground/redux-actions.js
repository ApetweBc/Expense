

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
console.log(store.getState());
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());

//add
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());

// RESET
store.dispatch({
    type: 'RESET'
});
console.log(store.getState());
store.dispatch({
    type: 'DECREMENT'
});
console.log(store.getState());

