import React from 'react';
import { Link } from 'react-router-dom';
import './next-button.css';

function NextButton({ link }) {
    return (
        <Link to={link} id="NextButton">
            Avançar <i id="arrow-right" className="fa-solid fa-chevron-right fa-sm"></i>
        </Link>
    );
};

export default NextButton;
