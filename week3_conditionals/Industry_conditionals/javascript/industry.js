//amount of websites due
var totalWebsites = 5;
//amount of reasonable websites to proceed with next projects
var minWebsites = 3;
//maximum total of websites to receive bonus
var maxWebsites = 5;
//if client receives this total of websites you will receive extra pay
var extraPay = minWebsites+maxWebsites;

var WebsitesFinishedTypeIn = prompt("Websites completed");
if(WebsitesFinishedTypeIn >= 8) {
    alert("Bonus!");
    var extraPay
    console.log("Bonus!");
    
    }else{
        alert("Sorry, no bonus for you!");
        console.log("Sorry, no bonus for you!");
}