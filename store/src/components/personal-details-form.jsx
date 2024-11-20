import React from 'react';
import './personal-details-form.css';
import NextButton from '../components/next-button';


const PersonalDetailsForm = () => {
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
                        <div className='progress-user'></div>
                      </div>
                </div>
          </section>





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

                    <NextButton  link="/login/PersonalAddress"/>
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
  