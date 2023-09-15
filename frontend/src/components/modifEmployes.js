import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function ModifEmployes() {
    let history = useHistory();
<<<<<<< HEAD
    const [Id_employe, setId_employe] = useState(null);
    const [Prenom_employe, setPrenom_employe] = useState('');
    const [Nom_employe, setNom_employe] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [Email_employe, setEmail_employe] = useState('');
    const [Mdp_employe, setPassword] = useState('');

    useEffect(() => {
        setId_employe(localStorage.getItem('ID'))
        setPrenom_employe(localStorage.getItem('First Name'));
        setNom_employe(localStorage.getItem('Last Name'));
        setEmail_employe(localStorage.getItem('Email'));
=======
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
>>>>>>> 3eb9b7d29964cbe8226703933cbc6a966c30b7f2
        setPassword(localStorage.getItem('Password'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
<<<<<<< HEAD
        axios.put(`http://localhost:8000/employes/${Id_employe}`, {
            Id_employe,
            Prenom_employe,
            Nom_employe,
            Email_employe,
            Mdp_employe,
=======
        axios.put(` http://localhost:3002/posts/${id}`, {
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
                    <label>PRENOM:</label>
                    <input placeholder='Prenom' value={Prenom_employe} onChange={(e) => setPrenom_employe(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>NOM:</label>
                    <input placeholder='Nom' value={Nom_employe} onChange={(e) => setNom_employe(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>ADRESSE E-MAIL:</label>
                    <input type='email' placeholder='ADRESSE E-MAIL' onChange={(e) => setEmail_employe(e.target.value)}/>
=======
                    <label>FIRST NAME:</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>LAST NAME:</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>ADRESSE E-MAIL:</label>
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
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
