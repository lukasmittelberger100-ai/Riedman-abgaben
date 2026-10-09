interface Car {
  brand: string;
  model: string;
  price: number;
  year: number;
}

const cars: Car[] = [
  { brand: "Tesla", model: "Model 3", price: 42000, year: 2024 },
  { brand: "BMW", model: "320i", price: 39000, year: 2022 },
  { brand: "Audi", model: "A4", price: 35000, year: 2021 },
  { brand: "Mercedes", model: "C-Class", price: 47500, year: 2023 },
  { brand: "Volkswagen", model: "Golf", price: 28000, year: 2020 }
];

// 1) mit forEach
function getTotalPriceForEach(cars: Car[]): number {
  let total = 0;

  cars.forEach((car) => {
    total += car.price;
  });

  return total;
}

function printCarsForEach(cars: Car[]): void {
  cars.forEach((car, index) => {
    console.log(`${index + 1}. ${car.brand} ${car.model} (${car.year}) - ${car.price} €`);
  });
}

function getExpensiveCarsForEach(cars: Car[], minPrice: number): Car[] {
  const expensiveCars: Car[] = [];

  cars.forEach((car) => {
    if (car.price > minPrice) {
      expensiveCars.push(car);
    }
  });

  return expensiveCars;
}

// 2) mit Array-Funktionen
function getTotalPriceWithReduce(cars: Car[]): number {
  return cars.reduce((sum, car) => sum + car.price, 0);
}

function getExpensiveCarsWithFilter(cars: Car[], minPrice: number): Car[] {
  return cars.filter((car) => car.price > minPrice);
}

console.log("Gesamtpreis mit forEach:", getTotalPriceForEach(cars));
console.log("Autos:");
printCarsForEach(cars);

console.log("Teure Autos (forEach):", getExpensiveCarsForEach(cars, 40000));
console.log("Teure Autos (filter):", getExpensiveCarsWithFilter(cars, 40000));
console.log("Gesamtpreis mit reduce:", getTotalPriceWithReduce(cars));
