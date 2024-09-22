
//
let input = "";

const btn = document.querySelectorAll(".input-button");
const para = document.querySelector(".display-calculation");
const warningPara = document.querySelector(".warning")
const container = document.querySelector(".container");
const calc = document.querySelector(".calculator-layout");
const warnCon = document.querySelector(".warning-container");
const audio = new Audio();
const errorAudio = new Audio();
errorAudio.src = "./audio/error-too-many.mp3"
audio.src = "./audio/click-button.mp3"
para.textContent = "0";
let prevResult = "0";
let pressedEqual = false;
warnCon.style.visibility="hidden";

btn.forEach(function(button){
    button.addEventListener("click", function(e){
        audio.play();
        if(para.textContent.length > 27){
            errorAudio.play();
            warnCon.style.visibility="visible";
            switch(button.id){
                case "AC": input = "0"; break;
                case "DEL": input = input.slice(0,-1); break;
                case "=": 
                    para.textContent = getCalculationInput(input);
                    prevResult = getCalculationInput(input);
                    pressedEqual = true;
                    input = getCalculationInput(input);
                    break;
            }
            if(!pressedEqual){
                console.log("hmm")
                para.textContent = input;
            }
            pressedEqual = false; 
        }else{
            warnCon.style.visibility="hidden";
            switch(button.id){
                case "0": input +="0"; break;
                case "1": input +="1"; break;
                case "2": input +="2"; break;
                case "3": input +="3"; break;
                case "4": input +="4"; break; 
                case "5": input +="5"; break;
                case "6": input +="6"; break;
                case "7": input +="7"; break;
                case "8": input +="8"; break;
                case "9": input +="9"; break;
                case "+": input +="+"; break;
                case "-": input +="-"; break;
                case "*": input +="*"; break;
                case "/": input +="/"; break;
                case "AC": input = "0"; break;
                case ".": input += "."; break;
                case "DEL": input = input.slice(0,-1); break;
                case "=": 
                    para.textContent = getCalculationInput(input);
                    prevResult = getCalculationInput(input);
                    pressedEqual = true;
                    input = getCalculationInput(input);
                    break;
            }
            if(!pressedEqual){
                console.log("hmm")
                para.textContent = input;
            }
            pressedEqual = false;
        }
        
    })
})

//Logic
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

function getCalculationInput(input, first){
    let inputArray = input.split("");
    // console.log(inputArray);
    let fullCalculation = [""]; 
    
    let counter = 0;

    for(let i = 0;i < inputArray.length; i++){
        if(isNumeric(inputArray[i]) || inputArray[i] == "."){
            if(fullCalculation[counter] == undefined){
                fullCalculation[counter] = inputArray[i]+""
            }else{
                fullCalculation[counter] += inputArray[i]+"";
            }
        }else{
            counter++;
            fullCalculation[counter] = inputArray[i];
            counter++;
        }
    }

    let forLoopLength = fullCalculation.length;
    if(fullCalculation.includes("*") || fullCalculation.includes("/")){
        for(let i = 0;i < forLoopLength; i++){
            switch(fullCalculation[i]){
                case "/":
                    let tempSolD = divide(fullCalculation[i-1],fullCalculation[i+1]);
                    fullCalculation.splice(i-1,3,tempSolD);
                    i = 0;
                    break;
                case "*":
                    let tempSolM = multiply(fullCalculation[i-1],fullCalculation[i+1]);
                    fullCalculation.splice(i-1,3,tempSolM);
                    i = 0;
                    break;
                default:
            }
            
        }
    }
     for(let i = 0;i < fullCalculation.length; i++){
         switch(fullCalculation[i]){
             case "+":
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
     return Math.round((Number(fullCalculation) + Number.EPSILON) * 100) / 100 //how to round - https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
}

// let equation = prompt("What do you wanna calculate?");

// alert(getCalculationInput("5/0*2"));


//https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }