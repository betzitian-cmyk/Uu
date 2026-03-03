<?php require_once __DIR__ . '/includes/layout.php'; vbh_render_header('Services', 'services'); ?>
<main class="section-pad">
  <h1>Booking & Request Center</h1>
  <div class="forms-grid">
    <form class="card form" action="submit.php" method="post">
      <h2>Book Test Drive</h2>
      <input type="hidden" name="type" value="test_drive_booking"><input type="hidden" name="redirect" value="services.php">
      <label>Name <input type="text" name="name" required></label><label>Vehicle <input type="text" name="vehicle" required></label>
      <label>Date <input type="date" name="date" required></label><label>Time <input type="time" name="time" required></label>
      <button class="btn" type="submit">Book</button>
    </form>
    <form class="card form" action="submit.php" method="post">
      <h2>Special Vehicle Finder</h2>
      <input type="hidden" name="type" value="special_vehicle_request"><input type="hidden" name="redirect" value="services.php">
      <label>Make/Model <input type="text" name="make_model" required></label><label>Year Range <input type="text" name="year_range" required></label>
      <label>Budget <input type="number" name="budget" required></label><label>Features <textarea name="features" required></textarea></label>
      <button class="btn" type="submit">Send Request</button>
    </form>
    <form class="card form" action="submit.php" method="post">
      <h2>Repairs / Oil Change / Tune-Up</h2>
      <input type="hidden" name="type" value="service_request"><input type="hidden" name="redirect" value="services.php">
      <label>VIN <input type="text" name="vin"></label>
      <label>Service Type <select name="service_type"><option>Oil Change</option><option>Tune-Up</option><option>Brake Service</option><option>Diagnostic / Repair</option><option>Pre-Pickup Inspection</option></select></label>
      <label>Preferred Date <input type="date" name="preferred_date" required></label>
      <label>Notes <textarea name="notes"></textarea></label>
      <button class="btn" type="submit">Submit Service Request</button>
    </form>
  </div>
</main>
<?php vbh_render_footer(); ?>
