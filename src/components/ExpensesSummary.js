import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

const getMessage = (expenses) => {
    const length = expenses.length;
    const total = numeral(getExpensesTotal(expenses) / 100).format('$0,0.00');

    if(length === 1){
        return `Viewing ${length} expense totalling ${total}`;
    } else {
        return `Viewing ${length} expenses totalling ${total}`
    }
}

export const ExpensesSummary = (props) => (
    <div>
        <h3>Summary</h3>
        <p>{getMessage(props.expenses)}</p>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);