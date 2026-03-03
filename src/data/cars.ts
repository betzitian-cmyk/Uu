export interface Car {
  id: string;
  name: string;
  brand: string;
  fuel: string;
  bodyType: string;
  year: number;
  price: number;
  discountPrice: number;
  mileage: number;
  horsepower: number;
  transmission: string;
  image: string;
}

export const cars: Car[] = [
  { id: '1', name: 'Veloce GT Sport', brand: 'Veloce', fuel: 'Gasoline', bodyType: 'Coupe', year: 2024, price: 58900, discountPrice: 55900, mileage: 8200, horsepower: 410, transmission: '8-Speed Auto', image: '/src/assets/car-1.svg' },
  { id: '2', name: 'Nordic Explorer XC', brand: 'Nordic', fuel: 'Hybrid', bodyType: 'SUV', year: 2023, price: 46900, discountPrice: 43900, mileage: 17200, horsepower: 305, transmission: 'AWD Auto', image: '/src/assets/car-2.svg' },
  { id: '3', name: 'Nexus EV Prestige', brand: 'Nexus', fuel: 'Electric', bodyType: 'Sedan', year: 2024, price: 51900, discountPrice: 48990, mileage: 9100, horsepower: 360, transmission: 'Single-Speed', image: '/src/assets/car-3.svg' },
  { id: '4', name: 'Aero City Pulse', brand: 'Aero', fuel: 'Gasoline', bodyType: 'Hatchback', year: 2022, price: 29900, discountPrice: 27400, mileage: 26300, horsepower: 198, transmission: 'CVT', image: '/src/assets/car-4.svg' },
  { id: '5', name: 'Titan Workhorse Pro', brand: 'Titan', fuel: 'Diesel', bodyType: 'Truck', year: 2023, price: 54900, discountPrice: 52400, mileage: 14300, horsepower: 425, transmission: '10-Speed Auto', image: '/src/assets/car-5.svg' },
  { id: '6', name: 'Verde Crossover Eco', brand: 'Verde', fuel: 'Hybrid', bodyType: 'Crossover', year: 2024, price: 38900, discountPrice: 36200, mileage: 7700, horsepower: 245, transmission: 'e-CVT', image: '/src/assets/car-6.svg' }
];
