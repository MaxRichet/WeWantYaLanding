import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [emailType, setEmailType] = useState('student');
  const [highlightedButton, setHighlightedButton] = useState('button1');

  const handleSubmit = async (event) => {
    event.preventDefault();

    let url;
    if (emailType === 'student') {
      url = 'http://localhost:3000/studentemailregister';
    } else if (emailType === 'startup') {
      url = 'http://localhost:3000/startupemailregister';
    }

    try {
      const response = await axios.post(url, { email });
      if (response.status === 201) {
        alert('Email enregistré avec succès !');
      } else {
        alert("L'envoi de votre email a échoué.");
      }
    } catch (error) {
      console.error('There was an error saving the email!', error);
      alert("Une erreur est survenue lors de l'envoi de votre email.");
    }
    setEmail('');
  };

  const toggleHighlight = (button) => {
    setHighlightedButton(prevButton => prevButton === button ? null : button);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='button'>
        <button type="button" className={highlightedButton === 'button1' ? 'highlight' : ''} onClick={() => {setEmailType('student'); toggleHighlight('button1');}}>
          Un Étudiant
        </button>
        <button type="button" className={highlightedButton === 'button2' ? 'highlight' : ''} onClick={() => {setEmailType('startup'); toggleHighlight('button2');}}>
          Une Startup
        </button>
      </div>
      <div className='input'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Max@gmail.com'
        />
      <button type="submit">Envoyer</button>
      </div>
    </form>
  );
};

export default EmailForm;
