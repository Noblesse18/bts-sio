-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 21 nov. 2024 à 17:55
-- Version du serveur : 5.7.24
-- Version de PHP : 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `aeroplane`
--

-- --------------------------------------------------------

--
-- Structure de la table `aeroport`
--

CREATE TABLE `aeroport` (
  `oaci` bigint(20) UNSIGNED NOT NULL,
  `aita` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `avion`
--

CREATE TABLE `avion` (
  `id_avion` bigint(20) UNSIGNED NOT NULL,
  `numero_Serie` int(11) NOT NULL,
  `code_Interne` int(11) NOT NULL,
  `id_modele` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `commercial`
--

CREATE TABLE `commercial` (
  `id_personnel` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `equipage`
--

CREATE TABLE `equipage` (
  `id_equipage` bigint(20) UNSIGNED NOT NULL,
  `id_personnel` bigint(20) UNSIGNED NOT NULL,
  `id_mouvement` bigint(20) UNSIGNED NOT NULL,
  `id_role` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `langue`
--

CREATE TABLE `langue` (
  `id_langue` bigint(20) UNSIGNED NOT NULL,
  `libelle_langue` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `modele`
--

CREATE TABLE `modele` (
  `id_modele` bigint(20) UNSIGNED NOT NULL,
  `libelle` int(11) NOT NULL,
  `nbSieges` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `mouvement`
--

CREATE TABLE `mouvement` (
  `id_mouvement` bigint(20) UNSIGNED NOT NULL,
  `numeroVol` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `nbPassage` int(11) NOT NULL,
  `estintracom` int(11) NOT NULL,
  `dateHeureDepart` datetime NOT NULL,
  `dateHeureArrivee` datetime NOT NULL,
  `dureeVol` int(11) NOT NULL,
  `id_avion` bigint(20) UNSIGNED NOT NULL,
  `id_aeroport` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `necessite`
--

CREATE TABLE `necessite` (
  `id_necessite` bigint(20) UNSIGNED NOT NULL,
  `nombreMininum` int(11) NOT NULL,
  `id_modele` bigint(20) UNSIGNED NOT NULL,
  `id_role` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `parle`
--

CREATE TABLE `parle` (
  `id_parle` bigint(20) UNSIGNED NOT NULL,
  `id_commercial` bigint(20) UNSIGNED NOT NULL,
  `id_langue` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `personnel`
--

CREATE TABLE `personnel` (
  `id_Personnel` bigint(20) UNSIGNED NOT NULL,
  `nom_Personnel` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `numero_portable` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `retard`
--

CREATE TABLE `retard` (
  `id_retard` bigint(20) UNSIGNED NOT NULL,
  `raison` varchar(50) NOT NULL,
  `duree` time NOT NULL,
  `id_mouvement` bigint(20) UNSIGNED NOT NULL,
  `id_typederetard` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id_role` bigint(20) UNSIGNED NOT NULL,
  `libelle_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `technique`
--

CREATE TABLE `technique` (
  `id_personnel` bigint(20) UNSIGNED NOT NULL,
  `nbHeuresDeVol` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `type_retard`
--

CREATE TABLE `type_retard` (
  `id_Type_Retard` bigint(20) UNSIGNED NOT NULL,
  `nom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `aeroport`
--
ALTER TABLE `aeroport`
  ADD UNIQUE KEY `oaci` (`oaci`);

--
-- Index pour la table `avion`
--
ALTER TABLE `avion`
  ADD PRIMARY KEY (`id_avion`),
  ADD UNIQUE KEY `id_Avion` (`id_avion`),
  ADD KEY `id_modele` (`id_modele`);

--
-- Index pour la table `commercial`
--
ALTER TABLE `commercial`
  ADD PRIMARY KEY (`id_personnel`),
  ADD UNIQUE KEY `id_commercial` (`id_personnel`);

--
-- Index pour la table `equipage`
--
ALTER TABLE `equipage`
  ADD PRIMARY KEY (`id_equipage`),
  ADD UNIQUE KEY `id_equipage` (`id_equipage`),
  ADD KEY `id_personnel` (`id_personnel`,`id_mouvement`,`id_role`),
  ADD KEY `id_mouvement` (`id_mouvement`),
  ADD KEY `id_role` (`id_role`);

--
-- Index pour la table `langue`
--
ALTER TABLE `langue`
  ADD PRIMARY KEY (`id_langue`),
  ADD UNIQUE KEY `id_langue` (`id_langue`),
  ADD KEY `id_langue_2` (`id_langue`);

--
-- Index pour la table `modele`
--
ALTER TABLE `modele`
  ADD PRIMARY KEY (`id_modele`),
  ADD UNIQUE KEY `id_modele` (`id_modele`);

--
-- Index pour la table `mouvement`
--
ALTER TABLE `mouvement`
  ADD PRIMARY KEY (`id_mouvement`),
  ADD UNIQUE KEY `id_mouvement` (`id_mouvement`),
  ADD KEY `id_aeroport` (`id_aeroport`),
  ADD KEY `id_avion` (`id_avion`),
  ADD KEY `id_avion_2` (`id_avion`,`id_aeroport`);

--
-- Index pour la table `necessite`
--
ALTER TABLE `necessite`
  ADD PRIMARY KEY (`id_necessite`),
  ADD UNIQUE KEY `id_necessite` (`id_necessite`),
  ADD KEY `id_modele` (`id_modele`,`id_role`),
  ADD KEY `id_role` (`id_role`);

--
-- Index pour la table `parle`
--
ALTER TABLE `parle`
  ADD PRIMARY KEY (`id_parle`),
  ADD UNIQUE KEY `id_parle` (`id_parle`),
  ADD KEY `id_commercial` (`id_commercial`,`id_langue`),
  ADD KEY `id_langue` (`id_langue`);

--
-- Index pour la table `personnel`
--
ALTER TABLE `personnel`
  ADD PRIMARY KEY (`id_Personnel`),
  ADD UNIQUE KEY `id_Personnel` (`id_Personnel`);

--
-- Index pour la table `retard`
--
ALTER TABLE `retard`
  ADD PRIMARY KEY (`id_retard`),
  ADD UNIQUE KEY `id_retard` (`id_retard`),
  ADD KEY `id_mouvement` (`id_mouvement`,`id_typederetard`),
  ADD KEY `id_typederetard` (`id_typederetard`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`),
  ADD UNIQUE KEY `id_role` (`id_role`);

--
-- Index pour la table `technique`
--
ALTER TABLE `technique`
  ADD PRIMARY KEY (`id_personnel`),
  ADD UNIQUE KEY `id_technique` (`id_personnel`);

--
-- Index pour la table `type_retard`
--
ALTER TABLE `type_retard`
  ADD PRIMARY KEY (`id_Type_Retard`),
  ADD UNIQUE KEY `id_Type_Retard` (`id_Type_Retard`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `aeroport`
--
ALTER TABLE `aeroport`
  MODIFY `oaci` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `avion`
--
ALTER TABLE `avion`
  MODIFY `id_avion` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `commercial`
--
ALTER TABLE `commercial`
  MODIFY `id_personnel` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `equipage`
--
ALTER TABLE `equipage`
  MODIFY `id_equipage` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `langue`
--
ALTER TABLE `langue`
  MODIFY `id_langue` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `modele`
--
ALTER TABLE `modele`
  MODIFY `id_modele` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `mouvement`
--
ALTER TABLE `mouvement`
  MODIFY `id_mouvement` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `necessite`
--
ALTER TABLE `necessite`
  MODIFY `id_necessite` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `parle`
--
ALTER TABLE `parle`
  MODIFY `id_parle` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `personnel`
--
ALTER TABLE `personnel`
  MODIFY `id_Personnel` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `retard`
--
ALTER TABLE `retard`
  MODIFY `id_retard` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id_role` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `technique`
--
ALTER TABLE `technique`
  MODIFY `id_personnel` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `type_retard`
--
ALTER TABLE `type_retard`
  MODIFY `id_Type_Retard` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `equipage`
--
ALTER TABLE `equipage`
  ADD CONSTRAINT `equipage_ibfk_1` FOREIGN KEY (`id_mouvement`) REFERENCES `mouvement` (`id_mouvement`),
  ADD CONSTRAINT `equipage_ibfk_2` FOREIGN KEY (`id_personnel`) REFERENCES `personnel` (`id_Personnel`),
  ADD CONSTRAINT `equipage_ibfk_3` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`);

--
-- Contraintes pour la table `mouvement`
--
ALTER TABLE `mouvement`
  ADD CONSTRAINT `mouvement_ibfk_1` FOREIGN KEY (`id_avion`) REFERENCES `avion` (`id_avion`),
  ADD CONSTRAINT `mouvement_ibfk_2` FOREIGN KEY (`id_aeroport`) REFERENCES `aeroport` (`oaci`);

--
-- Contraintes pour la table `necessite`
--
ALTER TABLE `necessite`
  ADD CONSTRAINT `necessite_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
  ADD CONSTRAINT `necessite_ibfk_2` FOREIGN KEY (`id_modele`) REFERENCES `modele` (`id_modele`);

--
-- Contraintes pour la table `parle`
--
ALTER TABLE `parle`
  ADD CONSTRAINT `parle_ibfk_1` FOREIGN KEY (`id_langue`) REFERENCES `langue` (`id_langue`),
  ADD CONSTRAINT `parle_ibfk_2` FOREIGN KEY (`id_commercial`) REFERENCES `commercial` (`id_personnel`);

--
-- Contraintes pour la table `retard`
--
ALTER TABLE `retard`
  ADD CONSTRAINT `retard_ibfk_1` FOREIGN KEY (`id_mouvement`) REFERENCES `mouvement` (`id_mouvement`),
  ADD CONSTRAINT `retard_ibfk_2` FOREIGN KEY (`id_typederetard`) REFERENCES `type_retard` (`id_Type_Retard`);

--
-- Contraintes pour la table `technique`
--
ALTER TABLE `technique`
  ADD CONSTRAINT `technique_ibfk_1` FOREIGN KEY (`id_personnel`) REFERENCES `personnel` (`id_Personnel`);

--
-- Contraintes pour la table `type_retard`
--
ALTER TABLE `type_retard`
  ADD CONSTRAINT `type_retard_ibfk_1` FOREIGN KEY (`id_Type_Retard`) REFERENCES `mouvement` (`id_mouvement`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
