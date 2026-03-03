import { useMemo, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import FeaturedCars from '../components/FeaturedCars';
import WhyChooseUs from '../components/WhyChooseUs';
import { createSubmission } from '../lib/api';

const slides = [
  { title: 'Live Auction Lane', subtitle: 'Bid on consignment and dealer inventory in real-time style.' },
  { title: 'Offer Desk', subtitle: 'Make offers and get instant broker response windows.' },
  { title: 'Special Find', subtitle: 'Request hard-to-find vehicles with broker sourcing.' }
];

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  vehicle: z.string().min(2),
  amount: z.coerce.number().min(500),
  type: z.enum(['Bid', 'Offer']),
  notes: z.string().min(5)
});

type BidOfferValues = z.infer<typeof schema>;

export default function Index() {
  const [index, setIndex] = useState(0);
  const slide = useMemo(() => slides[index], [index]);

  const form = useForm<BidOfferValues>({
    resolver: zodResolver(schema),
    defaultValues: { type: 'Bid' }
  });

  const mutation = useMutation({
    mutationFn: (values: BidOfferValues) =>
      createSubmission({
        widgetType: 'bid_offer',
        name: values.name,
        email: values.email,
        phone: values.phone,
        payload: { vehicle: values.vehicle, amount: values.amount, type: values.type, notes: values.notes }
      }),
    onSuccess: () => form.reset({ type: 'Bid' })
  });

  return (
    <main className="max-w-6xl mx-auto p-4 space-y-8">
      <section className="glass p-8 animate-fade-in-up">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-display text-4xl">{slide.title}</h1>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2 w-8 rounded ${i === index ? 'bg-cyan-300' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
        <p className="text-slate-200">{slide.subtitle}</p>
      </section>

      <section className="glass p-6">
        <h2 className="text-2xl mb-4">Offer & Bid Widget</h2>
        <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="grid md:grid-cols-2 gap-3">
          <input {...form.register('name')} className="field" placeholder="Full name" />
          <input {...form.register('email')} className="field" placeholder="Email" />
          <input {...form.register('phone')} className="field" placeholder="Phone" />
          <input {...form.register('vehicle')} className="field" placeholder="Vehicle (stock / model)" />
          <input type="number" {...form.register('amount')} className="field" placeholder="Bid or offer amount" />
          <select {...form.register('type')} className="field">
            <option>Bid</option><option>Offer</option>
          </select>
          <textarea {...form.register('notes')} className="field md:col-span-2" placeholder="Terms / timing / contingencies" />
          <button className="btn-primary md:col-span-2" disabled={mutation.isPending}>{mutation.isPending ? 'Submitting...' : 'Submit bid/offer'}</button>
        </form>
      </section>

      <FeaturedCars />
      <WhyChooseUs />
    </main>
  );
}
