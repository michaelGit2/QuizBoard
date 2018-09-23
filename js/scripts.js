// START OF BUSINESS LOGIC
$(document).ready(function(){

 $("#exam").submit(function(finder){
var yourPicks = []; //Array to hold results is initializes as empty
var finalResults = 0;
//DRY CODE
 for (i = 1; i <= 5; i++) {  //pick user input and push them to array
   var yourSelections = $("input:radio[name=ans"+i+"]:checked").val();//itteration
   yourPicks.push(yourSelections);

   }

// if(yourPicks[0]== undefined || yourPicks[1]== undefined || yourPicks[2]== undefined || yourPicks[3]== undefined || yourPicks[4]== undefined ){
// $("#incomplete-work").toggle();
//  incomplete_works.innerHTML = "Some questions Not Answerd!!!/n Atempt all questions!!! Before you can submit";
// // alert("Some questions Not Answerd!!!/n Atempt all questions!!! Befor you can submit");
// finder.preventDefault();
//
// }
// else{
//   if(yourPicks[0] == 3){
//     finalResults += 3;
//   }
//   if(yourPicks[1] == 3){
//     finalResults += 3;
//   }
//   if(yourPicks[2] == 3){
//     finalResults += 3;
//   }
//   if(yourPicks[3] == 3){
//     finalResults += 3;
//   }
//   if(yourPicks[4] == 3){
//     finalResults += 3;
//   }
//
//  incomplete_works.innerHTML = "All questios attempted";
//   $("#exam").toggle();
//
//   $("#results-form").toggle();
//   yourResult.innerHTML = finalResults;
//   $("#incomplete-work").toggle();
//   finder.preventDefault();
//   // alert(finalResults);
// }
// });
// });
//
//
// // END BUSINESS LOGIC
