//amount of art websites due//    May 23 2013
var totalArtWebsites = 5;
//amount of reasonable websites to proceed with future projects
var minArtWebsites = 3;
//maximum total of websites to receive bonus
var maxArtWebsites = 5;
//if client receives this total of websites you will receive extra pay
var extraPay = minArtWebsites+maxArtWebsites;

var WebsitesFinishedTypeIn = prompt("How many Websites completed");
if(WebsitesFinishedTypeIn >= 8) {
    alert("Bonus!");
    var extraPay
    console.log("Bonus!");
    do{WebsitesFinishedTypeIn = prompt("How many Websites completed");continue;}while(isNaN(WebsitesFinishedTypeIn) == true);
}else{
        alert("Sorry, no bonus for you!");
        console.log("Sorry, no bonus for you!");
}
