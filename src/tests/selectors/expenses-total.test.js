import SelectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should get 0 if no expenses', ()=>{
    const res = SelectExpensesTotal([]);
    expect (res).toBe(0);
});

test( 'Should Correctly add up a single expense', ()=>{
    const res = SelectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);

});

test( 'Should Correctly add up a Multiple expense', ()=>{
    const res = SelectExpensesTotal(expenses);
    expect(res).toBe(114195);

});