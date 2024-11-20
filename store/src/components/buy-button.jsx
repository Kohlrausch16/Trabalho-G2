import React from 'react';
import './buy-button.css';
import { Link } from 'react-router-dom';

function BuyButton ({link}) {
    return (
        <>

        <Link to={link} id='buy-button'>
            Comprar
        </Link>

    </>
    );
  };
  
export default BuyButton;
  
