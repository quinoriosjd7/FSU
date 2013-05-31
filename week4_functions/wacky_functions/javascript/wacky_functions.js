//Jorge Quinones Rios may 30,2013 Wacky functions//


//amount of times singers choke in a week//
var singersChokeInaweek = 1*5;
//amount of times singers choke in a month//
var singersChokeInamonth = 1+5*6;
//amount of times singers choke per concert//
var chokesPerconcert = singersChokeInamonth * 5 +5 *2;
//toe infections in a year
var stressedVocalChords = singersChokeInamonth - 1;
//promt asking user for stress days singers might go through//
var singersStressLevel = prompt("How many stress days does a singer go through a year?");
if(singersStressLevel >= 3 && singersStressLevel <20) {
    alert("Yes!");
    console.log("Yes!");
    document.write("Correct");


}//any other answer received as wrong//
else{
        alert("Wrong");
        console.log("Wrong");
        document.write("Incorrect");
}{//repeats promt until user inputs a number//
do{singersStressLevel = prompt("How many stress days does a singer go through a year?");continue;}while(isNaN(singersStressLevel) == true);}
//block of code to be repeated//
function stress(){
    singersStressLevel * stressedVocalChords
    alert("now thats stress");
    console.log("now that's stress");
    document.write("now that's stress");
}

stress();