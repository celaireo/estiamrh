import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function Objectifsfixé() {
    let history = useHistory();
    const [objectiffixé1, setObjectifFixé1] = useState('');
    const [objectiffixé2, setObjectifFixé2] = useState('');
    const [objectiffixé3, setObjectifFixé3] = useState('');
    const [objectiffixé4, setObjectifFixé4] = useState('');
    const [objectiffixé5, setObjectifFixé5] = useState('');
    const [commentaireglobal, setCommentaireGlobal] = useState('');
    const [IDemploye, setIDemploye] = useState('');
   

    
    const postData = () => {
        axios.post(`http://localhost:8000/objectifs`, {
            objectiffixé1,
            objectiffixé2,
            objectiffixé3,
            objectiffixé4,
            objectiffixé5,
            commentaireglobal,
            IDemploye,
        }).then(() => {
            history.push('/pointameliorations')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                <label>Objectifs 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFixé1(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFixé2(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFixé3(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 4:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFixé4(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Objectifs 5:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setObjectifFixé5(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Commentaire Global:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCommentaireGlobal(e.target.value)} /></label>
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