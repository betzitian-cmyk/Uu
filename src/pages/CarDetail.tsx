import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { cars } from '../data/cars';
import { createSubmission } from '../lib/api';

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry: '' });

  const mutation = useMutation({
    mutationFn: () => createSubmission({ widgetType: 'general_contact', name: form.name, email: form.email, phone: form.phone, payload: { inquiry: form.inquiry, vehicle: car?.name } }),
    onSuccess: () => setForm({ name: '', email: '', phone: '', inquiry: '' })
  });

  if (!car) return <main className="max-w-6xl mx-auto p-4">Car not found.</main>;

  return (
    <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-5">
      <img src={car.image} alt={car.name} className="w-full rounded glass p-2" />
      <section className="glass p-4">
        <h1 className="text-3xl">{car.name}</h1>
        <p className="text-slate-300">{car.year} • {car.transmission} • {car.horsepower} HP</p>
        <p className="text-cyan-300 text-xl font-semibold mt-2">${car.discountPrice.toLocaleString()}</p>
        <form className="mt-4 grid gap-2" onSubmit={(e) => { e.preventDefault(); mutation.mutate(); }}>
          <input className="field" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input className="field" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required type="email" />
          <input className="field" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <textarea className="field" placeholder="Inquiry" value={form.inquiry} onChange={(e) => setForm({ ...form, inquiry: e.target.value })} required />
          <button className="btn-primary">{mutation.isPending ? 'Sending...' : 'Send Inquiry'}</button>
        </form>
      </section>
    </main>
  );
}
