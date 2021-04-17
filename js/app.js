"use strict";
let score = 0;
let user1 = prompt('What is your name');
alert('Greeting ' + user1);

function question1(){
let user2 = prompt('Do you know my full name ?').toLowerCase();
if (user2 === 'yes' || user2 === 'y') {
    alert('thank you,my name is mohammad abufarweh');
    score++;
}
else {
    alert('My name is Mohammad khaled abufarweh');
}
<<<<<<< HEAD
=======
//console.log(user2)
}
function question2(){
>>>>>>> 027be980522b3a327dd39f9c375c343d91b4fd5c
let user3 = prompt('Do you like mechanical engineers').toUpperCase();
if (user3 === 'YES' || user3 === 'Y') {
    score++;
    alert('Greet ,I am mechanical engineer and I graduate from The University of Jordan');
}
else {
    alert('Oh man !!,I am mechanical engineer and I graduate from The University of Jordan');
}
<<<<<<< HEAD

=======
//console.log(user3);
}
function question3(){
>>>>>>> 027be980522b3a327dd39f9c375c343d91b4fd5c
let user4 = prompt('Do you think I have programming background?').toLowerCase();
if (user4 === 'yes' || user4 === 'y') {

    alert('Actually I dont have programming background ');
    score++;
}
else {
    alert('yes you are right ,I dont have programming background');
}
<<<<<<< HEAD

=======
//console.log(user4);
}
function question4(){
>>>>>>> 027be980522b3a327dd39f9c375c343d91b4fd5c
let user5 = prompt('Do you think I have a twin?').toLowerCase();
if (user5 === 'yes' || user5 === 'y') {
    score++;
    alert('Actually I dont have twin 😈');
}
else {
    alert('yes you are right ,I dont have ');
}
<<<<<<< HEAD

=======
//console.log(user5);
}
function question5(){
>>>>>>> 027be980522b3a327dd39f9c375c343d91b4fd5c
let user6 = prompt('Do you think I play piano').toLowerCase();
if (user6 === 'yes' || user6 === 'y') {
    score++;
    alert('yes I play on it');
}
else {
    alert('No you are not right ,I play on the piano');

}
<<<<<<< HEAD

=======
//console.log(user6);
}
function question6(){
>>>>>>> 027be980522b3a327dd39f9c375c343d91b4fd5c
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
}

<<<<<<< HEAD
let o = 2;
=======
function question7(){
>>>>>>> 027be980522b3a327dd39f9c375c343d91b4fd5c
let arr11 = ['real madrid', 'barcalona', 'liverpool', ' AC milan', ' intermilan', 'PSG']
let user13 = prompt('can you guess my favourite team?', "real madrid, barcalona, liverpool, AC milan, intermilan,PSG");
let att = 1;
while (att < 6) {
    for (let k = 0; k < 6; k++) {
        if (user13 == arr11[k]) {
            alert('you are right');
            score++;
            att = 6;
            break;
        }
    }
    for (let r = 1; r <= 6; r++) {


        if (att < 6) {
            user13 = prompt('Not correct guess again my favourite team?', "real madrid, barcalona, liverpool, AC milan, intermilan,PSG");
            att++;
            o++;
        }
        if (o == 7) {
            o++;
            alert('This is my favourite trems : real madrid, barcalona, liverpool,  AC milan,  intermilan, PSG');
        }
    }
}
<<<<<<< HEAD
alert('thank you ' + user1 + '  your score = ' + score);
=======

question1();
question2();
question3();
question4();
question5();
question6();
question7();
alert('thank you '+user1 +'  your score = ' +score);
>>>>>>> 027be980522b3a327dd39f9c375c343d91b4fd5c
