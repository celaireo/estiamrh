import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function CreerEmployes() {
    let history = useHistory();
<<<<<<< HEAD
    //const [Id_employe, setId_employe] = useState(null);
    const [Nom_employe, setNom_employe] = useState('');
    const [Prenom_employe, setPrenom_employe] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [Email_employe, setEmail_employe] = useState('');
    const [Mdp_employe, setPassword] = useState('');

    console.log(checkbox)
    const postData = () => {
        axios.post(`http://localhost:8000/employes`, {
            Prenom_employe,
            Nom_employe,
            Email_employe,
            Mdp_employe,
=======
    const [IDemploye, setIDemploye] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(checkbox)
    const postData = () => {
        axios.post(`http://localhost:3002/posts`, {
            IDemploye,
            firstName,
            lastName,
            email,
            password,
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
            checkbox
        }).then(() => {
            history.push('/listEmployes')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
<<<<<<< HEAD
                    <label>PRENOM</label>
                    <input placeholder='Prenom' onChange={(e) => setPrenom_employe(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>NOM</label>
                    <input placeholder='Nom' onChange={(e) => setNom_employe(e.target.value)}/>
=======
                    <label>ID Employe</label>
                    <input placeholder='ID Employe' onChange={(e) => setIDemploye(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
                </Form.Field>
            
                <Form.Field>
                    <label>ADRESSE E-MAIL:</label>
<<<<<<< HEAD
                    <input type='email' placeholder='ADRESSE E-MAIL' onChange={(e) => setEmail_employe(e.target.value)}/>
=======
                    <input type='email' placeholder='ADRESSE E-MAIL' onChange={(e) => setEmail(e.target.value)}/>
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
                </Form.Field>
                <Form.Field>
                    <label>MOT DE PASSE:</label>
                    <input type='password' placeholder='MOT DE PASSE' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Etes-vous un administrateur ?' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
