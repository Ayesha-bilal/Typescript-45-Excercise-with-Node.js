//Question no 45 :Cars

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Car {
  let car: Car = { manufacturer, model };

  options.forEach(([key, value]) => {
    car[key] = value;
  });

  return car;
}

let car = createCar(
  "Toyota",
  "Corolla",
  ["color", "blue"],
  ["year", 2020],
  ["sunroof", true]
);

console.log(car);
