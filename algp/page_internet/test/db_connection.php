<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aeroplane"; // Nom de votre base de données

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}
?>
