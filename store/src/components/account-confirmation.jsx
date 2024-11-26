import React from 'react';
import './account-confirmation.css';
import GetStartButton from './GetStart-button';


const Confirmation = () => {
    return (
        <>
        <section className='content-section'>
            <div className='account-confirmation'>
                <h1>Cadastro Realizado!</h1> <br /><br />
                <i id='smile-face' class="fa-regular fa-face-smile fa-10x"></i><br /><br /><br /><br />
            
            <div className='start-button'>
            <GetStartButton link="/"/>
            </div>
            
            </div>
        </section>

    </>
    );
  };
  
export default Confirmation;



  
