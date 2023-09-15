import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3002/posts');
      const data = response.data;

      // Votre logique de connexion en comparant les informations fournies avec les données de connexion
      const user = data.find(
        item => item.email === email && item.password === password
      );

      if (user) {
        history.push('/listEmployes');
      } else {
        console.log('Identifiants de connexion invalides');
      }
    } catch (error) {
      console.log('Une erreur s\'est produite lors de la connexion :', error);
    }
  };

  return (
    <div>
      <h2>Page de connexion</h2>
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
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default LoginForm;
