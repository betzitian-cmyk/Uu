import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="glass hero-gradient p-8 animate-fade-in-up">
      <h1 className="font-display text-4xl mb-3">Auction-style dealer & broker platform</h1>
      <p className="text-slate-200 mb-5">Bid, offer, finance, warranty, and schedule pickup-ready service in one animated experience.</p>
      <div className="flex gap-3">
        <Link to="/cars" className="px-4 py-2 rounded bg-cyan-400 text-slate-950 font-semibold">Browse Cars</Link>
        <Link to="/financing" className="px-4 py-2 rounded border border-white/30">Apply Financing</Link>
      </div>
    </section>
  );
}
