<?php
$data = $_SESSION['data'] ?? [];
?>

<form method="post" action="index.php?step=database">
    <h2>Configuration de la base de données</h2>
    <label for="db_host">Hôte de la base de données :</label>
    <input type="text" id="db_host" name="db_host" value="<?= htmlspecialchars($data['db_host'] ?? '') ?>"><br>

    <label for="db_name">Nom de la base de données :</label>
    <input type="text" id="db_name" name="db_name" value="<?= htmlspecialchars($data['db_name'] ?? '') ?>"><br>

    <label for="db_user">Utilisateur de la base de données :</label>
    <input type="text" id="db_user" name="db_user" value="<?= htmlspecialchars($data['db_user'] ?? '') ?>"><br>

    <label for="db_pass">Mot de passe de la base de données :</label>
    <input type="password" id="db_pass" name="db_pass" value="<?= htmlspecialchars($data['db_pass'] ?? '') ?>"><br>

    <input type="submit" value="Suivant">
    <input type="button" value="Annuler" onclick="window.location.href='index.php'">
</form>