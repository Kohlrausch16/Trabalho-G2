import React from 'react';
import './personal-details-form.css';
import NextButton from '../components/next-button';


const PersonalDetailsForm = () => {
    return (
        <>
      <section class="input-section">
          <form action="">
                <div class="input-group">
                    <label>Nome</label>
                    <input className='inputuser' type="text" id="nome" />

                    <label>CPF</label>
                    <input className='inputuser' type="text" id="cpf" />

                    <label>E-mail</label>
                    <input className='inputuser' type="email" id="email" />

                    <label>Senha</label>
                    <input className='inputuser' type="password" id="senha" />

                    <NextButton /> 
                </div>
                <div class="input-group">
                    <label>Sobrenome</label>
                    <input className='inputuser' type="text" id="sobrenome" />

                    <label>Data de Nascimento</label>
                    <input className='inputuser' placeholder='dd/mm/aaaa' type="date" id="nascimento" />

                    <label>Telefone</label>
                    <input className='inputuser' placeholder='(DDD) Telefone' type="tel" id="telefone" />

                    <label>Confirmar senha</label>
                    <input className='inputuser' type="password" id="ConfirmaSenha" />
                </div>      
          </form>   

      </section>


    </>
    );
  };
  
export default PersonalDetailsForm;
  