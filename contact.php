<?php
// Vérification de l'envoi des données POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Nettoyage et validation sommaire des champs
    $name = strip_tags(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $phone = strip_tags(trim($_POST['phone'] ?? ''));
    $subject = strip_tags(trim($_POST['subject'] ?? ''));
    $message = strip_tags(trim($_POST['message'] ?? ''));
    $service = strip_tags(trim($_POST['service'] ?? ''));

    if (!$name || !$email || !$subject || !$message) {
        http_response_code(400);
        echo json_encode(['message' => 'Merci de remplir tous les champs obligatoires']);
        exit;
    }

    // Préparez le mail
    $to = 'contact@oncoaching.fr'; // Votre adresse email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $email_subject = "Nouveau message de $name : $subject";
    $email_body = "Nom: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Téléphone: $phone\n";
    $email_body .= "Service: $service\n";
    $email_body .= "Message:\n$message\n";

    // Envoi de l'email
    if (mail($to, $email_subject, $email_body, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Message envoyé avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de l\'envoi du message']);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Méthode non autorisée']);
}
?>
