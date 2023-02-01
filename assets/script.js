const noodles = [ 
    'Fettucine', 'Angel Hair', 'Spaghetti', 
    'Conchiglie', 'Macaroni', 'Penne', 'Rigatoni',
];

let randomNoodle = noodles[Math.floor(Math.random() * noodles.length)];

console.log(randomNoodle);

const sauces = [
    'Alfredo', 'Bolognese', 'Carbonara', 'Marinara', 
    'Pomodoro', 'Pesto',
];

let randomSauce = sauces[Math.floor(Math.random() * sauces.length)];

console.log(randomSauce);

const meats = [
    'Ground beef', 'Beef meatballs', 'Ground turkey',
    'Ground meatballs', 'Bacon', 'Cut sausage',
];

let randomMeat = meats[Math.floor(Math.random() * meats.length)];

console.log(randomMeat)

const vegetables = [
    'Broccoli', 'Bell pepper', 'Zucchini',
    'Tomatoes', 'Garlic',
];

let randomVegetable = vegetables[Math.floor(Math.random() * vegetables.length)];

console.log(randomVegetable);

// Make an array from random ingredients

let randomIngredients = [ randomNoodle, randomSauce, randomMeat, randomVegetable, ];

document.getElementById('resultNoodle').innerHTML = randomIngredients[0];
document.getElementById('resultSauce').innerHTML = randomIngredients[1];
document.getElementById('resultMeat').innerHTML = randomIngredients[2];
document.getElementById('resultVegetable').innerHTML = randomIngredients[3];