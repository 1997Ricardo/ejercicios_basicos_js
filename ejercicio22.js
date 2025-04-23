const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let frutaActual = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if(!foodSchedule[i].isVegan && frutaActual < fruits.length) {
        foodSchedule[i].name = fruits[frutaActual];
        foodSchedule[i].isVegan = true;
        frutaActual++;
    }
    
}
console.log("Plan de comidas final:", foodSchedule);
