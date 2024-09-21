
function add(num1,num2){
    // console.log(num1+" ADD "+num2);
    return Number(num1)+Number(num2);
}
function subtract(num1,num2){
    return Number(num1)-Number(num2);
}
function multiply(num1,num2){
    return Number(num1)*Number(num2);
}
function divide(num1,num2){
    return Number(num1)/Number(num2);
}

function getCalculationInput(input){
    let inputArray = input.split("");
    // console.log(inputArray);
    let fullCalculation = [""];
    let counter = 0;
    let operator = [];

    for(let i = 0;i < inputArray.length; i++){
        if(isNumeric(inputArray[i])){
            if(fullCalculation[counter] == undefined){
                fullCalculation[counter] = inputArray[i]+""
            }else{
                fullCalculation[counter] += inputArray[i]+"";
            }
        }else{
            counter++;
            fullCalculation[counter] = inputArray[i];
            // console.log(fullCalculation[1]);
            operator.push(inputArray[i]);
            counter++;
        }
    }
    console.log(fullCalculation)
    // console.log(operator);
    for(let i = 0;i < fullCalculation.length; i++){
        // console.log("---for---"+fullCalculation[i]);
        switch(fullCalculation[i]){
            case "+":
                // console.log("---index---"+i);
                console.log(add(fullCalculation[i-1],fullCalculation[i+1])+"+++");
            case "-":
                console.log(subtract(fullCalculation[i-1],fullCalculation[i+1])+"---");
            case "/":
                console.log(divide(fullCalculation[i-1],fullCalculation[i+1])+"///");
            case "*":
                console.log(multiply(fullCalculation[i-1],fullCalculation[i+1])+"***");
            default:
        }
    }
}
getCalculationInput("42*423+32*432+123532*23/312");

let equation = prompt("What do you wanna calculate?");


//https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }