//Jorge Quinones Rios may 30, 2013 Industry functions


    //promt asking how many css files need to be created//
    var employeeInfo = prompt("Css files missing?");
    
    if(employeeInfo >=5){
        alert("wrong");
        console.log("wrong");
      do{employeeInfo = prompt("Css files missing?");continue;}while(isNaN(employeeInfo) == true);}else{
        alert("try again");
        console.log("try again");
      do{employeeInfo = prompt("Css files missing?");continue;}while(isNaN(employeeInfo) == true);}
      
    

//block of code to be repeated to obtain information from employee//
function numberOfcssFiles(){
    

    
    //total of css files that need to be created//
    var cssFilesNeeded = 5;
    
    //css files executed//
    var cssFilesCreated = 3;
    
    //css files being attempted//
    var attemptingCSSfiles = 1;
    
    //goal amount//
    var goal = cssFilesNeeded + attemptingCSSfiles;
    
   //display of total//
    console.log("this is the total goal"+ ' ' + goal);}
    
    

    
   numberOfcssFiles();



