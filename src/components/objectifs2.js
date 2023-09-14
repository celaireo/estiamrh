import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function Objectifsfutur() {
    let history = useHistory();
    const [objectiffutur1, setObjectifFutur1] = useState('');
    const [objectiffutur2, setObjectifFutur2] = useState('');
    const [objectiffutur3, setObjectifFutur3] = useState('');
    const [objectiffutur4, setObjectifFutur4] = useState('');
    const [objectiffutur5, setObjectifFutur5] = useState('');
    const [IDemploye, setIDemploye] = useState('');
   

    
    const postData = () => {
        axios.post(`http://localhost:3002/posts`, {
            objectiffutur1,
            objectiffutur2,
            objectiffutur3,
            objectiffutur4,
            objectiffutur5,
            IDemploye,
        }).then(() => {
            history.push('/cartographie')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                <label>Objectifs 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFutur1(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFutur2(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFutur3(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 4:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFutur4(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 5:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFutur5(e.target.value)} /></label>
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