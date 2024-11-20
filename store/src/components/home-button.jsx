import React from 'react';
import { Link } from 'react-router-dom';
import './home-button.css';

function HomeButton ({link}){
    return (
        <>
        <Link to={link} id="HomeButton">
         Explorar mais
        </Link>
    </>
    );
  };
  
export default HomeButton;
