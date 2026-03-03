<?php require_once __DIR__ . '/includes/layout.php';
$steps = vbh_consignment_steps();
vbh_render_header('Consignment', 'consignment'); ?>
<main class="section-pad">
  <h1>Consignment + Broker Delivery</h1>
  <p class="lede">We source from dealers/auction, verify title + condition, and execute legal documents for compliant delivery.</p>
  <div class="timeline">
    <?php foreach ($steps as $step): ?>
    <article class="card"><h3><?php echo (int) $step['step_order']; ?>. <?php echo vbh_h((string) $step['title']); ?></h3><p><?php echo vbh_h((string) $step['description']); ?></p></article>
    <?php endforeach; ?>
  </div>
  <form class="card form" action="submit.php" method="post">
    <h2>Request Consignment Service</h2>
    <input type="hidden" name="type" value="consignment_request"><input type="hidden" name="redirect" value="consignment.php">
    <label>Name <input type="text" name="name" required></label><label>Email <input type="email" name="email" required></label>
    <label>Target Vehicle <input type="text" name="target_vehicle" required></label><label>Pickup Location <input type="text" name="pickup_location" required></label>
    <label>Notes <textarea name="notes"></textarea></label>
    <button class="btn" type="submit">Submit Consignment Request</button>
  </form>
</main>
<?php vbh_render_footer(); ?>
