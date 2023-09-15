import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3002/posts', {
        firstName: name,
        email,
        password,
      });
      if (response.status === 201) {
        console.log('Utilisateur enregistré avec succès', response.data);
      } else {
        console.log('Une erreur s\'est produite lors de l\'enregistrement');
      }
    } catch (error) {
      console.log('Une erreur s\'est produite lors de l\'enregistrement :', error);
    }
  };

  return (
    <div>
      <h2>Page d'enregistrement</h2>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>S'inscrire</button>
    </div>
  );
};

export default RegistrationForm;
