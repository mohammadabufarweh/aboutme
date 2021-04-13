"use strict";
let user1 = prompt('What is your name');
alert('Greeting ' + user1);
let user2 = prompt('Do you know my full name ?').toLowerCase();
if(user2==='yes'||user2==='y'){
    prompt('So,whats my name ?');
}
else{
    alert('My name is Mohammad khaled abufarweh');
    //console.log(My name is Mohammad khaled abufarweh)
}
//console.log(user2)
let user3 = prompt('Do you like mechanical engineers').toUpperCase();
if(user3==='YES'||user3==='Y'){
alert('Greet ,I am mechanical engineer and I graduate from The University of Jordan');
 //console.log(Greet ,I am mechanical engineer and I graduate from The University of Jordan')
}
else{
    alert('Oh man !!,I am mechanical engineer and I graduate from The University of Jordan');
     //console.log(Oh man !!,I am mechanical engineer and I graduate from The University of Jordan')
}
//console.log(user3);

let user4 = prompt('Do you think I have programming background?').toLowerCase();
if(user4==='yes'||user4==='y'){
alert('Actually I dont have programming background ');
//console.log(Actually I dont have programming background);
}
else{
    alert('yes you are right ,I dont have programming background');
    //console.log(yes you are right ,I dont have programming background);
}
//console.log(user4);

let user5 = prompt('Do you think I have a twin?').toLowerCase();
if(user5==='yes'||user5==='y'){
alert('Actually I dont have twin 😈');
//console.log('Actually I dont have twin 😈');
}
else{
    alert('yes you are right ,I dont have ');
    //console.log('yes you are right ,I dont have ');
}
//console.log(user5);

let user6 = prompt('Do you think I play piano').toLowerCase();
if(user6==='yes'||user6==='y'){
alert('yes I play on it');
//console.log('yes I play on it');
}
else{
    alert('No you are not right ,I play on the piano');
    //console.log('No you are not right ,I play on the piano');

}
//console.log(user6);

//for(let j=0,j <1,j++){
    for(let i=0;i<4;i++){
        let user7 = prompt('How much : 10+3=?');
        if(user7>'13'){
            alert('too high please try again');
             
        }
        else if (user7<'13'){
            alert('too low please try again');
        }
        else{
            alert('Good job');
            let result1=10
            i=4
        }
    }
 
for(let i=0;i<4;i++){
    let user8 = prompt('How much : 10+233=?');
    if(user8>'243'){
        alert('too high please try again');
         
    }
    else if (user8<'243'){
        alert('too low please try again');
    }
    else{
        alert('Good job');
        let result2=10
        i=4
    }
}

for(let i=0;i<4;i++){
    let user9 = prompt('How much : 50*50=?');
    if(user9>'2500'){
        alert('too high please try again');
         
    }
    else if (user9<'2500'){
        alert('too low please try again');
    }
    else{
        alert('Good job');
        let result3=10
        i=4
    }
}

    for( let i=0;i<4;i++){
        let user10 = prompt('How much : 60+40=?');
        if(user10 >'100'){
            alert('too high please try again');
             
        }
        else if (user10 <'100'){
            alert('too low please try again');
        }
        else{
            alert('Good job');
            let result4=10
            i=4
        }
    }
 
for(let i=0;i<4;i++){
    let user11 = prompt('How much : 20/20=?');
    if(user11>'1'){
        alert('too high please try again');
         
    }
    else if (user11<'1'){
        alert('too low please try again');
    }
    else{
        alert('Good job');
        let result5=10
        i=4
    }
}
for(let i=0;i<4;i++){
    let user12 = prompt('How much : 150/5=?');
    if(user12>'3'){
        alert('too high please try again');
         
    }
    else if (user12<'3'){
        alert('too low please try again');
    }
    else{
        alert('Good job');
        let result6=10
        i=4
    }
}
//}

//let resultsum= (result1+result2+result3+result4+result5+result6)
//document.write(resultsum);
//alert('Final Rusult is :' + resultsum+ ' /60');

for(let i=0;i<6;i++){
    let user13 = prompt('How much : 200+1=?');
    let arr1 = [user13];
    if(user13!='201'){
        document.write(arr1);
   }
    else{
       let result7=10;
       i=6;
       let arr1 =[user13]
       document.write(arr1);
      alert(arr1); 
    }
}
for(let i=0;i<6;i++){
    let user14 = prompt('How much : 20+20=?');
    let arr2 = [user14];
    if(user14!='40'){
        document.write(arr2);
   }
    else{
       let result8=10;
       i=6;
       let arr2 =[user14]
       document.write(arr2);
      alert(arr2); 
    }
}
for(let i=0;i<6;i++){
    let user15 = prompt('How much : 3*3=?');
    let arr3= [user15];
    if(user15!='9'){
        document.write(arr3);
   }
    else{
       let result8=10;
       i=6;
       let arr3 =[user15]
       document.write(arr3);
      alert(arr3); 
    }
}
for(let i=0;i<6;i++){
    let user16 = prompt('How much : 7+50=?');
    let arr4 = [user16];
    if(user16!='57'){
        document.write(arr4);
   }
    else{
       let result9=10;
       i=6;
       let arr4 =[user16]
       document.write(arr4);
      alert(arr4); 
    }
}
for(let i=0;i<6;i++){
    let user17 = prompt('How much : 300+1=?');
    let arr5 = [user17];
    if(user17!='301'){
        document.write(arr5);
   }
    else{
       let result10=10;
       i=6;
       let arr5 =[user17]
       document.write(arr5);
      alert(arr5); 
    }
}
for(let i=0;i<6;i++){
    let user18 = prompt('How much : 80+70=?');
    let arr6 = [user18];
    if(user18!='150'){
        document.write(arr6);
   }
    else{
       let result11=10;
       i=6;
       let arr6 =[user18]
       document.write( arr6);
      alert(arr6); 
    }
}
