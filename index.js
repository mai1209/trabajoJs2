const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("Las pizzas que tengan un id impar.");
console.log("----------------------------------------");

const impar = pizzas.filter((pizza) => {
  return pizza.id % 2 !== 0;
});

const nombre = impar.map((imp) => {
  return imp.nombre;
});

console.log(`las pizzas que tienen un id impar son:${nombre} `);

console.log("----------------------------------------");

console.log("b) Responder: ¿Hay alguna pizza que valga menos de $600?");
console.log("----------------------------------------");

const pizzaMenos600 = pizzas.filter((pizza) => {
  return pizza.precio < 600;
});

const menos = pizzaMenos600.map((men) => {
  return men.nombre;
});

console.log(`la pizza con precio menos a $600 es: ${menos}`);

console.log("----------------------------------------");
console.log("c) El nombre de cada pizza con su respectivo precio.");
console.log("----------------------------------------");

const nombres = pizzas.map((names) => {
  return `nombre: ${names.nombre} --- precio es: $${names.precio}`;
});

nombres.forEach((nombre) => {
  console.log(nombre);
});

console.log("----------------------------------------");
console.log("d) Todos los ingredientes de cada pizza ");
console.log("----------------------------------------");

const ingredientes = pizzas.map((pizza) => {
  return `nombre: ${pizza.nombre} --- ingredientes: ${pizza.ingredientes}`;
});

ingredientes.forEach((ingrediente) => {
  console.log(ingrediente);
});


