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


//  Las pizzas que tengan un id impar.



const impar = pizzas.filter ((pizza) =>{
  return pizza.id %2 !==0
})



const nombre =impar.map((imp) =>{
  return imp.nombre  
})

//console.log(`las pizzas que tienen un id impar son:${nombre} `)

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

const  pizzaMenos600 = pizzas.filter ((pizza) =>{
  return pizza.precio < 600
})

const menos= pizzaMenos600.map((men) =>{
  return men.nombre  
})



//console.log(`la pizza con precio menos a $600 es: ${menos}`)

//c) El nombre de cada pizza con su respectivo precio.

const nombres = pizzas.map((names) =>{
  return (`nombre: ${names.nombre} --- precio es: $${names.precio}`)
})

//console.log(nombres)

//d) Todos los ingredientes de cada pizza 

const ingredientes = pizzas.map((pizza) =>{
  return (`nombre: ${pizza.nombre} --- ingredientes: ${pizza.ingredientes}`)
})


//console.log(ingredientes)