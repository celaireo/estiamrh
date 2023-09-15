import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function CreerBilan() {
    let history = useHistory();
    const [bilangenerale, setBilanGenerale] = useState('');
    const [IDemploye, setIDemploye] = useState('');

    
    const postData = () => {
        axios.post(`http://localhost:8000/bilans`, {
            bilangenerale,
            IDemploye,
        }).then(() => {
            history.push('/objectiffixes')
        })
    }
    return (
        <div>
            <Form className="bilan-form">
                <Form.Field>
                <label>Bilan Général:<textarea name="postContent" rows={4} cols={40} onChange={(e) => setBilanGenerale(e.target.value)} /></label>
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