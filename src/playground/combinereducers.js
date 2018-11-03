console.log('running');
import {createStore, combineReducers} from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// EXPENSES REDUCER 
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
   switch(action.type){
       default:
       return state;
   }
};

// filters reducer
const date = new Date();
const filterReducerDefaultState = [{
    text: '',
    sortBY: date, //date 
    startDate: undefined,
    endDate: undefined
 }];
const filtersReducer = (state = filterReducerDefaultState, action) =>{
   switch(action.type){
       default:
       return state;
   }
};

// store creation
const store = createStore(
    combineReducers({
    expenses:expensesReducer,
    filters: filtersReducer
})
);
console.log(store.getState());

// const demoState = {
//       expenses: [{
//           id: 'poidswer',
//           description: ' January rent',
//           note: ' This is the final payment of the address',
//           amount: 54000,
//           creatAt: 0
//       }],

//       filters: {
//          text: 'rent',
//          sortBY: 'amount', //date or amount
//          startDate: undefined,
//          endDate: undefined
//       }    
//     };    