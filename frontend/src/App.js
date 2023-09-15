import './App.css';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Connexion from './components/connexion';
import CreerEmployes from './components/creerEmployes';
import ListEmployes from './components/listEmployes';
import ModifEmployes from './components/modifEmployes';

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
            </ul>
          </div>
        </div>
      </nav>
      <div className="main">
        <h1 className="main-header"> <i class="fa-solid fa-feather"></i> ESTIAM RH <i class="fa-solid fa-feather"></i></h1>
        <div>
        
        <Route exact path="/" component={LoginForm} />
        
        <Route path="/register" component={RegistrationForm} />
      </div>

        <div>
          <Route exact path='/connexion' component={Connexion} />
        <div>
          <Route exact path='/creerEmployes' component={CreerEmployes} />
        </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/listEmployes' component={ListEmployes} />
        </div>
        <div>
        <Route path='/modifEmployes' component={ModifEmployes} />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
