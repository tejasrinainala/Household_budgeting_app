import React, { useState, useEffect } from 'react';
import AddExpense from '/Users/tejasrinainala/household-budget-app/src/components/AddExpense.js';
import BudgetList from '/Users/tejasrinainala/household-budget-app/src/components/BudgetList.js';
import Summary from '/Users/tejasrinainala/household-budget-app/src/components/Summary.js';
import '/Users/tejasrinainala/household-budget-app/src/index.css';
import 'react-datetime/css/react-datetime.css';

const App = () => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [selectedDate,setSelectedDate] = useState(null);

  useEffect(() => {
    const storedBudgetItems = JSON.parse(localStorage.getItem('budgetItems'));
    if (storedBudgetItems) {
      setBudgetItems(storedBudgetItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('budgetItems', JSON.stringify(budgetItems));
  }, [budgetItems]);

  const addExpense = (newExpense) => {
    setBudgetItems([...budgetItems, { ...newExpense, id: Date.now(),selectedDate: selectedDate ? selectedDate.format('DD/MM/YYYY - HH:mm:ss') : null }]);
    setSelectedDate(null);
  };

  const removeExpense = (id) => {
    const updatedBudgetItems = budgetItems.filter((item) => item.id !== id);
    setBudgetItems(updatedBudgetItems);
  };

  return (
    <div className="App">
      <AddExpense addExpense={addExpense} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <BudgetList budgetItems={budgetItems} removeExpense={removeExpense} />
      <Summary budgetItems={budgetItems} />
    </div>
  );
};

export default App;
