import React, { useState } from 'react';
import './PaymentSelection.css';

const PaymentSelection = () => {
  const [localMethod, setLocalMethod] = useState('');

  const paymentMethods = ['Pix', 'Boleto', 'Cartão de débito', 'Cartão de crédito'];

  const handleChange = (method) => {
    setLocalMethod(method);  
  };

  return (
    <div className="payment-selection-container">
      <div className="payment-methods">
        {paymentMethods.map((method) => (
          <label key={method} className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value={method}
              checked={localMethod === method}
              onChange={() => handleChange(method)}  
            />
            {method}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentSelection;
