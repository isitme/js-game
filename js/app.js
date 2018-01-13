// var name = "Rakibul islam";
// var age = 20;
// var ocupation = "Student";
// var hobby = "programming and Boudybuilding";
// var love = "His parrents and Brother";
// var aim = "To Earn money and be happy";
// var religian = "Islam";

// var data = prompt("Who are you looking for?");

// if(data === "rakibul"){
//     console.log('Name: '+ name +
//                 "Age: " + age +
//                 "ocupation: "+ocupation +
//                 "hobby:" + hobby +
//                 "love:"+ love +
//                 "aim: " + aim +
//                 "religian: " + religian);
// }
// else{
//     console.log("Not in database. Sorry...;(")
// }




var yearOfBityh = ["1997","1998", "1996", "1995", "1994"];
var ages = [];

for(var i = 0; i <= yearOfBityh.length; i++){
    ages[i] = 2018 - yearOfBityh[i];
}

for(i = 0; i <= yearOfBityh.length; i++){
    if(ages[i] >= 18){
        console.log("Person " + (i +1) + " is " + ages[i]+ " Years old and it is a full age");
    }
    else{
        console.log("Person" + (i +1)+ " is " + ages[i]+ " Years old and it is NOT a full age")
    }
}

calculateAge(1997);

function calculateAge(year){
    var m = 2018 - year;
    console.log(m);
}

calculateAge(1995);
















