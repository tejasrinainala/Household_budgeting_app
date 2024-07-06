import React from 'react';

const Summary = ({ budgetItems }) => {
  const totalAmount = budgetItems.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="add-summary">
      <h2>Summary</h2>
      <p>Total Amount: ₹{totalAmount}</p>
    </div>
  );
};

export default Summary;
