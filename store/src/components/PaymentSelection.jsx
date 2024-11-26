import React, { useState } from 'react';
import './PaymentSelection.css';

const PaymentSelection = ({ selectedMethod, setSelectedMethod }) => {
  const [localMethod, setLocalMethod] = useState(selectedMethod || '');
  const paymentMethods = ['Pix', 'Boleto', 'Cartão de débito', 'Cartão de crédito'];
  const handleChange = (method) => {
    setLocalMethod(method);
    setSelectedMethod(method);
  };

  return (
    <div className="payment-selection-container">
      <h2>Selecione o método de pagamento</h2>
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
