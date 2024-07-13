import React from 'react';
const BudgetList = ({ budgetItems, removeExpense }) => {
  return (
    <div className="add-budget">
      <h2>Budget List</h2>
      <h3>Expense List : </h3>
      <ul>
        {budgetItems.map((item) => (
          <li key={item.id}>
            {item.description} - ₹{item.amount}-{item.selectedDate}
            {item.isRecurring && <span> (Recurring : {item.recurrenceInterval}) </span>}
            <button onClick={() => removeExpense(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BudgetList;
