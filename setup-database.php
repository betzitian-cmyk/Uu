<?php
require_once __DIR__ . '/includes/layout.php';

$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pdo = vbh_db();
    if (!$pdo) {
        $message = 'Database connection failed. Check VBH_DB_* environment settings.';
    } else {
        $schema = file_get_contents(__DIR__ . '/db_schema.sql') ?: '';
        $schema = preg_replace('/^\s*--.*$/m', '', $schema);
        $statements = array_filter(array_map('trim', explode(';', $schema)));
        $ok = true;
        foreach ($statements as $sql) {
            if ($sql === '') {
                continue;
            }
            try {
                $pdo->exec($sql);
            } catch (Throwable $e) {
                $ok = false;
                $message = 'Database setup stopped: ' . $e->getMessage();
                break;
            }
        }
        if ($ok) {
            $message = 'Database schema loaded successfully.';
        }
    }
}

vbh_render_header('Database Setup', 'admin');
?>
<main class="section-pad">
  <h1>Database Setup</h1>
  <p class="lede">This utility runs <code>db_schema.sql</code> against your configured MySQL database.</p>
  <?php if ($message): ?><div class="card"><?php echo vbh_h($message); ?></div><?php endif; ?>
  <form method="post" class="card form">
    <button class="btn" type="submit">Run DB Setup</button>
  </form>
</main>
<?php vbh_render_footer(); ?>
