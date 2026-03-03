import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createSubmission } from '../lib/api';

export default function Services() {
  const [booking, setBooking] = useState({ name: '', email: '', phone: '', vehicle: '', date: '', location: 'Main Showroom' });
  const [service, setService] = useState({ name: '', email: '', phone: '', vehicle: '', serviceType: 'Oil change', notes: '' });
  const [finder, setFinder] = useState({ name: '', email: '', phone: '', target: '', budget: '', notes: '' });

  const bookingMutation = useMutation({ mutationFn: () => createSubmission({ widgetType: 'test_drive_booking', ...booking, payload: { vehicle: booking.vehicle, date: booking.date, location: booking.location } }) });
  const serviceMutation = useMutation({ mutationFn: () => createSubmission({ widgetType: 'service_request', ...service, payload: { vehicle: service.vehicle, serviceType: service.serviceType, notes: service.notes } }) });
  const findMutation = useMutation({ mutationFn: () => createSubmission({ widgetType: 'special_find', ...finder, payload: { target: finder.target, budget: finder.budget, notes: finder.notes } }) });

  return (
    <main className="max-w-6xl mx-auto p-4 grid lg:grid-cols-3 gap-4">
      <form className="glass p-4 grid gap-2" onSubmit={(e) => { e.preventDefault(); bookingMutation.mutate(); }}>
        <h2 className="text-xl">Booking Widget (Test Drive)</h2>
        <input className="field" placeholder="Name" value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} required />
        <input className="field" placeholder="Email" value={booking.email} onChange={(e) => setBooking({ ...booking, email: e.target.value })} required type="email" />
        <input className="field" placeholder="Phone" value={booking.phone} onChange={(e) => setBooking({ ...booking, phone: e.target.value })} />
        <input className="field" placeholder="Vehicle" value={booking.vehicle} onChange={(e) => setBooking({ ...booking, vehicle: e.target.value })} required />
        <input className="field" type="datetime-local" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} required />
        <button className="btn-primary">Book drive</button>
      </form>

      <form className="glass p-4 grid gap-2" onSubmit={(e) => { e.preventDefault(); serviceMutation.mutate(); }}>
        <h2 className="text-xl">Repairs / Oil Change Widget</h2>
        <input className="field" placeholder="Name" value={service.name} onChange={(e) => setService({ ...service, name: e.target.value })} required />
        <input className="field" placeholder="Email" value={service.email} onChange={(e) => setService({ ...service, email: e.target.value })} required type="email" />
        <input className="field" placeholder="Phone" value={service.phone} onChange={(e) => setService({ ...service, phone: e.target.value })} />
        <input className="field" placeholder="Vehicle" value={service.vehicle} onChange={(e) => setService({ ...service, vehicle: e.target.value })} required />
        <select className="field" value={service.serviceType} onChange={(e) => setService({ ...service, serviceType: e.target.value })}><option>Oil change</option><option>Tune-up</option><option>Brake service</option><option>Repair diagnosis</option></select>
        <textarea className="field" placeholder="Request details" value={service.notes} onChange={(e) => setService({ ...service, notes: e.target.value })} />
        <button className="btn-primary">Request service</button>
      </form>

      <form className="glass p-4 grid gap-2" onSubmit={(e) => { e.preventDefault(); findMutation.mutate(); }}>
        <h2 className="text-xl">Special Vehicle Finder</h2>
        <input className="field" placeholder="Name" value={finder.name} onChange={(e) => setFinder({ ...finder, name: e.target.value })} required />
        <input className="field" placeholder="Email" value={finder.email} onChange={(e) => setFinder({ ...finder, email: e.target.value })} required type="email" />
        <input className="field" placeholder="Phone" value={finder.phone} onChange={(e) => setFinder({ ...finder, phone: e.target.value })} />
        <input className="field" placeholder="Desired vehicle" value={finder.target} onChange={(e) => setFinder({ ...finder, target: e.target.value })} required />
        <input className="field" placeholder="Budget" value={finder.budget} onChange={(e) => setFinder({ ...finder, budget: e.target.value })} />
        <textarea className="field" placeholder="Must-have options" value={finder.notes} onChange={(e) => setFinder({ ...finder, notes: e.target.value })} />
        <button className="btn-primary">Start search</button>
      </form>
    </main>
  );
}
