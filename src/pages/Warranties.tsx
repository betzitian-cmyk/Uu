import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createSubmission } from '../lib/api';

const plans = [
  { name: 'Powertrain Plus', monthly: 89, coverage: 'Engine, transmission, drive axle' },
  { name: 'Comprehensive', monthly: 129, coverage: 'Electrical, AC, fuel, steering + powertrain' },
  { name: 'Exclusionary', monthly: 179, coverage: 'Near bumper-to-bumper stated coverage' }
];

export default function Warranties() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', plan: plans[0].name, vehicle: '' });
  const mutation = useMutation({
    mutationFn: () => createSubmission({ widgetType: 'warranty_quote', name: form.name, email: form.email, phone: form.phone, payload: { plan: form.plan, vehicle: form.vehicle } }),
    onSuccess: () => setForm({ name: '', email: '', phone: '', plan: plans[0].name, vehicle: '' })
  });

  return (
    <main className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl">Warranty Pricing (CarShield resale style)</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((p) => <article key={p.name} className="glass p-4"><h2 className="text-xl">{p.name}</h2><p className="text-cyan-300 text-2xl">${p.monthly}/mo</p><p>{p.coverage}</p></article>)}
      </div>
      <form className="glass p-4 grid md:grid-cols-2 gap-2" onSubmit={(e) => { e.preventDefault(); mutation.mutate(); }}>
        <input className="field" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="field" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="field" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className="field" placeholder="Vehicle" value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })} required />
        <select className="field md:col-span-2" value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })}>{plans.map((p) => <option key={p.name}>{p.name}</option>)}</select>
        <button className="btn-primary md:col-span-2">{mutation.isPending ? 'Requesting...' : 'Request warranty quote'}</button>
      </form>
    </main>
  );
}
