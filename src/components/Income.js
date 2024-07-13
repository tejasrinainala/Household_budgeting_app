import React, { useState } from 'react';
import Datetime from 'react-datetime';

const Income = ({ addIncome, selectedDate, setSelectedDate }) => {
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrenceInterval, setRecurrenceInterval] = useState('none');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      addIncome({
        amount: parseFloat(amount),
        selectedDate,
        isRecurring,
        recurrenceInterval,
      });
      setAmount('');
      setIsRecurring(false);
      setRecurrenceInterval('none');
      setSelectedDate(null);
    }
  };

  return (
    <div className="add-income">
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Income</h2>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Date/Time:
          <Datetime
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </label>
      </div>
      <div>
        <label>
         Is Recurring:
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
          />
        </label>
      </div>
      {isRecurring && (
        <div>
          <label>
           Recurrence Interval:
            <select
              value={recurrenceInterval}
              onChange={(e) => setRecurrenceInterval(e.target.value)}
            >
              <option value="none">None</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </label>
        </div>
      )}
      <button type="submit">Add</button>
    </form>
    </div>
  );
};

export default Income;
