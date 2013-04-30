//age of kid
var kidAge = 8;
//minimum age to try an angus burger
var minimumAge = 12;
//maximum age to eat an angus burger
var maximumAge = 24;
//if client is this old he may purchase an angus burger
var angusBurger = minimumAge||maximumAge;

var clientAgeTypeIn = prompt("Old enough to eat an Angus burger?");
if(clientAgeTypeIn >= 12 && clientAgeTypeIn <= 24){
    alert("Enjoy!");
    var angusBurger;
    console.log("Enjoy!");
    
    }else{
        alert("Sorry, you can't eat this!");
        console.log("Sorry, you can't eat this");
}