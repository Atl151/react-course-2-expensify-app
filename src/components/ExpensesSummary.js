import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formatExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
            <p>Viewing {expensesCount} {expenseWord} totalling {formatExpensesTotal}</p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    expensesCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(state.expenses)
});

export default connect(mapStateToProps)(ExpensesSummary);