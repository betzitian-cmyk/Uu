<?php
// Shared hosting friendly config.
define('VBH_BASE_DIR', dirname(__DIR__));
define('VBH_DATA_DIR', VBH_BASE_DIR . '/data');
define('VBH_SUBMISSIONS_FILE', VBH_DATA_DIR . '/submissions.json');

define('VBH_ALLOWED_WIDGETS', [
    'offer_bid',
    'warranty_quote',
    'financing_application',
    'test_drive_booking',
    'special_vehicle_request',
    'service_request',
    'consignment_request',
    'contact_request'
]);

// Database settings (for shared hosting cPanel/DirectAdmin MySQL).
define('VBH_DB_ENABLED', getenv('VBH_DB_ENABLED') !== '0');
define('VBH_DB_HOST', getenv('VBH_DB_HOST') ?: 'localhost');
define('VBH_DB_PORT', getenv('VBH_DB_PORT') ?: '3306');
define('VBH_DB_NAME', getenv('VBH_DB_NAME') ?: 'velocity_broker_house');
define('VBH_DB_USER', getenv('VBH_DB_USER') ?: 'root');
define('VBH_DB_PASS', getenv('VBH_DB_PASS') ?: '');
