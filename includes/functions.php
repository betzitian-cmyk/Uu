<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/database.php';

function vbh_bootstrap_storage(): void
{
    if (!is_dir(VBH_DATA_DIR)) {
        mkdir(VBH_DATA_DIR, 0775, true);
    }

    if (!file_exists(VBH_SUBMISSIONS_FILE)) {
        file_put_contents(VBH_SUBMISSIONS_FILE, json_encode([], JSON_PRETTY_PRINT));
    }
}

function vbh_read_submissions(): array
{
    $rows = vbh_db_all('SELECT id, widget_type AS type, full_payload, ip_address AS ip, created_at FROM widget_submissions ORDER BY created_at DESC');
    if ($rows) {
        return array_map(static function ($row) {
            return [
                'id' => (string) $row['id'],
                'type' => (string) $row['type'],
                'payload' => json_decode((string) $row['full_payload'], true) ?: [],
                'created_at' => (string) $row['created_at'],
                'ip' => (string) ($row['ip'] ?? 'unknown'),
            ];
        }, $rows);
    }

    vbh_bootstrap_storage();
    $raw = file_get_contents(VBH_SUBMISSIONS_FILE);
    $data = json_decode($raw ?: '[]', true);
    return is_array($data) ? array_reverse($data) : [];
}

