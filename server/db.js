import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./server/velocity.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS widget_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    widget_type TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    payload TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`);

  db.get('SELECT COUNT(*) as count FROM widget_submissions', (err, row) => {
    if (!err && row.count === 0) {
      const seed = {
        vehicle: 'Veloce GT Sport',
        amount: 54500,
        request: 'Initial offer submitted from seeded sample'
      };
      db.run(
        'INSERT INTO widget_submissions(widget_type,name,email,phone,payload) VALUES (?,?,?,?,?)',
        ['bid_offer', 'Demo Buyer', 'buyer@example.com', '(555) 000-1200', JSON.stringify(seed)]
      );
    }
  });
});

export default db;
