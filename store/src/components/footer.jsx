import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
        <footer>
            <nav>
                <ul className='about'>
                    <p>Sobre</p>
                    <li><a href="/">Meios de contato</a></li>
                    <li><a href="/">Formas de pagamento</a></li>
                    <li><a href="/">Suporte</a></li>
                </ul>
                
                <ul className='user'>
                    <p>Conta</p>
                    <li><a href="/">Minha conta</a></li>
                </ul>

                <ul className='copy'>
                    <p>© 2024 Store.com</p>
                </ul>
            </nav>
        </footer>

    </>
    );
  };
  
export default Footer;
  