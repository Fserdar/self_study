// alert("Merhaba");

console.log("Merhaba");
console.log(1234);
console.log(true);
console.log([1,2,3]);
console.error("hata");
console.warn("bir uyarı oluştu");

//* tek satırlık yorum

/*
yorum satırları
yorum satırları
yorum satırları
*/ 

console.clear();


//* Değişkenler

var age;
console.log(age);

age=20;
console.log(age);

var fullname="FSK";
console.log(fullname);

fullname="F.S.K.";
console.log(fullname);

// * Değişken tanımlama kuralları

//* Sayısal ifade ile başlayamaz

var yas1;
var _yas2;
var $yas3;

//* Komut isimleriyle tanımlama yapılamaz.
//* Birden fazla kelime

var ad="F.Serdar";
var soyad="Köse";
var ad_soyad="F.Serdar Köse";
var adSoyad="F.Serdar Köse";

//* Case sensitive dir 

var firstName="F.Serdar";
var FirstName="Köse";

console.log(firstName);
console.log(FirstName);

//* var, let, const 

let city="kocaeli"
console.log(city);

const email="abc@gmail.com";

console.log(email);

email="bcd@gmail.com"
console.log(email);
// *  const ile verilen bir değer sonrasında başka bir değişkenle değiştirilemez. bu denenirse hata verir.


