# Velocity Broker House (PHP Shared Hosting Edition)

This version is ready for classic shared hosting (Apache + PHP + MySQL) with no Node.js runtime required.

## Pages
- `index.php` — Auction carousel hero + Offer/Bid widget
- `inventory.php` — Inventory listings + AutoTempest widget
- `warranties.php` — Warranty pricing + quote widget
- `financing.php` — Payment calculator + financing application widget
- `services.php` — Test drive booking + special finder + repair request widgets
- `consignment.php` — Consignment process + request widget
- `admin.php` — Admin viewer for all widget submissions
- `setup-database.php` — One-click schema loader for shared hosting

## Full database schema
- File: `db_schema.sql`
- Includes tables for:
  - Page data: `inventory_vehicles`, `warranty_plans`, `consignment_steps`
  - Unified submissions: `widget_submissions`
  - Per-widget detail tables: `offer_bids`, `warranty_quotes`, `financing_applications`, `test_drive_bookings`, `special_vehicle_requests`, `service_requests`, `consignment_requests`

## Database connection configuration
Set environment variables in hosting panel (`.htaccess`, Apache vhost, or panel env settings):
- `VBH_DB_ENABLED` (default `1`)
- `VBH_DB_HOST`
- `VBH_DB_PORT`
- `VBH_DB_NAME`
- `VBH_DB_USER`
- `VBH_DB_PASS`

If DB is unavailable, submissions fallback to `data/submissions.json`.

## Deploy on shared hosting
1. Upload all files/folders to your `public_html` (or site root).
2. Create MySQL DB/user in your hosting panel and grant privileges.
3. Configure `VBH_DB_*` environment variables.
4. Visit `setup-database.php` and run schema setup (or import `db_schema.sql` manually in phpMyAdmin).
5. Open `index.php` in browser.

## Optional Apache default
If your host does not default to `index.php`, add `.htaccess`:

```apache
DirectoryIndex index.php
```
