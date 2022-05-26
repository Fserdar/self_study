//* Değişken Tipleri

//*  Primitive Types

    //* String
    let firstName="FSK";
    console.log(typeof firstName);

    //* Number
    let age= 20;
    console.log(typeof age); 

    //* Boolean
    let isActive= false; 
    console.log(typeof isActive);

    //* Null
    let job=null;
    console.log(typeof job);
    
    //* Undefined
    let car;
    console.log(typeof car);


//* Reference Types - Objects 

//*Array 
let names = ["ali","ahmet","can"];
console.log(typeof names);

//* Objects
let address = {
    city:"İstanbul",
    country:"Türkiye"
};
console.log(typeof address);

//* Function
var calculateAge= function(){
    return 0;
} ;
console.log(typeof calculateAge);

//* Ders 4 : Tür Dönüşümü

console.log("******* Tür Dönüşümü *******");

let num1="5";
let num2="10";

console.log(typeof num1);
console.log(num1+num2);

let num_1=Number("5");
let num_2=Number("10");

let total = num_1+num_2;
console.log(total);
console.log(typeof total);

//* Number to string
val = String(10);

console.log(val);
console.log(typeof val);
console.log(val.length);

//* Date to string 
vall = new Date()

console.log(vall);
console.log(typeof vall);

//* Array to string
val = String([1,2,3,4]);

//* toString()
val =(10).toString()
val = (false).toString()

//* String to number
val = Number("10")
val = Number(true)
val = Number(false)
val = Number(null)
val = Number("a")
val = Number([1,2,3,4])

//* parseInt
//* parseFloat

val = parseInt("10");
val = parseInt("10.5");
val = parseFloat("10.5");


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
