import React from 'react';
import { formatter } from '../../util/investment'; // Import currency formatter

const Results = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No investment data available.</p>;
      }
  const initialInvestment = data[0].valueEndOfYear - data[0].annualInvestment - data[0].interest;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Annual Investment</th>
          <th>Interest Earned</th>
          <th>Total Interest</th>
          <th>Total Amount Invested</th>
          <th>Value at End of Year</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - totalInterest;

          // Return the row for each year
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.annualInvestment)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
