import express from 'express';
import db from './db.js';

const app = express();
app.use(express.json());

const allowedTypes = new Set([
  'bid_offer',
  'warranty_quote',
  'financing_application',
  'test_drive_booking',
  'service_request',
  'special_find',
  'consignment_request',
  'general_contact'
]);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.get('/api/submissions', (req, res) => {
  const type = req.query.type;
  if (type && !allowedTypes.has(type)) {
    return res.status(400).json({ error: 'invalid_type' });
  }

  const query = type
    ? 'SELECT * FROM widget_submissions WHERE widget_type = ? ORDER BY id DESC'
    : 'SELECT * FROM widget_submissions ORDER BY id DESC';
  const params = type ? [type] : [];

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: 'db_error' });
    const hydrated = rows.map((row) => ({ ...row, payload: JSON.parse(row.payload) }));
    res.json(hydrated);
  });
});

app.post('/api/submissions', (req, res) => {
  const { widgetType, name, email, phone, payload } = req.body;

  if (!widgetType || !allowedTypes.has(widgetType)) {
    return res.status(400).json({ error: 'invalid_type' });
  }
  if (!name || !email || typeof payload !== 'object' || payload === null) {
    return res.status(400).json({ error: 'invalid_payload' });
  }

  const payloadJson = JSON.stringify(payload);
  db.run(
    'INSERT INTO widget_submissions(widget_type,name,email,phone,payload) VALUES (?,?,?,?,?)',
    [widgetType, name, email, phone ?? '', payloadJson],
    function onInsert(err) {
      if (err) return res.status(500).json({ error: 'db_error' });
      return res.status(201).json({ id: this.lastID });
    }
  );
});

app.listen(8787, () => {
  console.log('API server running on http://localhost:8787');
});
