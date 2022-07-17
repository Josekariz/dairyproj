//  alert("You are about to enter todays output for the cows shed in litres")
//  alert("use numbers only ie 200 then press ok")
// const shedAProduction  =  parseInt(prompt ("SHED A PRODUCTION?"))
// const shedBProduction = parseInt(prompt("SHED B PRODUCTION?"))
// const shedCProduction = parseInt(prompt("SHED C PRODUCTION?"))
// const shedDProduction = parseInt(prompt("SHED D PRODUCTION?"))

// // console.log(totalProduction  + " litres of milk per day");



//shed A 
document.getElementById("submitOutputA").onclick = function () {
 const shedAProduction = document.getElementById("outputShedA").value;
document.getElementById("shedAResults").innerHTML =
  "Your production in shed A is " + shedAProduction + " " + "litres per day.";
};



//shed B
document.getElementById("submitOutputB").onclick = function () {
 const shedBProduction = document.getElementById("outputShedB").value;
document.getElementById("shedBResults").innerHTML =
  "Your production in shed B is " + shedBProduction + " " + "litres per day.";
};


//shed C
document.getElementById("submitOutputC").onclick = function () {
 const shedCProduction = document.getElementById("outputShedC").value;
 
document.getElementById("shedCResults").innerHTML =   "Your production in shed C is " + shedCProduction + " " + "litres per day.";
};



//shed D
document.getElementById("submitOutputD").onclick = function () {
 const shedDProduction = document.getElementById("outputShedD").value;
document.getElementById("shedDResults").innerHTML =
  "Your production in shed D is " + shedDProduction + " " + "litres per day.";
};
////  >>>>>>>>>>>>>>>>>>>>>>>>> data input part works well till here 

totalProduction = parseInt(shedAProduction + shedBProduction + shedCProduction + shedDProduction);

 document.getElementById("daysProduction").onclick = function () {
   var totalProduction = document.getElementById("totalProduction").innerHTML =
  " The total production is " + totalProduction + " " + "litres per day.";
};
   


function weekFunction(){  
   document.getElementById("weeklyincome").innerHTML =
     " Your weekly income will be Ksh 590940";
}
function yearFunction(){  
  document.getElementById("yearlyincome").innerHTML =
    " Your yearly income will be Ksh 30813300";
}







// income over time//
// var brookside = 45;//
// var week = 7;//
// var year = 365;//
// const totalProduction = 1232;//
// function incomeOverTime(selling_price, time, product) {
// weeklyIncome = (selling_price * time * product);//
// } //
// incomeOverTime(brookside, week, totalProduction );//
//  var weeklyIncome = document.getElementById("weeklyincome").innerHTML = "Your weekly income will be KSH" + weeklyIncome;//
