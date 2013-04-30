//boy's age
var age = 10;
//minimum age to get on carnival ride
var minimumAge = 13;
//maximum age to get on carnival ride
var maximumAge = 60;
//if client is this old he may purchase an angus burger
var permission = minimumAge;

var howOld = prompt("Old enough to get on?");
if(howOld >= 13 || howOld == 60)
        {
            alert("Enjoy!");
            console.log("Enjoy");
}else{alert("Sorry, can't ride!");
}
