/* eslint-disable no-unused-vars */
// src/components/PayCommissionCalculator.js
import React, { useState } from 'react';
import './PayCommissionCalculator.css'; // Import the CSS file

const PayCommissionCalculator = () => {
  const [basicPay, setBasicPay] = useState(0);
  const [gradePay, setGradePay] = useState(0);
  const [hra, setHra] = useState(0);  // Example allowance
  const [da, setDa] = useState(0);    // Example allowance
  const [totalSalary, setTotalSalary] = useState(0);

  const handleCalculate = () => {
    const totalAllowances = parseFloat(hra) + parseFloat(da);
    const total = parseFloat(basicPay) + parseFloat(gradePay) + totalAllowances;
    setTotalSalary(total);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h2 className="calculator-title">Pay Commission Calculator</h2>
        <div className="input-group">
          <label>Basic Pay:</label>
          <input
            type="number"
            value={basicPay}
            onChange={(e) => setBasicPay(e.target.value)}
            placeholder="Enter basic pay"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Grade Pay:</label>
          <input
            type="number"
            value={gradePay}
            onChange={(e) => setGradePay(e.target.value)}
            placeholder="Enter grade pay"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>HRA (House Rent Allowance):</label>
          <input
            type="number"
            value={hra}
            onChange={(e) => setHra(e.target.value)}
            placeholder="Enter HRA"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>DA (Dearness Allowance):</label>
          <input
            type="number"
            value={da}
            onChange={(e) => setDa(e.target.value)}
            placeholder="Enter DA"
            className="input-field"
          />
        </div>
        <button onClick={handleCalculate} className="calculate-button">Calculate Salary</button>

        {totalSalary > 0 && (
          <div className="result">
            <h3>Total Salary: ₹{totalSalary}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayCommissionCalculator;
