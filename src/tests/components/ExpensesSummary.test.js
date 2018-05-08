import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correct message for one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render correct message for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});
