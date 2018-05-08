import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correct message for one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={500}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render correct message for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={1500} />);
    expect(wrapper).toMatchSnapshot();
});
