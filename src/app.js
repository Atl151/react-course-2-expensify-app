import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ 
    description: 'Water Bill',
    amount: 90000,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 30000,
    createdAt: 3000
}));

store.dispatch(addExpense({ 
    description: 'Rent',
    amount: 10000,
    createdAt: 11000
}));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
