import React from 'react';
import './PaymentSelection.css'; 

const PaymentSelection = ({ selectedMethod, setSelectedMethod }) => {
  const paymentMethods = ['Pix', 'Boleto', 'Cartão de débito', 'Cartão de crédito'];

  return (
    <div className="payment-selection-container">
      <div className="payment-methods">
        {paymentMethods.map((method) => (
          <label key={method} className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value={method}
              checked={selectedMethod === method}
              onChange={() => setSelectedMethod(method)}
            />
            {method}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentSelection;