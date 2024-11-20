import React from 'react';
import './order-confirmation.css';
import HomeButton from './home-button';
import ViewOrdersButton from './view-orders-button';


const ConfirmOrder = () => {
    return (
        <>
        <section className='confirm-order-section'>
            <h1 className='title-sucess-order'>Seu pedido foi realizado! 🎉</h1>

            <div className='confirm-order-content'>
                <div className='box-content'>
                <h1>Pedido Nº89988</h1>
                <div className='order-details'>
                    <div className='order-labels'>
                        <li>Subtotal</li>
                        <li>Frete</li>
                        <li>Forma de pagamento</li>
                    </div>

                    <div className='order-values'>
                        <li>R$180,00</li>
                        <li>Grátis</li>
                        <li>---</li>
                    </div>

                    
                </div>

                </div>

                <div className='button-group'>
                <HomeButton link="/"/> <ViewOrdersButton />
            </div>
            </div>





        </section>
    </>
    );
  };
  
export default ConfirmOrder;
  