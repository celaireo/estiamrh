
-- --------------------------------------------------------

--
-- Structure de la table `amélioration`
--

CREATE TABLE `amélioration` (
  `Id_amélioration` int(11) NOT NULL,
  `point_amélioration` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Structure de la table `bilan`
--

CREATE TABLE `bilan` (
  `Id_bilan` int(11) NOT NULL,
  `bilan_générale` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `conclusion`
--

CREATE TABLE `conclusion` (
  `Id_conclusion` int(11) NOT NULL,
  `conclusion` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Structure de la table `objectiffixe`
--

CREATE TABLE `objectiffixe` (
  `Id_objectiffixé` int(11) NOT NULL,
  `objectif1` varchar(300) DEFAULT NULL,
  `objectif2` varchar(300) DEFAULT NULL,
  `objectif3` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `objectiffutur`
--

CREATE TABLE `objectiffutur` (
  `Id_objectiffutur` int(11) NOT NULL,
  `objectif1` varchar(300) DEFAULT NULL,
  `objectif2` varchar(300) DEFAULT NULL,
  `objectif3` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `Id_projet` int(11) NOT NULL,
  `bilan_générale` varchar(300) DEFAULT NULL,
  `Id_employe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

