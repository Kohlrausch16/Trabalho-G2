import React from 'react';
import './checkout-button.css';
import { Link } from 'react-router-dom';

function CheckoutButton ({link}){
    return (
        <>
        <Link to={link} id='checkout-button'>
            Fechar Pedido
        </Link>
    </>
    );
  };
  
export default CheckoutButton;
  



