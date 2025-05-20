<?php

$success = $_SESSION['success'] ?? null;
$error = $_SESSION['error'] ?? null;
$data = $_SESSION['data'] ?? [];

?>

<form method="post" action="index.php?step=user">
    <h2>Création de l'utilisateur</h2>
    <label for="username">Nom d'utilisateur :</label>
    <input type="text" id="username" name="username" value="<?= htmlspecialchars($data['username'] ?? '') ?>"><br>

    <label for="password">Mot de passe :</label>
    <input type="password" id="password" name="password" value="<?= htmlspecialchars($data['password'] ?? '') ?>"><br>

    <label for="confirm_password">Confirmer le mot de passe :</label>
    <input type="password" id="confirm_password" name="confirm_password" value="<?= htmlspecialchars($data['confirm_password'] ?? '') ?>"><br>

    <input type="submit" value="Suivant">
    <input type="button" value="Annuler" onclick="window.location.href='index.php'">
</form>