//* Operatörler

let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3; 




//* 1- Aritmetik Operatörler
val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
val = --d;
val = d--;

console.log(c);

//* 2- Atama Operatörleri
val += a;
val -= a;
val *= a;
val /= a;
val %= a;

//* 3- Karşılaştırma Operatörleri

val = a == b;
val = b == c;
val = a === b;
val = 5 == "5";  /* true */
val = 5 === "5"; /* false, çünkü dğerleri aynı değil */
val = a>b ;

//* 4- Mantıksal Operatörler 

    //* && ( and )
    // true && true => true
    // true && false => false
    // false && false => false
    
    val = (a>b) && (a>c)
    val = (a>b) || (a>c)
    val = !(a>b)
    
    //* || ( or ) 
    // true || true => true
    // true || false => true
    // false || false => false

    //* ! ( not ) 
    // !true => false
    // !false => true

console.log(val);
console.log(typeof val);