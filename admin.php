<?php
require_once __DIR__ . '/includes/layout.php';
$submissions = vbh_read_submissions();
$dbConnected = vbh_db() !== null;
vbh_render_header('Admin', 'admin');
?>
<main class="section-pad">
  <h1>Admin: Widget Submissions</h1>
  <p class="lede">Storage mode: <?php echo $dbConnected ? 'MySQL database' : 'JSON fallback'; ?>.</p>
  <p><a class="btn btn-outline" href="setup-database.php">Open Database Setup</a></p>
  <p class="lede">Total submissions: <?php echo count($submissions); ?></p>
  <div class="timeline">
  <?php foreach ($submissions as $sub): ?>
    <article class="card">
      <h3><?php echo vbh_h($sub['type']); ?></h3>
      <p><strong>Submitted:</strong> <?php echo vbh_h($sub['created_at']); ?></p>
      <p><strong>IP:</strong> <?php echo vbh_h($sub['ip']); ?></p>
      <pre><?php echo vbh_h(json_encode($sub['payload'], JSON_PRETTY_PRINT)); ?></pre>
    </article>
  <?php endforeach; ?>
  <?php if (!$submissions): ?><p>No submissions yet.</p><?php endif; ?>
  </div>
</main>
<?php vbh_render_footer(); ?>
