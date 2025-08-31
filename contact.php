<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Méthode non autorisée"]);
    exit;
}

// Récupération des données JSON envoyées par fetch()
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["message" => "Aucune donnée reçue"]);
    exit;
}

$name    = htmlspecialchars(trim($data['name'] ?? ''));
$email   = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone   = htmlspecialchars(trim($data['phone'] ?? ''));
$subject = htmlspecialchars(trim($data['subject'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));
$service = htmlspecialchars(trim($data['service'] ?? ''));

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(["message" => "Champs requis manquants"]);
    exit;
}

// ⚠️ adresse de ton domaine IONOS
$from = $email;
$to   = "contact@oncoaching.fr";

$headers  = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mailSubject = "[Contact OM Coaching] $subject - Service: $service";

$mailBody  = "Nom : $name\n";
$mailBody .= "Email : $email\n";
$mailBody .= "Téléphone : $phone\n";
$mailBody .= "Service : $service\n\n";
$mailBody .= "Message :\n$message\n";

if (mail($to, $mailSubject, $mailBody, $headers)) {
    echo json_encode(["message" => "Email envoyé avec succès"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Erreur lors de l'envoi de l'email"]);
}
