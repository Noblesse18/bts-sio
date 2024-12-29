<?php
include 'db_connection.php'; // Connexion à la base de données

$table = $_POST['table'];
$data = $_POST;

// Retirer la clé 'table' des données pour éviter les erreurs
unset($data['table']);

// Préparer la requête SQL dynamiquement
$columns = implode(", ", array_keys($data));
$placeholders = implode(", ", array_fill(0, count($data), "?"));
$sql = "INSERT INTO $table ($columns) VALUES ($placeholders)";

// Préparer et exécuter la requête
$stmt = $conn->prepare($sql);

// Identifier les types des données
$types = str_repeat("s", count($data)); // Par défaut, tout est 'string'
$stmt->bind_param($types, ...array_values($data));

if ($stmt->execute()) {
    echo ucfirst($table) . " ajouté avec succès !";
} else {
    echo "Erreur : " . $stmt->error;
}

// Fermer la connexion
$stmt->close();
$conn->close();
?>
