
// basics of redux
import {createStore} from 'redux';
// createStore stores 
const store = createStore((state ={ count: 0}) => {
           return state;
});

console.log(store.getState());

// getState return the state of Count. 
