// // CREATION D'EMPLOYEES 

// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json())

// const db = mysql.createConnection({

// user: "root",
// host:"localhost",
// password: "",
// database: "estiamrhdb",
// });


// app.post("/create", (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     const country = req.body.country;
//     const position = req.body.position;
//     const wage = req.body.wage;

//     db.query(
//         "INSERT INTO employes (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)",
//         [name, age, country, position, wage],
//         (err, result) => {
//             if (err){
//                 console.log(err);
//             } else {
//                 res.send("Values Inserted");
//             }
//         }
//     );
// });


// // AFFICHAGE D'EMPLOYEES

// app.get("/employees", (req, res) => {
//     db.query("SELECT * FROM employes", (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// // UPDATE 

// app.put("/update", (req, res) => {
//     const id = req.body.id;
//     const wage = req.body.wage;
//     db.query(
//         "UPDATE employes SET wage = ? WHERE id = ?", 
//         [wage,id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else{
//               res.send(result);
//             }
//         }
//     );
// });


// // DELETE 

// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     db.query("DELETE FROM employes WHERE id = ?", id, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// }); 

// app.listen(8000, () => {
//     console.log(`Yey, your server is running on port: ${8000}`);
// });

// /******************************* FIN ********************************/


const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "dbestiam", // Utilisation de la base de données "bdestiam"
});

app.post("/employes", (req, res) => {
  const { Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date } = req.body;

  db.query(
    "INSERT INTO employe (Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date) VALUES (?, ?, ?, ?, ?)",
    [Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Employé ajouté");
      }
    }
  );
});

app.get("/employes", (req, res) => {
  db.query("SELECT * FROM employe", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/employes/:id", (req, res) => {
  const id = req.params.id;
  const { Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date } = req.body;

  db.query(
    "UPDATE employe SET Nom_employe = ?, Prenom_employe = ?, Email_employe = ?, Mdp_employe = ?, date = ? WHERE Id_employe = ?",
    [Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Employé mis à jour");
      }
    }
  );
});

app.delete("/employes/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM employe WHERE Id_employe = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Employé supprimé");
    }
  });
});

app.listen(8000, () => {
  console.log(`Le serveur est en cours d'exécution sur le port : ${8000}`);
});
