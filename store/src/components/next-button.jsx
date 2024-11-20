import React from 'react';
import { Link } from 'react-router-dom';
import './next-button.css';

const NextButton = () => {
    return (
        <Link to="/login/PersonalAddress" id="NextButton">
            Avançar <i id="arrow-right" className="fa-solid fa-chevron-right fa-sm"></i>
        </Link>
    );
};

export default NextButton;
