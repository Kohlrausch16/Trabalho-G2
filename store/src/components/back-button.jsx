import React from 'react';
import { Link } from 'react-router-dom';
import './back-button.css';

const BackButton = () => {
    return (
        <>
        <Link to="/login" id="BackButton">
        <i id='arrow-left' class="fa-solid fa-chevron-left fa-sm"></i> Voltar
        </Link>
    </>
    );
  };
  
export default BackButton;



  
