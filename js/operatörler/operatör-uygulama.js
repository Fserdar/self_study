console.log("***** UYGULAMA ******");

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40 ;

const heightCan = 1.70;
const heightAda = 1.50;

IndexAda = (kgAda) / (heightAda*heightAda)
IndexCan = (kgCan) / (heightCan*heightCan)

console.log(IndexAda.toFixed(2));
console.log(IndexCan.toFixed(2));

let adaHigherIndex = IndexAda>IndexCan;
let canHigherIndex = IndexCan>IndexAda;

console.log("Ada'nın kilo indeksi Can'ın kilo indeksinden daha büyük: "+adaHigherIndex);

console.log("Can'nın kilo indeksi Ada'nın kilo indeksinden daha büyük: "+canHigherIndex);

let AdaZayif = (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaKilolu = (IndexAda>=25) && (IndexAda<=29.9);
let AdaSisman = (IndexAda>=30) && (IndexAda<=34.9);

console.log("Ada zayıf : "+AdaZayif);
console.log("Ada'nın kilosu normal : "+AdaNormal);
console.log("Ada kilolu mu : "+AdaKilolu);
console.log("Ada şişman mı : "+AdaSisman);
