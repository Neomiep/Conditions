let numChildren =10;
let isCareful = false;
if(isCareful){
    console.log("All" + numChildren + " were careful");
}
else{
    console.log(numChildren+1 + " children");
}

let silverwareCount=5;
if(silverwareCount/2){
    console.log("Everything is accounted for.");
}
else{
    console.log("Something's missing.");
}

let performance = "stellar" ;
let salary = 10000;
const goodBonus = 1000;
const stellarBonus=3000;
if(performance == "stellar"){
    console.log(salary+=stellarBonus);
}
else if(performance == "good"){
    console.log(salary+=goodBonus);
}
else{
    console.log(salary);
}

const isVIP = false;
let cash = 500;
if(isVIP || cash>=300){
    console.log("Please, do come on in.")
}
else{
    console.log("I can't believe you actually thought you would be good enouch for this club")
}

const a = 3;
let b=2;
let c = 0;
let d;
b=c; 
b++;
if(b){
    b=a
}
d=a+(b*c)
d++
b+=2


// a=3 b=5 c=0 d=4
console.log(a)
console.log(b)
console.log(c)
console.log(d)


const gender = null;
let profession = "buisness";
if (gender == "male"){
    console.log(profession + "man")
}
else if(gender== "female"){
    console.log(profession + "woman")
}
else {
    console.log(profession + "person")
}

let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;
if(boughtTesla && isUSCitizen){
    if(currentYear - yearOfTeslaPurchase < 4){
        console.log("Would you like an upgrade?")
    }
    else{
        console.log ("Are you satisfied with your car?")
    }
}
else if(boughtTesla && !isUSCitizen){
    console.log("Would you like to move to the States?")
}
else {
    console.log("Would you like to buy one?")
}

