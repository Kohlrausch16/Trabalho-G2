import React from 'react';
import './personal-address-form.css';
import NextButton from '../components/next-button';
import BackButton from '../components/back-button';


const PersonalAddressForm = () => {
    return (
        <>
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
  