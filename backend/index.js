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


//EMPLOYES

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


//SAVOIR

app.post("/savoirs", (req, res) => {
  const {
    Performance,
    coopération,
    Orientation_client,
    Fiabilité,
    Engagement,
    Autonomie,
    Investissement,
    Autres_qualités,
    Id_employe,
  } = req.body;

  db.query(
    "INSERT INTO savoir (Performance, coopération, Orientation_client, Fiabilité, Engagement, Autonomie, Investissement, Autres_qualités, Id_employe) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      Performance,
      coopération,
      Orientation_client,
      Fiabilité,
      Engagement,
      Autonomie,
      Investissement,
      Autres_qualités,
      Id_employe,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Savoir ajouté");
      }
    }
  );
});

app.get("/savoirs", (req, res) => {
  db.query("SELECT * FROM savoir", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/savoirs/:id", (req, res) => {
  const id = req.params.id;
  const {
    Performance,
    coopération,
    Orientation_client,
    Fiabilité,
    Engagement,
    Autonomie,
    Investissement,
    Autres_qualités,
    Id_employe,
  } = req.body;

  db.query(
    "UPDATE savoir SET Performance = ?, coopération = ?, Orientation_client = ?, Fiabilité = ?, Engagement = ?, Autonomie = ?, Investissement = ?, Autres_qualités = ?, Id_employe = ? WHERE Id_savoir = ?",
    [
      Performance,
      coopération,
      Orientation_client,
      Fiabilité,
      Engagement,
      Autonomie,
      Investissement,
      Autres_qualités,
      Id_employe,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Savoir mis à jour");
      }
    }
  );
});

app.delete("/savoirs/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM savoir WHERE Id_savoir = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Savoir supprimé");
    }
  });
});


// PROJET

app.post("/projets", (req, res) => {
  const { bilan_générale, Id_employe } = req.body;

  db.query(
    "INSERT INTO projet (bilan_générale, Id_employe) VALUES (?, ?)",
    [bilan_générale, Id_employe],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Projet ajouté");
      }
    }
  );
});

app.get("/projets", (req, res) => {
  db.query("SELECT * FROM projet", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/projets/:id", (req, res) => {
  const id = req.params.id;
  const { bilan_générale, Id_employe } = req.body;

  db.query(
    "UPDATE projet SET bilan_générale = ?, Id_employe = ? WHERE Id_projet = ?",
    [bilan_générale, Id_employe, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Projet mis à jour");
      }
    }
  );
});

app.delete("/projets/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM projet WHERE Id_projet = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Projet supprimé");
    }
  });
});


// OBJECTIFS FUTURS

app.post("/objectifsfuturs", (req, res) => {
  const {
    objectif1,
    objectif2,
    objectif3,
    objectif4,
    objectif5,
    Id_employe,
  } = req.body;

  db.query(
    "INSERT INTO objectiffutur (objectif1, objectif2, objectif3, objectif4, objectif5, Id_employe) VALUES (?, ?, ?, ?, ?, ?)",
    [objectif1, objectif2, objectif3, objectif4, objectif5, Id_employe],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Objectif futur ajouté");
      }
    }
  );
});

app.get("/objectifsfuturs", (req, res) => {
  db.query("SELECT * FROM objectiffutur", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/objectifsfuturs/:id", (req, res) => {
  const id = req.params.id;
  const {
    objectif1,
    objectif2,
    objectif3,
    objectif4,
    objectif5,
    Id_employe,
  } = req.body;

  db.query(
    "UPDATE objectiffutur SET objectif1 = ?, objectif2 = ?, objectif3 = ?, objectif4 = ?, objectif5 = ?, Id_employe = ? WHERE Id_objectiffutur = ?",
    [objectif1, objectif2, objectif3, objectif4, objectif5, Id_employe, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Objectif futur mis à jour");
      }
    }
  );
});

app.delete("/objectifsfuturs/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM objectiffutur WHERE Id_objectiffutur = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Objectif futur supprimé");
    }
  });
});


// AMELIORATION

app.post("/pointameliorations", (req, res) => {
  const { point_amélioration, Id_employe } = req.body;

  db.query(
    "INSERT INTO amelioration (point_amélioration, Id_employe) VALUES (?, ?)",
    [point_amélioration, Id_employe],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Amélioration ajoutée");
      }
    }
  );
});

app.get("/pointameliorations", (req, res) => {
  db.query("SELECT * FROM amélioration", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/pointameliorations/:id", (req, res) => {
  const id = req.params.id;
  const { point_amélioration, Id_employe } = req.body;

  db.query(
    "UPDATE amelioration SET point_amélioration = ?, Id_employe = ? WHERE Id_amélioration = ?",
    [point_amélioration, Id_employe, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Amélioration mise à jour");
      }
    }
  );
});

app.delete("/pointameliorations/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM amélioration WHERE Id_amélioration = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Amélioration supprimée");
    }
  });
});


app.listen(8000, () => {
  console.log(`Le serveur est en cours d'exécution sur le port : ${8000}`);
});
