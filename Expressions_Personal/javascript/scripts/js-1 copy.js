//Jorge Quinones Rios, April 18 2013, Expressions & 

//How many times I eat meals in a week//
var mealsAday = prompt("How many times do I eat in a week?");

//if user types in a number more higher or lower than 21, "wrong" will appear then the option to retry the question
if (mealsAday >21 || mealsAday <21)
{
    console.log("Wrong!");
    alert("Wrong!");
    var mealsAday = prompt("How many times do I eat in a week?");
}
//if user types in 21, the answer will be true and access will be granted
if (mealsAday == 21)
{
    console.log("Correct!, you may proceed");
    alert("Correct!, you may proceed, welcome");
    index.html;
}
//prompts user for a number entry while user enters a letter or word//
do{
    alert("Please enter a number");
    console.log("Pleas enter a number");
    var mealsAday = prompt("How many times do I eat in a week?")
}while (isNaN(mealsAday));

//alerts user that entry is wrong when he/she enters a number higher or lower than 21//
do{
    alert("Wrong!");
    console.log("Wrong!");
    var mealsAday = prompt("How many times do I eat in a week?")
}while (mealsAday >21 || mealsAday <21);
//when access is granted, user will be welcomed
if (alert =="Correct!, I eat 21 meals in a week, you may proceed, welcome");
   (console.log =="Correct!, I eat 21 meals in a week, you may proceed, welcome");
{
index.html;
}




//meals I eat a day//
var mealsAday = 3 + 0;

//how many days in a week//
var daysInaweek = 7 + 0;

//how many meals I eat a week//
var mealsInaweek = mealsAday * daysInaweek - 0;
console.log("Meals in a week:" + mealsInaweek);
alert("Meals in a week:" + mealsInaweek);
