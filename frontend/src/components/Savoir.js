import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function EvalSavoir() {
    let history = useHistory();
    const [evalsavoir1, setEvalSavoir1] = useState('');
    const [evalsavoir2, setEvalSavoir2] = useState('');
    const [evalsavoir3, setEvalSavoir3] = useState('');
    const [evalsavoir4, setEvalSavoir4] = useState('');
    const [evalsavoir5, setEvalSavoir5] = useState('');
    const [evalsavoir6, setEvalSavoir6] = useState('');
    const [evalsavoir7, setEvalSavoir7] = useState('');
    const [evalsavoir8, setEvalSavoir8] = useState('');
    const [IDemploye, setIDemploye] = useState('');
   

    
    const postData = () => {
        axios.post(`http://localhost:3002/posts`, {
            evalsavoir1,
            evalsavoir2,
            evalsavoir3,
            evalsavoir4,
            evalsavoir5,
            evalsavoir6,
            evalsavoir7,
            evalsavoir8,
            IDemploye,
        }).then(() => {
            history.push('/Projet')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                <label>Performance dans son poste:</label>
                <input type='email' placeholder='' onChange={(e) => setEvalSavoir1(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Sens du collectif et coopération:</label>
                <input type='email' placeholder='' onChange={(e) => setEvalSavoir2(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Orientation client:</label>
                <input type='email' placeholder='' onChange={(e) => setEvalSavoir3(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Fiabilité:</label>
                <input type='email' placeholder='' onChange={(e) => setEvalSavoir4(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Engagement dans ses missions:</label>
                <input type='email' placeholder='' onChange={(e) => setEvalSavoir5(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Automonie:</label>
                <input type='email' placeholder='' onChange={(e) => setEvalSavoir6(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Investissement dans l'entreprise:</label>
                <input type='email' placeholder='' onChange={(e) => setEvalSavoir7(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Autres qualités personnelles :</label>
                <input type='email' placeholder='' onChange={(e) => setEvalSavoir8(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>ID Employe</label>
                    <input placeholder='First Name' onChange={(e) => setIDemploye(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Suivant</Button>
                <Link to="/accueilsite"><Button>Accueil </Button> </Link>
            </Form>
        </div>
    )
}