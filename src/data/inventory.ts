export type Car = {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  color: string;
  badge?: string;
};

export const INVENTORY: Car[] = [
  {
    id: 'c1',
    year: 2022,
    make: 'Toyota',
    model: 'Camry',
    trim: 'SE',
    price: 24990,
    mileage: 18240,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    color: 'Midnight Black',
    badge: 'Certified',
  },
  {
    id: 'c2',
    year: 2021,
    make: 'Honda',
    model: 'CR-V',
    trim: 'EX-L',
    price: 27450,
    mileage: 22110,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    color: 'Platinum White',
  },
  {
    id: 'c3',
    year: 2023,
    make: 'Ford',
    model: 'F-150',
    trim: 'XLT',
    price: 39990,
    mileage: 9840,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    color: 'Iconic Silver',
    badge: 'New Arrival',
  },
  {
    id: 'c4',
    year: 2020,
    make: 'Chevrolet',
    model: 'Equinox',
    trim: 'LT',
    price: 19990,
    mileage: 41230,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    color: 'Cajun Red',
  },
  {
    id: 'c5',
    year: 2022,
    make: 'Tesla',
    model: 'Model 3',
    trim: 'Long Range',
    price: 36990,
    mileage: 15200,
    fuel: 'Electric',
    transmission: 'Automatic',
    color: 'Pearl White',
    badge: 'Certified',
  },
  {
    id: 'c6',
    year: 2019,
    make: 'Subaru',
    model: 'Outback',
    trim: 'Premium',
    price: 21490,
    mileage: 52300,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    color: 'Abyss Blue',
  },
];
