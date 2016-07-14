var butVal = 0, textVal = 0, num = "", results = 0, sumNum=[], facto=[], digits = /[0-9]/g;
// function result(){
//   results = sumNum[0];
//   for(var i=0;i<facto.length; i++){
//     switch(facto[i]){
//       case "+":
//       results = results + sumNum[i+1];
//       break;
//       case "-":
//       results = results - sumNum[i+1];
//       break;
//       case "*":
//       results = results * sumNum[i+1];
//       break;
//       case "/":
//       results = results / sumNum[i+1];
//       break;
//     }
//   }
//   facto = [];
//   textVal=""
//   textVal=results;
//   sumNum = [];
//   sumNum.push[results];
//   // textVal = textVal.replace(/^0+/, '');
// }

$( document ).ready(function() {
  $("button").click(function() {
    textVal = $( "input" ).val();
    butVal = $( this ).attr("value");
    if(butVal == "=") {
      num = eval(num);
    }
    else if(butVal == "C"){
      num = "";
    }
    else {
      num += butVal;
      console.log(butVal);
    }
    $("input").val(num);
  });
});
// $( document ).ready(function() {
//   $("button").click(function() {
//     textVal = $( "input" ).val();
//     butVal = $( this ).attr("value");
//     switch(butVal){
//       case "+":
//       case "-":
//       case "*":
//       case "/":
//         textVal = textVal.replace(/^0+/, '');
//         sumNum.push(parseFloat(textVal));
//         facto.push(butVal);
//         textVal = "0";
//         break;
//       case "0":
//       case "1":
//       case "2":
//       case "3":
//       case "4":
//       case "5":
//       case "6":
//       case "7":
//       case "8":
//       case "9":
//         textVal = textVal.replace(/^0+/, '');
//         textVal += butVal;
//         break;
//       case "=":
//         textVal = textVal.replace(/^0+/, '');
//         sumNum.push(parseFloat(textVal));
//         result();
//         break;
//       case "C":
//         textVal = "0";
//         break;
//       case "CA":
//         textVal="0";
//         sumNum = [];
//         facto = [];
//         break;
//       default:
//         textVal = "Error";
//     }
//     console.log("facto = " + facto + "     " + "sumNum = " + sumNum + "     " + "textVal = " + textVal + "     " + "butVal = " + butVal);
//     $("input").val(textVal);
//   });
// });