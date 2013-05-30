//clown shoes worn in a week
var clownShoesInaweek = 0;
//clown shoes worn in a month
var clownShosInamonth = 1;
//clown shoes in a year
var clownShosInayear = clownShosInamonth * 12;
//toe infections in a year
var toeInfections = clownShosInayear - 1;

var clownsToeInfections = prompt("How many toe infections for a clown in a year?");
if(clownsToeInfections >= 11 && clownsToeInfections <20) {
    alert("Yes!");
    console.log("Yes!");
    document.write("Correct");


}
else{
        alert("Nope!");
        console.log("Nope!");
        document.write("Incorrect");
}{
do{clownsToeInfections = prompt("How many toe infections for a clown in a year?");continue;}while(isNaN(clownsToeInfections) == true);}
