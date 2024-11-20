import React from 'react';
import './personal-address-form.css';
import NextButton from '../components/next-button';
import BackButton from '../components/back-button';


const PersonalAddressForm = () => {
    return (
        <>
          <section className='progress-bar-section'>
          
          <div className='progress-bar'>
            <div className='label-group'>
              <p>Dados pessoais</p>
              <p>Endereço</p>
              <p>Cadastro finalizado</p>
            </div>
            <div className='icon-group'>
            <i id='user' class="fa-solid fa-user fa-3x"></i>
            <i id='location' class="fa-solid fa-location-dot fa-3x"></i>
            <i id='smile' class="fa-regular fa-face-smile fa-3x"></i>

            </div>
            <div className='bar'>
                  <div className='progress-address'></div>
                </div>
          </div>
        </section>








      <section class="input-section">
          <form action="">
                <div class="input-group">
                    <label>CEP</label>
                    <input className='inputuser' type="text" id="CEP" />

                    <label>Número</label>
                    <input className='inputuser' type="text" id="numero" />

                    <label>Bairro</label>
                    <input className='inputuser' type="text" id="bairro" />

                    <label>Estado</label>
                    <input className='inputuser' type="text" id="estado" />


                    <div className='buttons-group'><BackButton link="/login"/> <NextButton link="/login/PersonalAddress/AccontConfirmation"/></div>

                </div>
                <div class="input-group">
                    <label>Logradouro</label>
                    <input className='inputuser' type="text" id="logradouro" />

                    <label>Complemento</label>
                    <input className='inputuser' type="text" id="complemento" />

                    <label>País</label>
                    <input className='inputuser' type="text" id="pais" />

                    <label>Município</label>
                    <input className='inputuser' type="text" id="municipio" />
                </div>      
          </form>   

      </section>


    </>
    );
  };
  
export default PersonalAddressForm;
  