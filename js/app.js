"use strict";
let score =0;
let user1 = prompt('What is your name');
alert('Greeting ' + user1);
let user2 = prompt('Do you know my full name ?').toLowerCase();
if (user2 === 'yes' || user2 === 'y') {
    alert('thank you');
    score++;
}
else {
    alert('My name is Mohammad khaled abufarweh');
    //console.log(My name is Mohammad khaled abufarweh)
}
//console.log(user2)
let user3 = prompt('Do you like mechanical engineers').toUpperCase();
if (user3 === 'YES' || user3 === 'Y') {
    score++;
    alert('Greet ,I am mechanical engineer and I graduate from The University of Jordan');
    //console.log(Greet ,I am mechanical engineer and I graduate from The University of Jordan')
}
else {
    alert('Oh man !!,I am mechanical engineer and I graduate from The University of Jordan');
    //console.log(Oh man !!,I am mechanical engineer and I graduate from The University of Jordan')
}
//console.log(user3);

let user4 = prompt('Do you think I have programming background?').toLowerCase();
if (user4 === 'yes' || user4 === 'y') {
    
    alert('Actually I dont have programming background ');
    //console.log(Actually I dont have programming background);
}
else {
    alert('yes you are right ,I dont have programming background');
    score++;
    //console.log(yes you are right ,I dont have programming background);
}
//console.log(user4);

let user5 = prompt('Do you think I have a twin?').toLowerCase();
if (user5 === 'yes' || user5 === 'y') {
    score++;
    alert('Actually I dont have twin 😈');
    //console.log('Actually I dont have twin 😈');
}
else {
    alert('yes you are right ,I dont have ');
    //console.log('yes you are right ,I dont have ');
}
//console.log(user5);

let user6 = prompt('Do you think I play piano').toLowerCase();
if (user6 === 'yes' || user6 === 'y') {
    score++;
    alert('yes I play on it');
    //console.log('yes I play on it');
}
else {
    alert('No you are not right ,I play on the piano');
    //console.log('No you are not right ,I play on the piano');

}
//console.log(user6);

for (let i = 0; i < 4; i++) {
    let user7 = Number(prompt('How much : 10+3=?'));
    if (user7 > 13) {
        alert('too high please try again');

    }
    else if (user7 < 13) {
        alert('too low please try again');
    }
    else {
        alert('Good job');
        score++;
        i = 4
    }
}


let arr11 = ['real madrid', 'barcalona', 'liverpool', ' AC milan', ' intermilan', 'PSG']
let user13 = prompt('can you guess my favourite team?', "real madrid, barcalona, liverpool, AC milan, intermilan,PSG");
let att =0;
    console.log(user13);
    while (att<6){
    for (let k = 0; k < 6; k++) {
        if (user13 == arr11[k]) {

            alert('you are right');
            score++;
            att=7; 
            break;
        }
      
        }
        if (att<6) {
            user13 = prompt('Not correct guess again my favourite team?');
            att++;
    }
    }
alert('thank you '+user1 +'  your score = ' +score);