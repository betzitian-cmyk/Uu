<?php
require_once __DIR__ . '/config.php';

function vbh_db(): ?PDO
{
    static $pdo = false;
    if ($pdo !== false) {
        return $pdo;
    }

    if (!VBH_DB_ENABLED) {
        $pdo = null;
        return null;
    }

    try {
        $dsn = sprintf('mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4', VBH_DB_HOST, VBH_DB_PORT, VBH_DB_NAME);
        $pdo = new PDO($dsn, VBH_DB_USER, VBH_DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (Throwable $e) {
        $pdo = null;
    }

    return $pdo;
}

function vbh_db_all(string $sql, array $params = []): array
{
    $pdo = vbh_db();
    if (!$pdo) {
        return [];
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll();
}

function vbh_db_exec(string $sql, array $params = []): bool
{
    $pdo = vbh_db();
    if (!$pdo) {
        return false;
    }

    $stmt = $pdo->prepare($sql);
    return $stmt->execute($params);
}
