import React from 'react';
import {shallow} from 'enzyme';
import ExpenseLoginPage from '../components/ExpenseLoginPage';


test('should correctly render LoginPAge', ()=>{
   
    const wrapper = shallow (<ExpenseLoginPage />);
    expect (wrapper).toMatchSnapshot();
});