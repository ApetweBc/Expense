
import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../src/components/ExpensesSummary';

test('Should correctly render Expenses Summary with 1 Expense',()=>{
   const wrapper = shallow (<ExpensesSummary expenseCount={1} expensesTotal={235} />);
   expect(wrapper).toMatchSnapshot();
});


test('Should correctly render Expenses Summary with multipleExpense Expense',()=>{
    const wrapper = shallow (<ExpensesSummary expenseCount={23} expensesTotal={2354323523232} />);
    expect(wrapper).toMatchSnapshot();
 });
