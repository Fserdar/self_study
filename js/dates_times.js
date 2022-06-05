console.log("*** Dates & Times ***");

// ----------------------------------------

let d = new Date();
let birthday = new Date(1996,9,8);

// * Set Method  /* var olan bilgileri istediğimiz veriyle değiştirme metodu */

d.setFullYear(2020);
d.setMonth(9);
d.setDate(2);
d.setHours(10);




// * Get Method

console.log(d.getDate());
console.log(d.getDay());   /* pazar günleri 0'dır */
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getSeconds());

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);

// * şimdiki tarih gün / ay / yıl

console.log(new Date());
console.log(new Date().getMonth());

var dtA = new Date("8/24/2010 14:50:55");
var dtB = new Date(2010,7,24,14,50,10)  /* sırayla yıldan saliseye */
 
console.log(dtA);
console.log(dtB);

// * 1/1/1990 tarihinden 1 gün öncesini yazdır.

var dtC = new Date("1/1/1990");
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);

console.log(dtC);

// * iki tarih arasında geçen süre heasplama

var start = new Date("1/1/1990");
var end = new Date("1/1/1991");

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60
var gun = saat / 24;



console.log("milisecond:",milisecond);
console.log("saniye : ",saniye);
console.log("Dakika : ",dakika);
console.log("Saat : ", saat);


// * yaş hesaplama

var birthdayN  = new Date(8,1,1985);
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate);


// console.log(birthdayN.getTime());

// console.log(Date.now());


// * yeni ve zor bir soru

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setDate(1);
annelerGunu.setMonth(4)
annelerGunu.setFullYear(2022);

console.log(annelerGunu.getDay());

while (annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}

annelerGunu.setDate(annelerGunu.getDate()+7)

console.log(annelerGunu);