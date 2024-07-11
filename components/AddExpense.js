import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';


const AddExpense = ({ addExpense ,selectedDate, setSelectedDate}) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addExpense({ description, amount: parseFloat(amount), date :selectedDate });
    setDescription('');
    setAmount('');
    setSelectedDate(null);
  };

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text" placeholder='Add Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number" placeholder ="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          Choose a date :
          <Datetime
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
          />
        </label>
        <div>
        <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;