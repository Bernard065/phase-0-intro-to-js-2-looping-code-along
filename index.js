// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];
let eventType = "surprise";


function writeCards(names, eventType) {
    let namesArray = []
    
    for (let i = 0; i < names.length; i++) {
        namesArray.push(`Thank you, ${names[i]}, for the wonderful ${eventType} gift!`);
    }

    return namesArray;
}

writeCards(names, eventType);



function countDown(num) {
    let i = num;
    while (i > 0) {
        console.log(i--);
    }
    
    console.log(i);
}

countDown(10);
