<?php require_once __DIR__ . '/includes/layout.php';
$plans = vbh_warranty_plans();
vbh_render_header('Warranties', 'warranties'); ?>
<main class="section-pad">
  <h1>Warranty Pricing</h1>
  <div class="pricing-grid">
    <?php foreach ($plans as $plan):
      $features = array_filter(array_map('trim', explode('|', (string) $plan['features'])));
      $featured = (int) $plan['is_featured'] === 1 ? ' featured' : '';
    ?>
    <article class="card pricing<?php echo $featured; ?>">
      <h3><?php echo vbh_h((string) $plan['plan_name']); ?></h3>
      <p class="price">$<?php echo number_format((float) $plan['monthly_price'], 0); ?>/mo</p>
      <ul><?php foreach ($features as $feature): ?><li><?php echo vbh_h($feature); ?></li><?php endforeach; ?></ul>
    </article>
    <?php endforeach; ?>
  </div>
  <form class="card form" action="submit.php" method="post">
    <h2>Request Warranty Quote</h2>
    <input type="hidden" name="type" value="warranty_quote"><input type="hidden" name="redirect" value="warranties.php">
    <label>Name <input type="text" name="name" required></label>
    <label>Email <input type="email" name="email" required></label>
    <label>Vehicle <input type="text" name="vehicle" required></label>
    <label>Mileage <input type="number" name="mileage" required></label>
    <button class="btn" type="submit">Get Quote</button>
  </form>
</main>
<?php vbh_render_footer(); ?>
