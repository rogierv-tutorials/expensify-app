export default expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, expenseAmount) => sum + expenseAmount, 0);
};
