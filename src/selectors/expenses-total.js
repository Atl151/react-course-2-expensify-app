const getExpensesTotal = (expenses) => {
    const expensesAmounts = expenses.map((expense) => expense.amount);
    const totalAmount = expensesAmounts.reduce((acumulator, curentValue) => acumulator + curentValue, 0);

    return totalAmount;
}

export default getExpensesTotal;