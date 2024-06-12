import React from 'react'
import EmailForm from './components/emailform';
import './App.css'
import logo from './img/logo.png'
import insta from './img/insta.png'
import tiktok from './img/tiktok.png'
import linkedin from './img/linkedin.png'

function App(){
  return (
    <div>
      <img src={logo} alt='logo We Want Ya'></img>
      <h1>Coming Soon</h1>
      <p className='padding'>Soyez le premier à être informé de la mise en ligne de notre app.</p>
      <p>Vous êtes :</p>
      <div className='size'>
        <EmailForm />
      </div>
      <div className='socials'>
        <a href='https://www.instagram.com/we.want.ya?igsh=MTZ4NnUwYW53ZGM2aQ%3D%3D&utm_source=qr'><img src={insta}></img></a>
        <a href='https://www.tiktok.com/@we.want.ya?_t=8mNLoaeruC0&_r=1'><img src={tiktok}></img></a>
        <a href='https://www.linkedin.com/company/we-want-ya/'><img src={linkedin}></img></a>
      </div>
    </div>
  )
}

export default App