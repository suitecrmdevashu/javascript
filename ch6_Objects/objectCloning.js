const car = { type: "Fiat", model: "500", color: "white" };
let newcar = Object.assign({},car);
console.log(newcar);

let carType = {};

for(let key in car){
  console.log(key,car[key]);
  carType[key] = car[key];
}
console.log(carType);