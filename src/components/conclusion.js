import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function CreerConclusion() {
    let history = useHistory();
    const [conclusion, setConclusion] = useState('');
    const [IDemploye, setIDemploye] = useState('');

    
    const postData = () => {
        axios.post(`http://localhost:3002/posts`, {
            conclusion,
            IDemploye,
        }).then(() => {
            history.push('/listEmployes')
        })
    }
    return (
        <div>
            <Form className="conclusion-form">
                <Form.Field>
                <label>Conclusion:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setConclusion(e.target.value)} /></label>
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