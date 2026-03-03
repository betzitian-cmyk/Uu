import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createSubmission } from '../lib/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const mutation = useMutation({
    mutationFn: () => createSubmission({ widgetType: 'general_contact', ...form, payload: { message: form.message } }),
    onSuccess: () => setForm({ name: '', email: '', phone: '', message: '' })
  });

  return (
    <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-5">
      <section className="glass p-4">
        <h1 className="text-3xl mb-3">Contact</h1>
        <p>Velocity Broker House<br />101 Auto Exchange Blvd<br />Miami, FL</p>
        <p className="mt-3">Phone: (555) 013-8801</p>
        <div className="mt-4 rounded-lg overflow-hidden border border-white/20">
          <iframe title="Map" src="https://maps.google.com/maps?q=Miami&t=&z=11&ie=UTF8&iwloc=&output=embed" className="w-full h-48" />
        </div>
      </section>
      <form className="glass p-4 grid gap-2" onSubmit={(e) => { e.preventDefault(); mutation.mutate(); }}>
        <input className="field" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="field" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required type="email" />
        <input className="field" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <textarea className="field" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
        <button className="btn-primary">{mutation.isPending ? 'Sending...' : 'Send'}</button>
      </form>
    </main>
  );
}
