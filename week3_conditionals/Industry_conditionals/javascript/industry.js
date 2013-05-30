//amount of art websites due//    May 23 2013
var totalArtWebsites = 5;

//amount of reasonable websites to proceed with future projects
var minArtWebsites = 3;

//maximum total of websites to receive bonus
var maxArtWebsites = 5;

//if client receives this total of websites you will receive extra pay
var extraPay = minArtWebsites+maxArtWebsites;

//prompts employee to input number of Art websites developed//
var WebsitesFinishedTypeIn = prompt("How many Websites completed");

//if employee inputs any number ranging from 8 or more they will receive an alert congratulating them on a bonus received//
if(WebsitesFinishedTypeIn ==8)
{
    alert("Congratulations you receive a bonus!");
    var extraPay
    console.log("Congratulations you receive a bonus!");
    do{WebsitesFinishedTypeIn = prompt("How many Websites completed");continue;}while(isNaN(WebsitesFinishedTypeIn) == true);}
if(WebsitesFinishedTypeIn >=100)
{
    alert("No way you could've finished so many");
    console.log("No way you could've finished so many");
    //Loops the prompt if the employee enters a letter or word until they input a number//
    do{WebsitesFinishedTypeIn = prompt("How many Websites completed");continue;}while(isNaN(WebsitesFinishedTypeIn) == true);
    
    //If the number entered in the prompt is below 8 then employee will receive an alert letting them know that sadly they will not receive a bonus//
}else{
        alert("Sorry, no bonus for you!");
        console.log("Sorry, no bonus for you!");
}

//document.write("<br/>");
//feedback to employee//
if(WebsitesFinishedTypeIn >=8)
   {
    document.write("Good job! On to the next projects.");
    }
    