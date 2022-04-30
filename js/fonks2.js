function sayıUret(üstLimit){
    return Math.ceil(Math.random() * üstLimit)
}
 
sayıUret()

var sayı1 = sayıUret(25)
var sayı2 = sayıUret(25)
var sayı3 = sayıUret(25)
var sayı4 = sayıUret(25)
var sayı5 = sayıUret(25)
var sayı6 = sayıUret(25)

console.log("kolon : "+ sayı1 + " "+ sayı2 + " "+ sayı3 + " "+ sayı4 + " "+ sayı5 + " "+ sayı6 )