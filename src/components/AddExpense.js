import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';


const AddExpense = ({ addExpense ,selectedDate, setSelectedDate}) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [isRecurring,setIsRecurring]=useState(false)
  const [recurrenceInterval,setRecurrenceInterval]=useState('none')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addExpense({ description,
       amount: parseFloat(amount),
        date :selectedDate,
        isRecurring,
        recurrenceInterval
     });
    setDescription('');
    setAmount('');
    setSelectedDate(null);
    setIsRecurring(false)
    setRecurrenceInterval('none');
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
        <label>
          Is Recurring : 
          <input type="checkbox" 
          checked={isRecurring} 
          onChange={(e)=>setIsRecurring(e.target.checked)}/>
        </label>
        </div>
        {isRecurring &&(
        <div>
          <label>Recurrence Interval : </label>
          <select value={recurrenceInterval} 
          onChange={(e)=>setRecurrenceInterval(e.target.value)}>
            <option value='none'>None</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        )}
        <div>
        <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;