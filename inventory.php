<?php
require_once __DIR__ . '/includes/layout.php';

$inventoryWidgetHead = <<<'HTML'
<script type="text/javascript">
at3_widget_where='same'; // gWhere to open results - can be 'new' or 'same' for new window or not
at3_widget_args = {};
at3_widget_args['placementId'] = 'advwidg';
at3_widget_args['loadPrev'] = '0';
at3_widget_args['radius']='300';
at3_widget_args['zip']='';
at3_widget_args['minyear']='';
at3_widget_args['maxyear']='';
at3_widget_args['make']='';
at3_widget_args['make_kw']='';
at3_widget_args['model']='';
at3_widget_args['model_kw']='';
at3_widget_args['version'] = '1.1';
at3_widget_args['maxWidth'] = '80%';
at3_widget_args['optionsButton'] = '1';
at3_widget_args['keywords']='';
at3_widget_args['trim_kw']='';
at3_widget_args['minprice']='';
at3_widget_args['maxprice']='';
at3_widget_args['minmiles']='';
at3_widget_args['maxmiles']='';
at3_widget_args['bodystyle']='any';
at3_widget_args['transmission']='any';
at3_widget_args['saleby']='any';
</script>
HTML;

$vehicles = vbh_inventory();
vbh_render_header('Inventory', 'inventory', $inventoryWidgetHead);
?>
<main class="section-pad">
  <h1>Partner Dealer Inventory</h1>
  <p class="lede">Browse partner inventory and jump directly into bidding from the homepage widget.</p>

  <section class="card">
    <h2>Search Nationwide Inventory</h2>
    <p class="lede">Use the integrated AutoTempest search widget to find additional inventory across dealers and private listings.</p>
    <script type="text/javascript" src="//widget.autotempest.com/at3_widget.js"></script>
  </section>

  <div class="inventory-grid">
    <?php foreach ($vehicles as $vehicle): ?>
      <article class="card vehicle-card">
        <h3><?php echo vbh_h((string) $vehicle['title']); ?></h3>
        <p>$<?php echo number_format((float) $vehicle['price'], 0); ?> • <?php echo number_format((int) $vehicle['mileage']); ?> mi</p>
        <small><?php echo vbh_h((string) $vehicle['source_dealer']); ?></small>
      </article>
    <?php endforeach; ?>
  </div>
</main>
<?php vbh_render_footer(); ?>
