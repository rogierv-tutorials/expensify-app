import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenses }) => {
  const formattedExpensesTotal = numeral(selectExpensesTotal(expenses) / 100).format('$0,0.00');

  return (
    <div>
      Viewing {expenses.length} expenses totalling {formattedExpensesTotal}
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
