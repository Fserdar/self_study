function sayıUret(üstLimit = 49){
    return Math.ceil(Math.random() * üstLimit)
}

for(var i = 1; i <= 8 ; i++){
    console.log("-----------")
    for(var j = 1; j<=6; j++){
        console.log(sayıUret())
    }
}

