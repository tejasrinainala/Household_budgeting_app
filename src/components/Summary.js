import React from 'react';

const Summary = ({ budgetItems, incomeItems }) => {
  const totalExpenses = budgetItems.reduce((total, item) => total + parseFloat(item.amount), 0);
  const totalIncome = incomeItems.reduce((total, item) => total + parseFloat(item.amount), 0);
  const amountLeft = totalIncome - totalExpenses;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Income: ₹{totalIncome}</p>
      <p>Total Expenses: ₹{totalExpenses}</p>
      <p>Amount Left: ₹{amountLeft}</p>
    </div>
  );
};

export default Summary;
