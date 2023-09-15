-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 15 sep. 2023 à 01:26
-- Version du serveur :  10.1.36-MariaDB
-- Version de PHP :  7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dbestiam`
--

-- --------------------------------------------------------

--
-- Structure de la table `amélioration`
--

CREATE TABLE `amélioration` (
  `Id_amélioration` int(11) NOT NULL,
  `point_amélioration` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `amélioration`
--

INSERT INTO `amélioration` (`Id_amélioration`, `point_amélioration`, `Id_employe`) VALUES
(1, 'Améliorer la communication avec léquipe', 1),
(2, 'Acquérir des compétences techniques avancées', 2),
(3, 'Travailler sur la gestion du temps', 3),
(4, 'Renforcer les compétences en résolution de problèmes', 4),
(5, 'Améliorer la présentation des rapports', 5),
(6, 'Travailler sur la gestion du stress', 6),
(7, 'Développer la capacité à travailler en équipe', 7),
(8, 'Acquérir des compétences en leadership', 8),
(9, 'Travailler sur la gestion de projet', 9),
(10, 'Améliorer les compétences en communication écrite', 10);

-- --------------------------------------------------------

--
-- Structure de la table `bilan`
--

CREATE TABLE `bilan` (
  `Id_bilan` int(11) NOT NULL,
  `bilan_générale` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `bilan`
--

INSERT INTO `bilan` (`Id_bilan`, `bilan_générale`, `Id_employe`) VALUES
(1, 'Bonne performance au travail', 1),
(2, 'Progrès remarquables dans le projet', 2),
(3, 'Atteinte des objectifs de vente', 3),
(4, 'Nécessite une amélioration dans la communication', 4),
(5, 'Exécution exceptionnelle des tâches', 5),
(6, 'Réalisation des objectifs trimestriels', 6),
(7, 'Besoin de renforcer les compétences techniques', 7),
(8, 'Excellent leadership dans léquipe', 8),
(9, 'Contribution significative aux projets', 9),
(10, 'Très efficace dans la gestion des tâches', 10);

-- --------------------------------------------------------

--
-- Structure de la table `cartographie`
--

CREATE TABLE `cartographie` (
  `Id_cartographie` int(11) NOT NULL,
  `compétence1` varchar(300) DEFAULT NULL,
  `compétence2` varchar(300) DEFAULT NULL,
  `compétence3` varchar(300) DEFAULT NULL,
  `compétence4` varchar(300) DEFAULT NULL,
  `compétence5` varchar(300) DEFAULT NULL,
  `compétence6` varchar(300) DEFAULT NULL,
  `compétence7` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `cartographie`
--

INSERT INTO `cartographie` (`Id_cartographie`, `compétence1`, `compétence2`, `compétence3`, `compétence4`, `compétence5`, `compétence6`, `compétence7`, `Id_employe`) VALUES
(1, 'Compétence A1', 'Compétence A2', 'Compétence A3', 'Compétence A4', 'Compétence A5', 'Compétence A6', 'Compétence A7', 1),
(2, 'Compétence B1', 'Compétence B2', 'Compétence B3', 'Compétence B4', 'Compétence B5', 'Compétence B6', 'Compétence B7', 2),
(3, 'Compétence C1', 'Compétence C2', 'Compétence C3', 'Compétence C4', 'Compétence C5', 'Compétence C6', 'Compétence C7', 3),
(4, 'Compétence D1', 'Compétence D2', 'Compétence D3', 'Compétence D4', 'Compétence D5', 'Compétence D6', 'Compétence D7', 4),
(5, 'Compétence E1', 'Compétence E2', 'Compétence E3', 'Compétence E4', 'Compétence E5', 'Compétence E6', 'Compétence E7', 5),
(6, 'Compétence F1', 'Compétence F2', 'Compétence F3', 'Compétence F4', 'Compétence F5', 'Compétence F6', 'Compétence F7', 6),
(7, 'Compétence G1', 'Compétence G2', 'Compétence G3', 'Compétence G4', 'Compétence G5', 'Compétence G6', 'Compétence G7', 7),
(8, 'Compétence H1', 'Compétence H2', 'Compétence H3', 'Compétence H4', 'Compétence H5', 'Compétence H6', 'Compétence H7', 8),
(9, 'Compétence I1', 'Compétence I2', 'Compétence I3', 'Compétence I4', 'Compétence I5', 'Compétence I6', 'Compétence I7', 9),
(10, 'Compétence J1', 'Compétence J2', 'Compétence J3', 'Compétence J4', 'Compétence J5', 'Compétence J6', 'Compétence J7', 10);

-- --------------------------------------------------------

--
-- Structure de la table `conclusion`
--

CREATE TABLE `conclusion` (
  `Id_conclusion` int(11) NOT NULL,
  `conclusion` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `conclusion`
--

INSERT INTO `conclusion` (`Id_conclusion`, `conclusion`, `Id_employe`) VALUES
(1, 'Excellent employé avec un grand potentiel', 1),
(2, 'Leader exceptionnel et contributeur clé', 2),
(3, 'Travailleur assidu avec une forte éthique professionnelle', 3),
(4, 'Compétences exceptionnelles et dévouement au travail', 4),
(5, 'Collaborateur précieux et hautement performant', 5),
(6, 'Gestionnaire de projet talentueux', 6),
(7, 'Collaborateur engagé et axé sur les résultats', 7),
(8, 'Leadership exceptionnel et gestionnaire efficace', 8),
(9, 'Contributeur inestimable aux objectifs de lentreprise', 9),
(10, 'Très efficace et orienté vers lexcellence', 10);

-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

CREATE TABLE `employe` (
  `Id_employe` int(11) NOT NULL,
  `Nom_employe` varchar(60) DEFAULT NULL,
  `Prenom_employe` varchar(60) DEFAULT NULL,
  `Email_employe` varchar(60) DEFAULT NULL,
  `Mdp_employe` varchar(60) DEFAULT NULL,
  `date` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `employe`
--

INSERT INTO `employe` (`Id_employe`, `Nom_employe`, `Prenom_employe`, `Email_employe`, `Mdp_employe`, `date`) VALUES
(1, 'Smith', 'Johnny', 'undefined', NULL, NULL),
(2, 'Marechall', 'Cynthia', 'undefined', NULL, NULL),
(3, 'Davis', 'James', 'james.davis@email.com', 'pass789', '2023-09-15'),
(4, 'Amroun', 'Sarah', 'undefined', NULL, NULL),
(5, 'Brown', 'Jennifer', 'jennifer.brown@email.com', '12345', '2023-09-17'),
(6, 'Miller', 'Michael', 'michael.miller@email.com', 'hello678', '2023-09-18'),
(7, 'Anderson', 'Linda', 'linda.anderson@email.com', 'abc123', '2023-09-19'),
(8, 'Thomas', 'William', 'william.thomas@email.com', 'p@ssw0rd', '2023-09-20'),
(9, 'Hall', 'Elizabeth', 'elizabeth.hall@email.com', 'qwerty', '2023-09-21'),
(10, 'White', 'David', 'david.white@email.com', 'letmein', '2023-09-22'),
(12, 'Johnson', 'Mary', 'mary.johnson@email.com', 'secret456', '2023-09-14');

-- --------------------------------------------------------

--
-- Structure de la table `objectiffixe`
--

CREATE TABLE `objectiffixe` (
  `Id_objectiffixé` int(11) NOT NULL,
  `objectif1` varchar(300) DEFAULT NULL,
  `objectif2` varchar(300) DEFAULT NULL,
  `objectif3` varchar(300) DEFAULT NULL,
  `objectif4` varchar(300) DEFAULT NULL,
  `objectif5` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `objectiffixe`
--

INSERT INTO `objectiffixe` (`Id_objectiffixé`, `objectif1`, `objectif2`, `objectif3`, `objectif4`, `objectif5`, `Id_employe`) VALUES
(1, 'Objectif 1 pour employé 1', 'Objectif 2 pour employé 1', 'Objectif 3 pour employé 1', 'Objectif 4 pour employé 1', 'Objectif 5 pour employé 1', 1),
(2, 'Objectif 1 pour employé 2', 'Objectif 2 pour employé 2', 'Objectif 3 pour employé 2', 'Objectif 4 pour employé 2', 'Objectif 5 pour employé 2', 2),
(3, 'Objectif 1 pour employé 3', 'Objectif 2 pour employé 3', 'Objectif 3 pour employé 3', 'Objectif 4 pour employé 3', 'Objectif 5 pour employé 3', 3),
(4, 'Objectif 1 pour employé 4', 'Objectif 2 pour employé 4', 'Objectif 3 pour employé 4', 'Objectif 4 pour employé 4', 'Objectif 5 pour employé 4', 4),
(5, 'Objectif 1 pour employé 5', 'Objectif 2 pour employé 5', 'Objectif 3 pour employé 5', 'Objectif 4 pour employé 5', 'Objectif 5 pour employé 5', 5),
(6, 'Objectif 1 pour employé 6', 'Objectif 2 pour employé 6', 'Objectif 3 pour employé 6', 'Objectif 4 pour employé 6', 'Objectif 5 pour employé 6', 6),
(7, 'Objectif 1 pour employé 7', 'Objectif 2 pour employé 7', 'Objectif 3 pour employé 7', 'Objectif 4 pour employé 7', 'Objectif 5 pour employé 7', 7),
(8, 'Objectif 1 pour employé 8', 'Objectif 2 pour employé 8', 'Objectif 3 pour employé 8', 'Objectif 4 pour employé 8', 'Objectif 5 pour employé 8', 8),
(9, 'Objectif 1 pour employé 9', 'Objectif 2 pour employé 9', 'Objectif 3 pour employé 9', 'Objectif 4 pour employé 9', 'Objectif 5 pour employé 9', 9),
(10, 'Objectif 1 pour employé 10', 'Objectif 2 pour employé 10', 'Objectif 3 pour employé 10', 'Objectif 4 pour employé 10', 'Objectif 5 pour employé 10', 10);

-- --------------------------------------------------------

--
-- Structure de la table `objectiffutur`
--

CREATE TABLE `objectiffutur` (
  `Id_objectiffutur` int(11) NOT NULL,
  `objectif1` varchar(300) DEFAULT NULL,
  `objectif2` varchar(300) DEFAULT NULL,
  `objectif3` varchar(300) DEFAULT NULL,
  `objectif4` varchar(300) DEFAULT NULL,
  `objectif5` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `objectiffutur`
--

INSERT INTO `objectiffutur` (`Id_objectiffutur`, `objectif1`, `objectif2`, `objectif3`, `objectif4`, `objectif5`, `Id_employe`) VALUES
(1, 'Atteindre les objectifs de vente annuels', 'Améliorer les compétences en leadership', 'Acquérir de nouvelles compétences techniques', 'Accroître la productivité de léquipe', 'Développer de nouvelles relations professionnelles', 1),
(2, 'Gérer un projet majeur avec succès', 'Développer des compétences en gestion du temps', 'Améliorer les compétences de communication', 'Accroître la satisfaction du client', 'Mener des formations internes', 2),
(3, 'Atteindre un taux de rétention client élevé', 'Développer des compétences en gestion de projet', 'Renforcer la collaboration interdépartementale', 'Améliorer les processus opérationnels', 'Promouvoir linnovation', 3),
(4, 'Mener un projet de recherche et développement', 'Acquérir des compétences en résolution de conflits', 'Optimiser lutilisation des outils de gestion de projet', 'Améliorer la qualité des rapports', 'Contribuer à l\'expansion de l\'entreprise', 4),
(5, 'Atteindre les objectifs de croissance annuels', 'Promouvoir un environnement de travail inclusif', 'Développer des compétences en analyse de données', 'Accroître la rentabilité', 'Mener des initiatives de responsabilité sociale', 5),
(6, 'Gérer un portefeuille de projets complexes', 'Développer des compétences en leadership', 'Optimiser l\'utilisation des ressources', 'Améliorer la communication interne', 'Promouvoir la formation continue', 6),
(7, 'Atteindre un taux de satisfaction client de 95%', 'Renforcer la collaboration avec les partenaires externes', 'Optimiser la gestion des stocks', 'Améliorer la performance opérationnelle', 'Promouvoir le développement durable', 7),
(8, 'Mener un projet de restructuration', 'Améliorer la gestion du changement', 'Développer des compétences en gestion financière', 'Accroître lefficacité des processus', 'Promouvoir lefficacité énergétique', 8),
(9, 'Atteindre les objectifs de vente trimestriels', 'Développer des compétences en leadership', 'Optimiser les opérations logistiques', 'Améliorer la qualité des produits', 'Mener des initiatives de responsabilité sociale', 9),
(10, 'Gérer un portefeuille de projets internationaux', 'Renforcer la collaboration interfonctionnelle', 'Développer des compétences en gestion de projet', 'Accroître la visibilité de la marque', 'Promouvoir l\'innovation', 10);

-- --------------------------------------------------------

--
-- Structure de la table `objectifvalidation`
--

CREATE TABLE `objectifvalidation` (
  `Id_objectifvalidation` int(11) NOT NULL,
  `objectif1` varchar(20) DEFAULT NULL,
  `objectif2` varchar(20) DEFAULT NULL,
  `objectif3` varchar(20) DEFAULT NULL,
  `objectif4` varchar(20) DEFAULT NULL,
  `objectif5` varchar(20) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `objectifvalidation`
--

INSERT INTO `objectifvalidation` (`Id_objectifvalidation`, `objectif1`, `objectif2`, `objectif3`, `objectif4`, `objectif5`, `Id_employe`) VALUES
(1, 'Validé', 'Validé', 'Non validé', 'En cours de validati', 'En cours de validati', 1),
(2, 'Validé', 'Validé', 'Non validé', 'En cours de validati', 'En cours de validati', 2),
(3, 'Validé', 'Non validé', 'Non validé', 'En cours de validati', 'En cours de validati', 3),
(4, 'Validé', 'Validé', 'Validé', 'Validé', 'En cours de validati', 4),
(5, 'Validé', 'Validé', 'Validé', 'Validé', 'Validé', 5),
(6, 'Validé', 'Validé', 'Non validé', 'Non validé', 'Non validé', 6),
(7, 'Validé', 'Validé', 'Non validé', 'En cours de validati', 'En cours de validati', 7),
(8, 'Validé', 'Validé', 'Validé', 'Validé', 'Validé', 8),
(9, 'Validé', 'Validé', 'Non validé', 'En cours de validati', 'En cours de validati', 9),
(10, 'Non validé', 'Non validé', 'Non validé', 'Non validé', 'Non validé', 10);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `Id_projet` int(11) NOT NULL,
  `bilan_générale` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`Id_projet`, `bilan_générale`, `Id_employe`) VALUES
(1, 'Réussite du projet A', 1),
(2, 'Mise en œuvre réussie du projet B', 2),
(3, 'Gestion efficace du projet C', 3),
(4, 'Leadership exceptionnel dans le projet D', 4),
(5, 'Réalisation réussie du projet E', 5),
(6, 'Gestion de projet exemplaire pour le projet F', 6),
(7, 'Contribution majeure au projet G', 7),
(8, 'Réussite du projet H', 8),
(9, 'Gestion efficace du projet I', 9),
(10, 'Excellente contribution au projet J', 10);

-- --------------------------------------------------------

--
-- Structure de la table `savoir`
--

CREATE TABLE `savoir` (
  `Id_savoir` int(11) NOT NULL,
  `Performance` varchar(300) DEFAULT NULL,
  `coopération` varchar(300) DEFAULT NULL,
  `Orientation_client` varchar(300) DEFAULT NULL,
  `Fiabilité` varchar(300) DEFAULT NULL,
  `Engagement` varchar(300) DEFAULT NULL,
  `Automonie` varchar(300) DEFAULT NULL,
  `Investissement` varchar(300) DEFAULT NULL,
  `Autres_qualités` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `savoir`
--

INSERT INTO `savoir` (`Id_savoir`, `Performance`, `coopération`, `Orientation_client`, `Fiabilité`, `Engagement`, `Automonie`, `Investissement`, `Autres_qualités`, `Id_employe`) VALUES
(1, 'Bonne', 'Très bonne', 'Excellente', 'Très fiable', 'Hautement engagé', 'Autonome', 'Investi', 'Créatif', 1),
(2, 'Excellente', 'Très bonne', 'Excellente', 'Très fiable', 'Hautement engagée', 'Autonome', 'Investie', 'Créative', 2),
(3, 'Bonne', 'Bonne', 'Bonne', 'Fiable', 'Engagé', 'Autonome', 'Investi', 'Créatif', 3),
(4, 'Très bonne', 'Très bonne', 'Excellente', 'Fiable', 'Engagé', 'Autonome', 'Investi', 'Créatif', 4),
(5, 'Excellente', 'Excellente', 'Excellente', 'Très fiable', 'Hautement engagé', 'Autonome', 'Investi', 'Créatif', 5),
(6, 'Bonne', 'Bonne', 'Bonne', 'Fiable', 'Engagé', 'Autonome', 'Investi', 'Créatif', 6),
(7, 'Excellente', 'Très bonne', 'Excellente', 'Très fiable', 'Hautement engagée', 'Autonome', 'Investie', 'Créative', 7),
(8, 'Bonne', 'Bonne', 'Bonne', 'Fiable', 'Engagé', 'Autonome', 'Investi', 'Créatif', 8),
(9, 'Très bonne', 'Très bonne', 'Excellente', 'Fiable', 'Engagé', 'Autonome', 'Investi', 'Créatif', 9),
(10, 'Excellente', 'Excellente', 'Excellente', 'Très fiable', 'Hautement engagé', 'Autonome', 'Investi', 'Créatif', 10);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `amélioration`
--
ALTER TABLE `amélioration`
  ADD PRIMARY KEY (`Id_amélioration`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `bilan`
--
ALTER TABLE `bilan`
  ADD PRIMARY KEY (`Id_bilan`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `cartographie`
--
ALTER TABLE `cartographie`
  ADD PRIMARY KEY (`Id_cartographie`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `conclusion`
--
ALTER TABLE `conclusion`
  ADD PRIMARY KEY (`Id_conclusion`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`Id_employe`);

--
-- Index pour la table `objectiffixe`
--
ALTER TABLE `objectiffixe`
  ADD PRIMARY KEY (`Id_objectiffixé`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `objectiffutur`
--
ALTER TABLE `objectiffutur`
  ADD PRIMARY KEY (`Id_objectiffutur`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `objectifvalidation`
--
ALTER TABLE `objectifvalidation`
  ADD PRIMARY KEY (`Id_objectifvalidation`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`Id_projet`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- Index pour la table `savoir`
--
ALTER TABLE `savoir`
  ADD PRIMARY KEY (`Id_savoir`),
  ADD KEY `Id_employe` (`Id_employe`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `amélioration`
--
ALTER TABLE `amélioration`
  MODIFY `Id_amélioration` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `bilan`
--
ALTER TABLE `bilan`
  MODIFY `Id_bilan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `cartographie`
