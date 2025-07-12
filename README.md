# ESTIAMRH

## Description 
C’est une plateforme en ligne cree pour faciliter la gestion des ressources humaines. 
L'objectif visé est de permettre aux ressources humaines, la réalisation de les entretiens annuels du personnel 
de l’ESTIAM.


## Installation
Cloner le dépôt GitHub :
- Bash
- Copy code: git clone https://github.com/celaireo/estiamrh.git

## Installer les dépendances frontend :
bash
Copy code
cd frontend
npm install

## Installer les dépendances backend :

bash
Copy code
cd ../backend
npm install

## Configurer la base de données MySQL :

Créez une base de données MySQL et importez le fichier SQL fourni dans backend/database/schema.sql.
Configurer les variables d'environnement :

## Créez un fichier .env dans le dossier backend et configurez les variables suivantes :
makefile
Copy code
PORT=3001
DB_HOST=localhost
DB_USER=votre_utilisateur_mysql
DB_PASSWORD=votre_mot_de_passe_mysql
DB_DATABASE=votre_base_de_données_mysql
Utilisation
Démarrer le serveur backend :

bash
Copy code
cd backend
npm start
Démarrer l'application frontend :

bash
Copy code
cd ../frontend
npm start

## L'application sera accessible à l'adresse http://localhost:3000.

## Contributions
Les contributions sont les bienvenues ! Pour signaler des problèmes ou soumettre des demandes de fonctionnalités, veuillez ouvrir un ticket GitHub.
