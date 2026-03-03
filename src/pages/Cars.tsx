import { useMemo, useState } from 'react';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';

export default function Cars() {
  const [brand, setBrand] = useState('All');
  const [fuel, setFuel] = useState('All');
  const [bodyType, setBodyType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(70000);

  const filtered = useMemo(
    () =>
      cars.filter(
        (car) =>
          (brand === 'All' || car.brand === brand) &&
          (fuel === 'All' || car.fuel === fuel) &&
          (bodyType === 'All' || car.bodyType === bodyType) &&
          car.discountPrice <= maxPrice
      ),
    [brand, fuel, bodyType, maxPrice]
  );

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl mb-4">Dealer Inventory</h1>
      <section className="glass p-4 grid md:grid-cols-4 gap-2 mb-4">
        <select className="field" value={brand} onChange={(e) => setBrand(e.target.value)}><option>All</option>{[...new Set(cars.map((c) => c.brand))].map((b) => <option key={b}>{b}</option>)}</select>
        <select className="field" value={fuel} onChange={(e) => setFuel(e.target.value)}><option>All</option>{[...new Set(cars.map((c) => c.fuel))].map((b) => <option key={b}>{b}</option>)}</select>
        <select className="field" value={bodyType} onChange={(e) => setBodyType(e.target.value)}><option>All</option>{[...new Set(cars.map((c) => c.bodyType))].map((b) => <option key={b}>{b}</option>)}</select>
        <input className="field" type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
      </section>
      <div className="grid md:grid-cols-3 gap-4">{filtered.map((car) => <CarCard key={car.id} car={car} />)}</div>
    </main>
  );
}
