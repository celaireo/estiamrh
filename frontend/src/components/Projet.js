import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function CreerProjet() {
    let history = useHistory();
    const [projetpers, setProjetpers] = useState('');
    const [IDemploye, setIDemploye] = useState('');
   

    
    const postData = () => {
        axios.post(`http://localhost:3002/posts`, {
            projetpers,
            IDemploye,
        }).then(() => {
            history.push('/objectifs2')
        })
    }
    return (
        <div>
            <Form className="projet-form">
                <Form.Field>
                <label>Projet professionnel et perspectives:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setProjetpers(e.target.value)} /></label>
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