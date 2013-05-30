//Jorge Quinones Rios May 25, 2013 Personal conditionals//


//age of kid
var kidAge = 8;
//minimum age to try an angus burger
var minimumAge = 12;
//maximum age to eat an angus burger
var maximumAge = 24;
//if client is this old he may purchase an angus burger
var angusBurger = minimumAge;

var clientAgeTypeIn = prompt("Old enough to eat an Angus burger?");
if(clientAgeTypeIn >= 13){
    alert("Enjoy!");
    var angusBurger;
}if(clientAgeTypeIn <= 12){
        alert("Sorry, you can't eat this!");
        console.log("Sorry, you can't eat this!");
    
}

{do{clientAgeTypeIn = prompt("Old enough to eat an Angus burger?");continue;}while(isNaN(clientAgeTypeIn) == true);}
if(isNaN(clientAgeTypeIn) >=13 == true){
    alert("great! enjoy");
    console.log("great! enjoy");
}
if(isNaN(clientAgeTypeIn) == false)
{
    alert("nope");
    console.log("nope");
}