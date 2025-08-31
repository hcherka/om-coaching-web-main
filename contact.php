<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$data = json_decode(file_get_contents('php://input'), true);

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !$data) {
    http_response_code(405);
    echo json_encode(['message' => 'Méthode non autorisée ou pas de données reçues']);
    exit;
}

$name = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''));
$subject = htmlspecialchars(trim($data['subject'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));
$service = htmlspecialchars(trim($data['service'] ?? ''));

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(['message' => "Champs requis manquants"]);
    exit;
}

$to = "contact@oncoaching.fr";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
$mailSubject = "[Contact OM Coaching] $subject - Service: $service";

$mailBody = "Nom : $name\n";
$mailBody .= "Email : $email\n";
$mailBody .= "Téléphone : $phone\n";
$mailBody .= "Service : $service\n\n";
$mailBody .= "Message :\n$message\n";

// Test d'envoi de mail
if (mail($to, $mailSubject, $mailBody, $headers)) {
    http_response_code(200);
    echo json_encode(['message' => "Message envoyé avec succès"]);
} else {
    error_log("Erreur envoi mail dans contact.php");
    http_response_code(500);
    echo json_encode(['message' => "Erreur lors de l'envoi du message"]);
}
?>
