import { cars } from '../data/cars';
import CarCard from './CarCard';

export default function FeaturedCars() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl mb-4">Featured cars</h2>
      <div className="grid md:grid-cols-3 gap-4">{cars.slice(0, 3).map((car) => <CarCard key={car.id} car={car} />)}</div>
    </section>
  );
}
