import React from 'react';
import { Link } from 'react-router-dom';
import './view-orders-button.css';

function ViewOrdersButton ({link}){
    return (
        <>
        <Link to={link} id="ViewOrdersButton">
         Ver meus pedidos
        </Link>
    </>
    );
  };
  
export default ViewOrdersButton;