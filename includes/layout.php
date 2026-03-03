<?php
require_once __DIR__ . '/functions.php';

function vbh_render_header(string $title, string $active, string $extraHead = ''): void
{
    $nav = [
        'home' => 'index.php',
        'inventory' => 'inventory.php',
        'consignment' => 'consignment.php',
        'warranties' => 'warranties.php',
        'financing' => 'financing.php',
        'services' => 'services.php',
        'admin' => 'admin.php'
    ];
    echo '<!DOCTYPE html><html lang="en"><head>';
    echo '<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />';
    echo '<title>' . vbh_h($title) . ' | Velocity Broker House</title>';
    echo '<link rel="stylesheet" href="styles.css" />';
    echo '<script defer src="app.js"></script>';
    if ($extraHead !== '') {
        echo $extraHead;
    }
    echo '</head><body>';
    echo '<div class="page-transition" aria-hidden="true"></div>';
    echo '<header class="site-header"><a class="brand" href="index.php">Velocity Broker House</a>';
    echo '<button class="menu-toggle" aria-label="Toggle navigation">☰</button><nav class="site-nav">';

    foreach ($nav as $key => $href) {
        $label = ucfirst($key === 'home' ? 'Home' : $key);
        if ($key === 'services') {
            $label = 'Service + Booking';
        }
        $class = $active === $key ? ' class="active"' : '';
        echo "<a href=\"{$href}\"{$class}>{$label}</a>";
    }

    echo '</nav></header>';

    $status = $_GET['status'] ?? '';
    if ($status === 'success') {
        echo '<div class="section-pad"><div class="card">Request received successfully.</div></div>';
    } elseif ($status === 'error') {
        echo '<div class="section-pad"><div class="card">Unable to process request. Please try again.</div></div>';
    }
}

function vbh_render_footer(): void
{
    echo '<footer class="section-pad"><p class="lede">© ' . date('Y') . ' Velocity Broker House • Shared-hosting PHP edition.</p></footer>';
    echo '</body></html>';
}
