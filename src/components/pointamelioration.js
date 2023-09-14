import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function PointAmeloration() {
    let history = useHistory();
    const [pointamelioration, setPointAmelioration] = useState('');
    const [IDemploye, setIDemploye] = useState('');


    
    const postData = () => {
        axios.post(`http://localhost:3002/posts`, {
            pointamelioration,
            IDemploye,
        }).then(() => {
            history.push('/Savoir')
        })
    }
    return (
        <div>
            <Form className="pointamélioration-form">
                <Form.Field>
                <label>Point d'amélioration:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setPointAmelioration(e.target.value)} /></label>
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