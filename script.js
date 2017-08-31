/* javaScript for Pomodoro Clock */
/* ----------------------------- */
// $(document).ready(function(){

// display the settings screen
display1();

var work = $("#minWork").val();
var chill =$("#minChill").val();
var rounds = $("#noRounds").val();

var myTimer;
var run;

var workSec = 0;
var chillSec = 0;

var disMin;
var disSec;
var display;

// .... BUTTONS ....

// click on START button  
  $("#start").click(function(){
    // conwert min to sec
    workSec = work * 60;    // popravi na 60
    chillSec = chill * 60;  // popravi na 60

    // show the count down screen
    display2();
    
    //set stage for WorkCountDown
      // change the background
      $(".container").addClass("red-bg");
      // set Status label
      $("#status").text("Work");
    
      displayTime(workSec);
    
/*      // display work time
      $("#work-cd").text(workSec);
      // display chill time
      $("#chill-cd").text(chillSec);
 */
    
      // display rounds
      $("#round-cd").text(rounds);
      
      // timer //
      myTimer = setInterval(countDown, 1000);
      run = true;  
    
  })




// click on Pause button
$("#pause").click(function(){
  if(run){
    clearInterval(myTimer); // ustavi timer
    run = false;
    $("#pause").html("Resume");
  } else {  // click on Resume button
    myTimer = setInterval(countDown, 1000);
    run = true;
    $("#pause").html("Pause");
  }
  
});



// click on reset button
  $("#reset").click(function(){
    run = true;
    $("#pause").html("Pause");
    // stop counter
    clearInterval(myTimer);
    // show the Settings screen 
    display1();
    // remove red and green bg
    $(".container").removeClass("red-bg");
    $(".container").removeClass("green-bg");
    rounds = $("#noRounds").val();
    
  })








/* ---                      settings Buttons ---                  */

// --------  Work ------------ //
// -- minus --
$("#w-min-m").click(function(){
  if (work > 1){
    work--;
  }
  $("#minWork").val(work);
})

// -- plus --
$("#w-min-p").click(function(){
  if (work < 60){
    work++;
  }
  $("#minWork").val(work);
})


// --------  Chill ------------ //
// -- minus --
$("#c-min-m").click(function(){
  if (chill > 1){
    chill--;
  }
  $("#minChill").val(chill);
})

// -- plus --
$("#c-min-p").click(function(){
  if (chill < 60){
    chill++;
  }
  $("#minChill").val(chill);
})


// --------  Rounds ------------ //
// -- minus --
$("#r-no-m").click(function(){
  if (rounds > 1){
    rounds--;
  }
  $("#noRounds").val(rounds);
})

// -- plus --
$("#r-no-p").click(function(){
  if (rounds < 12){
    rounds++;
  }
  $("#noRounds").val(rounds);
})

/* ---                        end settings Buttons         --- */






/* ---------- functions ------------ */

// display first screen - Settings - //
function display1() {
    $(".centerNo1").show();
    $(".centerNo2").hide();
    $(".comm-1").show();
    $(".comm-2").hide();
};



// display second screen - count down - //
function display2() {
    $(".centerNo1").hide();
    $(".centerNo2").show();
    $(".comm-1").hide();
    $(".comm-2").show();
};



// --- Timer --- //


function countDown(){
  
  if(rounds > 0 && workSec > 0 && chillSec > 0){
    $(".container").removeClass("green-bg");
    $(".container").addClass("red-bg");
    $("#status").html("Work");
    
    workSec--;
    
    displayTime(workSec);
    
   /* disMin = Math.floor(workSec / 60);
    disSec = workSec % 60;  
    if (disSec < 10) {
      display = disMin + ":0" + disSec;
    } else {
      display = disMin + ":" + disSec;
    }     
    $("#work-cd").html(display);*/
  } 
  
  else if (rounds > 0 && workSec === 0 && chillSec > 0){
    $(".container").removeClass("red-bg");
    $(".container").addClass("green-bg");
    $("#status").html("Chill");
    chillSec--;
    
    displayTime(chillSec);
    
/*    $("#work-cd").html(chillSec); */
  } 
  
  else if (rounds > 0 && workSec === 0 && chillSec === 0){

    
    $(".container").removeClass("green-bg");
    $(".container").addClass("red-bg");
    
    rounds--;
    $("#round-cd").html(rounds);
    
    
    // $("#status").html("Work");
    workSec = work * 60;
    // $("#work-cd").html(workSec);
    chillSec = chill * 60;
  } 
  
  else {
    clearInterval(myTimer);
    $(".container").removeClass("red-bg");
    $(".container").removeClass("green-bg");
    $("#status").html("Done!");
    $("#work-cd").html("00:00");
  }
};



// display conversion 
function displayTime(secs) {
    disMin = Math.floor(secs / 60);
    disSec = secs % 60;  
    if (disSec < 10) {
      display = disMin + ":0" + disSec;
    } else {
      display = disMin + ":" + disSec;
    }     
    $("#work-cd").html(display);
}


// var myTimer = setInterval(cdWork, 1000);




// --- Timer --- //

/* --- primer --- 
function prikaziCas(){
  // prikazi min
  // prikazi sec
  // odbij 1
};


var myTimer = setInterval(prikaziCas, 1000);

clearInterval(myTimer); // ustavi timer

*/ // -- konec primera 

















// }) // end of document ready()
