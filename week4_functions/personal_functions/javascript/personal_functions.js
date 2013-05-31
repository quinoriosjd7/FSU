//Jorge Quinones Rios may 30 2013, Personal functions//


//boy's height
var height = 7;
//minimum height to get on plane ride
var minimumHeight = 5;
//maximum age to get on plane ride
var maximumAge = 60;
//if client is this old he may get on plane ride
var permission = minimumHeight * 1;

var howOld = prompt("Old enough to get on?");
if(howOld <=60)
{
    if(howOld >=5)
        {
            alert("Enjoy!");
            console.log("Enjoy");
}else{alert("Sorry, can't ride!");
}
function granted(){
    alert("correct age ranges from" + ' '  + minimumHeight * 1 + ' ' + "and beyond");
    console.log("correct age ranges from" + ' '  + minimumHeight * 1 + ' ' + "and beyond");}
granted();}