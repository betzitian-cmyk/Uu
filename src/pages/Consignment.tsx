import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createSubmission } from '../lib/api';

export default function Consignment() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dealer: '', vehicle: '', destination: '', notes: '' });
  const mutation = useMutation({
    mutationFn: () =>
      createSubmission({
        widgetType: 'consignment_request',
        name: form.name,
        email: form.email,
        phone: form.phone,
        payload: { dealer: form.dealer, vehicle: form.vehicle, destination: form.destination, notes: form.notes }
      })
  });

  return (
    <main className="max-w-6xl mx-auto p-4 space-y-6">
      <section className="glass p-6">
        <h1 className="text-3xl mb-3">Consignment Broker Service</h1>
        <p>
          We source inventory from partner dealers, transport the vehicle, run auction-platform verification, and finalize legal sale documentation before delivery.
        </p>
        <ol className="list-decimal pl-6 mt-3 text-slate-300">
          <li>Broker pickup from dealer/auction lane.</li>
          <li>Inspection + auction provenance package.</li>
          <li>Client review + secure payment and title transfer.</li>
          <li>Doorstep delivery and optional service prep.</li>
        </ol>
      </section>

      <form className="glass p-4 grid md:grid-cols-2 gap-2" onSubmit={(e) => { e.preventDefault(); mutation.mutate(); }}>
        <input className="field" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="field" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required type="email" />
        <input className="field" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className="field" placeholder="Source dealer / auction" value={form.dealer} onChange={(e) => setForm({ ...form, dealer: e.target.value })} required />
        <input className="field" placeholder="Vehicle requested" value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })} required />
        <input className="field" placeholder="Delivery destination" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} required />
        <textarea className="field md:col-span-2" placeholder="Notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        <button className="btn-primary md:col-span-2">Submit consignment request</button>
      </form>
    </main>
  );
}
