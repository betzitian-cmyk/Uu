import { Link } from 'react-router-dom';
import { Car } from '../data/cars';

export default function CarCard({ car }: { car: Car }) {
  return (
    <article className="glass p-4 animate-fade-in-up">
      <img src={car.image} alt={car.name} className="w-full h-44 object-cover rounded" />
      <h3 className="mt-3 font-semibold">{car.name}</h3>
      <p className="text-slate-300 text-sm">{car.year} • {car.bodyType} • {car.fuel}</p>
      <p className="text-cyan-300 font-semibold">${car.discountPrice.toLocaleString()} <span className="text-slate-400 line-through text-xs">${car.price.toLocaleString()}</span></p>
      <Link className="mt-2 inline-block text-sm underline" to={`/cars/${car.id}`}>View details</Link>
    </article>
  );
}
