import React from 'react';
import './add-CartButton.css';
import { Link } from 'react-router-dom';

function AddToCartButton ({link}){
    return (
        <>
      <Link to={link} id='add-to-cart-button'>
        Adicionar ao carrinho
      </Link>
    </>
    );
  };
  
export default AddToCartButton;




  
