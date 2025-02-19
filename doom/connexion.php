<?php
$db = new PDO('mysql:host=localhost;dbname=doom', 'root', 'comaravel');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



$dbstat = $db->prepare('INSERT INTO connexion (nom, prenom, email, identifiant, mot_de_passe) VALUES (:nom, :prenom, :email, :identifiant, :mot_de_passe)');

$dbstat->bindValue(':nom', $_POST['nom'], PDO::PARAM_STR);
$dbstat->bindValue(':prenom', $_POST['prenom'], PDO::PARAM_STR);
$dbstat->bindValue(':email', $_POST['email'], PDO::PARAM_STR);
$dbstat->bindValue(':identifiant', $_POST['identifiant'], PDO::PARAM_STR);
$dbstat->bindValue(':mot_de_passe', $_POST['mot_de_passe'], PDO::PARAM_STR);

$inserteok = $dbstat->execute();

if ($inserteok) {
    $message = "Enregistrement réussi";
} else {
    $message = "Échec de l'enregistrement";
}



?>