
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
    let forLoopLength = fullCalculation.length;
    if(fullCalculation.includes("*") || fullCalculation.includes("/")){
        for(let i = 0;i < forLoopLength; i++){
            // console.log("---for---"+fullCalculation[i]);
            // console.log("---for----"+fullCalculation.length+"---"+fullCalculation[i]);
            // console.log("----..."+fullCalculation+"----...");
            switch(fullCalculation[i]){
                case "/":
                    // console.log("---/---");
                    let tempSolD = divide(fullCalculation[i-1],fullCalculation[i+1]);
                    fullCalculation.splice(i-1,3,tempSolD);
                    // console.log(fullCalculation+"////")
                    i = 0;
                    break;
                case "*":
                    // console.log("---*---");
                    let tempSolM = multiply(fullCalculation[i-1],fullCalculation[i+1]);
                    fullCalculation.splice(i-1,3,tempSolM);
                    i = 0;
                    // console.log(fullCalculation+"***")
                    break;
                default:
            }
            
    }
}
    
     for(let i = 0;i < fullCalculation.length; i++){
         // console.log("---for---"+fullCalculation[i]);
         switch(fullCalculation[i]){
             case "+":
                 // console.log("---index---"+i);
                 let tempSolA = add(fullCalculation[i-1],fullCalculation[i+1]);
                 fullCalculation.splice(i-1,3,tempSolA);
                 i = 0;
                 break;
             case "-":
                 let tempSolS = subtract(fullCalculation[i-1],fullCalculation[i+1]);
                 fullCalculation.splice(i-1,3,tempSolS);
                 i = 0;
                 break;
         }
     }
     console.log(fullCalculation+" full???!!!");
     return fullCalculation;
}

let equation = prompt("What do you wanna calculate?");

alert(getCalculationInput(equation));


//https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }