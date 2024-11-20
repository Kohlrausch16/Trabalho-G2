import React from 'react';
import { Link } from 'react-router-dom';
import './GetStart-button.css';

function GetStartButton ({link}){
    return (
        <>
        <Link to={link} id="GetStart">
         Começar a explorar
        </Link>
    </>
    );
  };
  
export default GetStartButton;



  
