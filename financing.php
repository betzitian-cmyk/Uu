<?php require_once __DIR__ . '/includes/layout.php'; vbh_render_header('Financing', 'financing'); ?>
<main class="section-pad two-col">
<section>
<h1>Financing Widget</h1>
<form class="card form" id="finance-calc">
  <label>Vehicle Price <input type="number" id="price" value="35000" required /></label>
  <label>Down Payment <input type="number" id="down" value="3000" required /></label>
  <label>APR (%) <input type="number" id="apr" value="8.5" step="0.1" required /></label>
  <label>Term (Months) <input type="number" id="term" value="72" required /></label>
  <button class="btn" type="submit">Calculate</button><p id="payment-result" class="result">Estimated payment: --</p>
</form>
</section>
<section>
<form class="card form" action="submit.php" method="post">
  <h2>Apply in Minutes</h2>
  <input type="hidden" name="type" value="financing_application"><input type="hidden" name="redirect" value="financing.php">
  <label>Full Name <input type="text" name="full_name" required></label>
  <label>Email <input type="email" name="email" required></label>
  <label>Phone <input type="tel" name="phone" required></label>
  <label>Credit Profile <select name="credit_profile"><option>Excellent</option><option>Good</option><option>Fair</option><option>Challenged</option></select></label>
  <label>Notes <textarea name="notes"></textarea></label>
  <button class="btn" type="submit">Submit Application</button>
</form>
</section>
</main>
<?php vbh_render_footer(); ?>
