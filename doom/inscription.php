<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doom</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <?php
    include_once('connexion.php');
    ?>
    <div class="form-container">
        <h1>Inscription</h1>
        <form action="connexion.php" method="post">
            <ul>
                <li>
                    <label for="nom">Nom</label>
                    <input id="nom" type="text" name="nom" required>
                </li>
                <li>
                    <label for="prenom">Prénom</label>
                    <input id="prenom" type="text" name="prenom" required>
                </li>
                <li>
                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" required>
                </li>
                <li>
                    <label for="identifiant">Identifiant</label>
                    <input id="identifiant" type="text" name="identifiant" required>
                </li>
                <li>
                    <label for="mot_de_passe">Mot de passe</label>
                    <input id="mot_de_passe" type="password" name="mot_de_passe" required>
                </li>
                <li>
                    <input type="submit" value="S'inscrire">
                </li>
            </ul>
        </form>
    </div>
</body>

</html>