function vbh_save_submission(string $type, array $payload): bool
{
    if (!in_array($type, VBH_ALLOWED_WIDGETS, true)) {
        return false;
    }

    $pdo = vbh_db();
    if ($pdo) {
        $stmt = $pdo->prepare('INSERT INTO widget_submissions(widget_type, full_payload, ip_address) VALUES (:type, :payload, :ip)');
        $ok = $stmt->execute([
            ':type' => $type,
            ':payload' => json_encode($payload, JSON_UNESCAPED_UNICODE),
            ':ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        ]);

        if (!$ok) {
            return false;
        }

        $submissionId = (int) $pdo->lastInsertId();
        vbh_insert_widget_details($pdo, $submissionId, $type, $payload);
        return true;
    }

    // Fallback JSON storage when DB is not available.
    $submissions = array_reverse(vbh_read_submissions());
    $submissions[] = [
        'id' => uniqid('sub_', true),
        'type' => $type,
        'payload' => $payload,
        'created_at' => gmdate('c'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ];

    return file_put_contents(VBH_SUBMISSIONS_FILE, json_encode($submissions, JSON_PRETTY_PRINT)) !== false;
}

function vbh_insert_widget_details(PDO $pdo, int $submissionId, string $type, array $payload): void
{
    $map = [
        'offer_bid' => ['sql' => 'INSERT INTO offer_bids(widget_submission_id, vehicle, bid_type, amount, full_name, email) VALUES (?,?,?,?,?,?)', 'vals' => [
            $submissionId, $payload['vehicle'] ?? '', $payload['bid_type'] ?? '', $payload['amount'] ?? 0, $payload['full_name'] ?? '', $payload['email'] ?? ''
        ]],
        'warranty_quote' => ['sql' => 'INSERT INTO warranty_quotes(widget_submission_id, name, email, vehicle, mileage) VALUES (?,?,?,?,?)', 'vals' => [
            $submissionId, $payload['name'] ?? '', $payload['email'] ?? '', $payload['vehicle'] ?? '', $payload['mileage'] ?? 0
        ]],
        'financing_application' => ['sql' => 'INSERT INTO financing_applications(widget_submission_id, full_name, email, phone, credit_profile, notes) VALUES (?,?,?,?,?,?)', 'vals' => [
            $submissionId, $payload['full_name'] ?? '', $payload['email'] ?? '', $payload['phone'] ?? '', $payload['credit_profile'] ?? '', $payload['notes'] ?? ''
        ]],
        'test_drive_booking' => ['sql' => 'INSERT INTO test_drive_bookings(widget_submission_id, name, vehicle, booking_date, booking_time) VALUES (?,?,?,?,?)', 'vals' => [
            $submissionId, $payload['name'] ?? '', $payload['vehicle'] ?? '', $payload['date'] ?? date('Y-m-d'), $payload['time'] ?? '12:00:00'
        ]],
        'special_vehicle_request' => ['sql' => 'INSERT INTO special_vehicle_requests(widget_submission_id, make_model, year_range, budget, features) VALUES (?,?,?,?,?)', 'vals' => [
            $submissionId, $payload['make_model'] ?? '', $payload['year_range'] ?? '', $payload['budget'] ?? 0, $payload['features'] ?? ''
        ]],
        'service_request' => ['sql' => 'INSERT INTO service_requests(widget_submission_id, vin, service_type, preferred_date, notes) VALUES (?,?,?,?,?)', 'vals' => [
            $submissionId, $payload['vin'] ?? '', $payload['service_type'] ?? '', $payload['preferred_date'] ?? date('Y-m-d'), $payload['notes'] ?? ''
        ]],
        'consignment_request' => ['sql' => 'INSERT INTO consignment_requests(widget_submission_id, name, email, target_vehicle, pickup_location, notes) VALUES (?,?,?,?,?,?)', 'vals' => [
            $submissionId, $payload['name'] ?? '', $payload['email'] ?? '', $payload['target_vehicle'] ?? '', $payload['pickup_location'] ?? '', $payload['notes'] ?? ''
        ]],
    ];

    if (!isset($map[$type])) {
        return;
    }

    $stmt = $pdo->prepare($map[$type]['sql']);
    $stmt->execute($map[$type]['vals']);
}

function vbh_inventory(): array
{
    $rows = vbh_db_all('SELECT title, price, mileage, source_dealer FROM inventory_vehicles ORDER BY id DESC');
    if ($rows) {
        return $rows;
    }

    return [
        ['title' => '2023 BMW X5 xDrive40i', 'price' => 51900, 'mileage' => 28120, 'source_dealer' => 'Prestige Euro Motors'],
        ['title' => '2022 Ford F-150 Lariat', 'price' => 42300, 'mileage' => 31442, 'source_dealer' => 'Heritage Truck Center'],
        ['title' => '2021 Tesla Model Y Long Range', 'price' => 34750, 'mileage' => 29100, 'source_dealer' => 'Metro EV Exchange'],
        ['title' => '2020 Lexus RX 350', 'price' => 33800, 'mileage' => 44005, 'source_dealer' => 'Cityline Imports'],
        ['title' => '2024 Honda Civic Sport Touring', 'price' => 29990, 'mileage' => 8330, 'source_dealer' => 'Capitol Auto Group'],
        ['title' => '2023 Mercedes-Benz C300', 'price' => 39200, 'mileage' => 19540, 'source_dealer' => 'Royal Star Motors'],
    ];
}

function vbh_warranty_plans(): array
{
    $rows = vbh_db_all('SELECT plan_name, monthly_price, features, is_featured FROM warranty_plans ORDER BY monthly_price ASC');
    if ($rows) {
        return $rows;
    }

    return [
        ['plan_name' => 'Silver Drivetrain', 'monthly_price' => 109, 'features' => 'Engine + transmission coverage|Roadside assistance|Towing reimbursement', 'is_featured' => 0],
        ['plan_name' => 'Gold Essential', 'monthly_price' => 149, 'features' => 'Powertrain + A/C + electrical|Rental car assistance|24/7 claims support', 'is_featured' => 1],
        ['plan_name' => 'Platinum Exclusionary', 'monthly_price' => 199, 'features' => 'Comprehensive component protection|High-mileage options|Trip interruption benefits', 'is_featured' => 0],
    ];
}

function vbh_consignment_steps(): array
{
    $rows = vbh_db_all('SELECT step_order, title, description FROM consignment_steps ORDER BY step_order ASC');
    if ($rows) {
        return $rows;
    }

    return [
        ['step_order' => 1, 'title' => 'Discovery', 'description' => 'Customer identifies vehicle or requests one.'],
        ['step_order' => 2, 'title' => 'Auction Verification', 'description' => 'We validate status via auction platform records.'],
        ['step_order' => 3, 'title' => 'Legal Sale Package', 'description' => 'Buyer/seller docs, taxes, and disclosures are completed.'],
        ['step_order' => 4, 'title' => 'Pickup + Delivery', 'description' => 'Broker picks up and delivers with final checklist.'],
    ];
}

function vbh_clean(array $fields): array
{
    $clean = [];
    foreach ($fields as $key => $value) {
        $clean[$key] = trim((string) $value);
    }

    return $clean;
}

function vbh_h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
