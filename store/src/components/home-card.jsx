import React from 'react';
import './home-card.css';
import Card_keybord from './assets/images/Card_keybord.svg';

const HomeCard = () => {
    return (
        <>
        <section>
            <div className='content'>
            <a href="/">
                <div id="card" class="card-group w-25 p-5 ">
                    <div class="card ">
                        <img src={Card_keybord} class="card-img-top w-100 p-1 " alt="..."/>
                        <div class="card-body p-3">
                        <hr />
                        <p class="Name-Item">Keybord</p>
                        <p className='Value-Item'>R$180,00</p>
                        </div>  
                    </div>
                </div>      
            </a>
            </div>
        </section>          
    </>
    );
  };
  
export default HomeCard;
  