import React from 'react';
import moment from 'moment'; // Import moment for date formatting

const IncomeList = ({ incomeItems, removeIncome }) => {
  return (
    <div className="income-list">
      <h2>Income List</h2>
      <ul>
        {incomeItems.map((item) => (
          <li key={item.id}>
            ₹{item.amount} - {item.selectedDate} {/* Format date using moment */}
            {item.isRecurring && <span> (Recurring: {item.recurrenceInterval}) </span>}
            <button onClick={() => removeIncome(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
