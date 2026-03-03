<?php
require_once __DIR__ . '/includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

$type = $_POST['type'] ?? '';
$redirect = $_POST['redirect'] ?? 'index.php';
unset($_POST['type'], $_POST['redirect']);
$payload = vbh_clean($_POST);

$ok = vbh_save_submission($type, $payload);
$status = $ok ? 'success' : 'error';
header('Location: ' . $redirect . '?status=' . $status);
exit;
