import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function Compétence() {
    let history = useHistory();
    const [compétence1, setCompétence1] = useState('');
    const [compétence2, setCompétence2] = useState('');
    const [compétence3, setCompétence3] = useState('');
    const [compétence4, setCompétence4] = useState('');
    const [compétence5, setCompétence5] = useState('');
    const [compétence6, setCompétence6] = useState('');
    const [compétence7, setCompétence7] = useState('');
    const [IDemploye, setIDemploye] = useState('');
   

    
    const postData = () => {
        axios.post(`http://localhost:3002/posts`, {
            compétence1,
            compétence2,
            compétence3,
            compétence4,
            compétence5,
            compétence6,
            compétence7,
            IDemploye,
        }).then(() => {
            history.push('/conclusion')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                <label>Compétence 1:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence1(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Compétence 2:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence2(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Compétence 3:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence3(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Compétence 4:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence4(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Compétence 5:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence5(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Compétence 6:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence6(e.target.value)} /></label>
                </Form.Field>
                <Form.Field>
                <label>Compétence 7:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setCompétence7(e.target.value)} /></label>
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