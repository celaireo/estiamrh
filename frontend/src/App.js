import './App.css';



import Connexion from './components/connexion';
import CreerEmployes from './components/creerEmployes';
import ListEmployes from './components/listEmployes';
import ModifEmployes from './components/modifEmployes';
import Accueilsite from './components/accueilsite';
import Recherche from './components/recherche';
import BilanGenerale from './components/bilangenerale';
import ObjectifsFixe from './components/objectif';
import PointAmeloration from './components/pointamelioration';
import EvalSavoir from './components/Savoir';
import Projetpers from './components/Projet';
import ObjectifsFutur from './components/objectifs2';
import Compétence from './components/cartographie';
import Conclusion from './components/conclusion';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid justify-content-center">
          <Link class="nav-link" to="/connexion">Connexion <i class="fa-solid fa-house"></i></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link" to="/creerEmployes">Creation <i class="fa-solid fa-plus"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/listEmployes">Listage <i class="fa-sharp fa-solid fa-bookmark"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/accueilsite">Accueil <i class="fa-solid fa-house"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/recherche">Recherche <i class="fa-solid fa-house"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main">
        <h1 className="main-header"> <i class="fa-solid fa-feather"></i> ESTIAM RH <i class="fa-solid fa-feather"></i></h1>
        <div>
          <Route exact path='/connexion' component={Connexion} />
        <div>
          <Route exact path='/creerEmployes' component={CreerEmployes} />
        </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listEmployes' component={ListEmployes} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/accueilsite' component={Accueilsite} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/recherche' component={Recherche} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/bilangenerale' component={BilanGenerale} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/objectif' component={ObjectifsFixe} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/pointamelioration' component={PointAmeloration} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/Savoir' component={EvalSavoir} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/Projet' component={Projetpers} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/objectifs2' component={ObjectifsFutur} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/cartographie' component={Compétence} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/conclusion' component={Conclusion} />
        </div>
        <div>
        <Route path='/modifEmployes' component={ModifEmployes} />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
