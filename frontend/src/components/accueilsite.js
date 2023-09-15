import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

import BilanGenerale from './bilangenerale';
import ObjectifsFixe from './objectif';
import PointAmeloration from './pointamelioration';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Accueil() {
    return (
       <div>
        <Form className="create-form">
        <div >
            <ul>
              <li class="nav-item1">
                <Link class="nav-link1" to="/bilangenerale">Bilan Générale </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/objectif">Objectifs Fixés </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/pointamelioration">Point d'Améloration </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/Savoir">Evaluation des savoir-faire et savoir-être </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/Projet">Projet professionnel et perspectives </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/objectifs2">Objectifs Futurs </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/cartographie">Cartographie des compétences </Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link1" to="/conclusion">Conclusion </Link>
              </li>
            </ul>
          </div>
        </Form>
      </div>
    );
  }
  
  export default Accueil;
  