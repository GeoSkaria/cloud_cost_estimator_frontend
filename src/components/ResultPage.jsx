import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/ResultPage.css';

function ResultPage() {
  const location = useLocation();
  const { totalCost, details } = location.state || { totalCost: 0, details: [] };

  return (
    <div className="result-container">
      <h2>Cost Estimation Result</h2>
      <div className="summary">
        <strong>Total Cost:</strong> ${totalCost}
      </div>
      <div className="details">
        <h3>Breakdown:</h3>
        {details.map((item, index) => (
          <div key={index} className="detail-card">
            <p><strong>Sub Type:</strong> {item.subType}</p>
            <p><strong>Region:</strong> {item.region}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Cost/Unit:</strong> ${item.costPerUnit}</p>
            <p><strong>Total:</strong> ${item.totalCost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultPage;
