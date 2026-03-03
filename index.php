<?php require_once __DIR__ . '/includes/layout.php'; vbh_render_header('Home', 'home'); ?>
<main class="section-pad">
  <section class="hero card" data-carousel>
    <article class="slide active"><h1>Auction-Style Car Brokerage</h1><p>Bid live, place offers, and have our brokers secure legal delivery.</p></article>
    <article class="slide"><h1>Special Finds + Financing</h1><p>Request rare inventory with financing options for all credit profiles.</p></article>
    <article class="slide"><h1>Warranties + Service</h1><p>Add third-party protection and schedule repairs before pickup.</p></article>
    <div class="carousel-controls"><button data-prev class="btn btn-small">Prev</button><button data-next class="btn btn-small">Next</button></div>
  </section>

  <section class="auction-strip">
    <div class="ticker">LIVE • Lot 392 $38,950 • Lot 418 $40,500 • Lot 432 $34,025</div>
  </section>

  <section class="forms-grid">
    <form class="card form" id="bid-form" action="submit.php" method="post">
      <h2>Offer & Bid Widget</h2>
      <input type="hidden" name="type" value="offer_bid">
      <input type="hidden" name="redirect" value="index.php">
      <label>Vehicle
        <select id="bid-vehicle" name="vehicle" required>
          <option value="Lot 392 - BMW X5">Lot 392 - BMW X5</option>
          <option value="Lot 418 - Mercedes C300">Lot 418 - Mercedes C300</option>
          <option value="Lot 432 - Tesla Model Y">Lot 432 - Tesla Model Y</option>
        </select>
      </label>
      <label>Type <select id="bid-type" name="bid_type"><option>Offer</option><option>Bid</option></select></label>
      <label>Amount (USD) <input id="bid-amount" type="number" name="amount" min="100" required></label>
      <label>Full Name <input type="text" name="full_name" required></label>
      <label>Email <input type="email" name="email" required></label>
      <button class="btn" type="submit">Submit</button>
      <p id="bid-status" class="result"></p>
    </form>

    <aside class="card">
      <h3>Live Bid Feed</h3>
      <ul id="live-bids">
        <li><strong>Lot 392:</strong> $38,950</li>
        <li><strong>Lot 418:</strong> $40,500</li>
        <li><strong>Lot 432:</strong> $34,025</li>
      </ul>
    </aside>
  </section>
</main>
<?php vbh_render_footer(); ?>