--
ALTER TABLE `cartographie`
  MODIFY `Id_cartographie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `conclusion`
--
ALTER TABLE `conclusion`
  MODIFY `Id_conclusion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `employe`
--
ALTER TABLE `employe`
  MODIFY `Id_employe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `objectiffixe`
--
ALTER TABLE `objectiffixe`
  MODIFY `Id_objectiffixé` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `objectiffutur`
--
ALTER TABLE `objectiffutur`
  MODIFY `Id_objectiffutur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `objectifvalidation`
--
ALTER TABLE `objectifvalidation`
  MODIFY `Id_objectifvalidation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `Id_projet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `savoir`
--
ALTER TABLE `savoir`
  MODIFY `Id_savoir` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `amélioration`
--
ALTER TABLE `amélioration`
  ADD CONSTRAINT `amélioration_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);

--
-- Contraintes pour la table `bilan`
--
ALTER TABLE `bilan`
  ADD CONSTRAINT `bilan_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);

--
-- Contraintes pour la table `cartographie`
--
ALTER TABLE `cartographie`
  ADD CONSTRAINT `cartographie_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);

--
-- Contraintes pour la table `conclusion`
--
ALTER TABLE `conclusion`
  ADD CONSTRAINT `conclusion_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);

--
-- Contraintes pour la table `objectiffixe`
--
ALTER TABLE `objectiffixe`
  ADD CONSTRAINT `objectiffixe_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);

--
-- Contraintes pour la table `objectiffutur`
--
ALTER TABLE `objectiffutur`
  ADD CONSTRAINT `objectiffutur_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);

--
-- Contraintes pour la table `objectifvalidation`
--
ALTER TABLE `objectifvalidation`
  ADD CONSTRAINT `objectifvalidation_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);

--
-- Contraintes pour la table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `projet_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);

--
-- Contraintes pour la table `savoir`
--
ALTER TABLE `savoir`
  ADD CONSTRAINT `savoir_ibfk_1` FOREIGN KEY (`Id_employe`) REFERENCES `employe` (`Id_employe`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
