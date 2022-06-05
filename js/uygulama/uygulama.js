//* Müşteri adı

var customerName = "Serdar";
var customerLastName = "Köse";

var fullName = "Serdar Köse";
var nusteriId = "1234657";

var total = 205.6;
var gender = "erkek";

var address = {
    city : "İstanbul",
    district : "ümraniye",
    body : "şerifali"
}

//* Array
var hobbies = ["sinema", "kitap", "spor"];


var order1 = Number("100");
var order2 = Number("150");

var totalOrder = order1 + order2;
console.log(totalOrder);

var order3 =  Number("100.2");
var order4 =  Number("150.5");

var totalOrder2 = order3 + order4;
console.log(totalOrder2);

var order5 =  parseInt("100.2");
var order6 =  parseInt("150.5");

var totalOrder3 = order5 + order6;
console.log(totalOrder3);

const yearOfBirth = 1986;

var yaş = new Date().getFullYear() - yearOfBirth;
console.log(yaş);

let course = "Modern Javascript Kursu";
console.log(course.length);