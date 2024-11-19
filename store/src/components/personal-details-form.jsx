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
                    <input type="text" id="nome" />

                    <label>CPF</label>
                    <input type="text" id="cpf" />

                    <label>E-mail</label>
                    <input type="email" id="email" />

                    <label>Senha</label>
                    <input type="password" id="senha" />

                    < NextButton /> 
                </div>
                <div class="input-group">
                    <label>Sobrenome</label>
                    <input type="text" id="sobrenome" />

                    <label>Data de Nascimento</label>
                    <input placeholder='dd/mm/aaaa' type="date" id="telefone" />

                    <label>Telefone</label>
                    <input placeholder='(DDD) Telefone' type="tel" id="telefone" />

                    <label>Confirmar senha</label>
                    <input type="password" id="ConfirmaSenha" />
                </div>      
          </form>   

      </section>


    </>
    );
  };
  
export default PersonalDetailsForm;
  