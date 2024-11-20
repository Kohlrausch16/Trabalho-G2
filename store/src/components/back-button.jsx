import React from 'react';
import { Link } from 'react-router-dom';
import './back-button.css';

function BackButton ({link}){
    return (
        <>
        <Link to={link} id="BackButton">
        <i id='arrow-left' class="fa-solid fa-chevron-left fa-sm"></i> Voltar
        </Link>
    </>
    );
  };
  
export default BackButton;



  
