import { useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createSubmission } from '../lib/api';

export default function Financing() {
  const [price, setPrice] = useState(35000);
  const [down, setDown] = useState(3000);
  const [apr, setApr] = useState(8.5);
  const [term, setTerm] = useState(72);
  const [form, setForm] = useState({ name: '', email: '', phone: '', income: '', creditBand: 'Good', employer: '' });

  const monthly = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const r = apr / 100 / 12;
    if (!r) return principal / term;
    return (principal * r) / (1 - Math.pow(1 + r, -term));
  }, [price, down, apr, term]);

  const mutation = useMutation({
    mutationFn: () =>
      createSubmission({
        widgetType: 'financing_application',
        name: form.name,
        email: form.email,
        phone: form.phone,
        payload: { price, down, apr, term, monthlyEstimate: Number(monthly.toFixed(2)), income: form.income, creditBand: form.creditBand, employer: form.employer }
      }),
    onSuccess: () => setForm({ name: '', email: '', phone: '', income: '', creditBand: 'Good', employer: '' })
  });

  return (
    <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-5">
      <section className="glass p-4">
        <h1 className="text-3xl mb-3">Financing Widget</h1>
        <div className="grid gap-2">
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="field" placeholder="Vehicle price" />
          <input type="number" value={down} onChange={(e) => setDown(Number(e.target.value))} className="field" placeholder="Down payment" />
          <input type="number" value={apr} onChange={(e) => setApr(Number(e.target.value))} className="field" placeholder="APR" />
          <input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="field" placeholder="Term (months)" />
          <p className="text-cyan-300">Estimated monthly: ${monthly.toFixed(2)}</p>
        </div>
      </section>
      <section className="glass p-4">
        <h2 className="text-2xl mb-3">Application (good/bad credit)</h2>
        <form className="grid gap-2" onSubmit={(e) => { e.preventDefault(); mutation.mutate(); }}>
          <input className="field" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input className="field" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required type="email" />
          <input className="field" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
          <input className="field" placeholder="Gross monthly income" value={form.income} onChange={(e) => setForm({ ...form, income: e.target.value })} required />
          <input className="field" placeholder="Employer" value={form.employer} onChange={(e) => setForm({ ...form, employer: e.target.value })} />
          <select className="field" value={form.creditBand} onChange={(e) => setForm({ ...form, creditBand: e.target.value })}>
            <option>Excellent</option><option>Good</option><option>Fair</option><option>Challenged</option>
          </select>
          <button className="btn-primary">{mutation.isPending ? 'Sending...' : 'Submit financing app'}</button>
        </form>
      </section>
    </main>
  );
}
