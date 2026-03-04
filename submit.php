<?php
require_once __DIR__ . '/includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

$type = $_POST['type'] ?? '';
$redirect = $_POST['redirect'] ?? 'index.php';

$allowedRedirects = [
    'index.php',
    'inventory.php',
    'warranties.php',
    'financing.php',
    'services.php',
    'consignment.php',
    'admin.php',
    'index.html',
    'inventory.html',
    'warranties.html',
    'financing.html',
    'services.html',
    'consignment.html',
];

// Prevent open redirects and only allow known local pages.
$redirectPage = is_string($redirect) ? basename($redirect) : 'index.php';
if (!in_array($redirectPage, $allowedRedirects, true)) {
    $redirectPage = 'index.php';
}

unset($_POST['type'], $_POST['redirect']);
$payload = vbh_clean($_POST);

$ok = vbh_save_submission($type, $payload);
$status = $ok ? 'success' : 'error';

$query = http_build_query(['status' => $status], '', '&', PHP_QUERY_RFC3986);
header('Location: ' . $redirectPage . '?' . $query);
exit;
