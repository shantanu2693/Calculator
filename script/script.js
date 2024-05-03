let num1 = undefined;
let num2 = undefined;
let output = undefined;

let flag = false; //flag variable is used to determine when the input of num2 starts after num1 and operator is input

let binaryOperator = undefined;
let unaryOperator = undefined;

const screenDiv = document.querySelector(".screen");

buttonsHoverDisplay (); //to change background colors of button when mouse hovers over them

calculate();

function calculate(){

    const numberButtons = document.querySelectorAll(".number");
    const binaryOperatorButtons = document.querySelectorAll(".binaryOperator");
    const unaryOperatorButtons = document.querySelectorAll(".unaryOperator");
    const clearButtonNode = document.querySelector("#clearButton");
    const equalsButtonNode = document.querySelector("#equalsButton");
    
    for (let numberButton of numberButtons){
        numberButton.addEventListener("click", displayNumbers);
    }
    for (let binaryOperatorButton of binaryOperatorButtons){
        binaryOperatorButton.addEventListener("click", binaryOperatorButtonClicked);
    }
    for (let unaryOperatorButton of unaryOperatorButtons){
        unaryOperatorButton.addEventListener("click",unaryOperatorButtonClicked);
    }
    clearButtonNode.addEventListener("click",clearButtonClicked);
    equalsButtonNode.addEventListener("click",equalsButtonClicked);
}

/**
 * 
 * @param {Event} event 
 */

function displayNumbers (event){
    let existingInput = '';

    if (flag == false){
        existingInput = screenDiv.textContent;
    }
    else {
        screenDiv.textContent = '';
        existingInput = '';
        flag = false;
    }

    screenDiv.textContent = existingInput + event.currentTarget.textContent;
}

function binaryOperatorButtonClicked (event){
   

    if (num1 == undefined && num2 == undefined){
        num1 = Number(screenDiv.textContent);
    }
    else if (num2 == undefined){
        num2 = Number(screenDiv.textContent);
        equalsButtonClicked();
    }
    else {
        num1 = output;
        equalsButtonClicked();
    }
    flag = true;
    binaryOperator =  event.currentTarget.textContent;
}

function unaryOperatorButtonClicked (event){
    let unaryOperator = event.currentTarget.textContent;

    if (unaryOperator == "+/-"){}
    else if (unaryOperator == "%"){}
    else if  (unaryOperator == "."){}
}

function clearButtonClicked(){
    screenDiv.textContent = '';
    flag = false;
    num1 = undefined;
    num2 = undefined;
    binaryOperator = undefined;
    unaryOperator = undefined;
}
function equalsButtonClicked(){
    num2 = Number(screenDiv.textContent);
    if (binaryOperator == "+") {
        output = num1+num2;
        
    }
    else if (binaryOperator == "-") {
        output =  num1-num2;
    }
    else if (binaryOperator == "*") {
        output = num1*num2;
    }
    else if (binaryOperator == "/") {
        if (num2 == 0){
            output = "Error";
        }
        else{
            output = num1/num2;
        }
    }
    screenDiv.textContent = output;
}

function buttonsHoverDisplay (){
    const allButtons = document.querySelectorAll("button");
    
    for (let button of allButtons){
        button.addEventListener("mouseover",() => {button.style.backgroundColor = "#FF00BF"});
        button.addEventListener("mouseleave",() => {button.style.backgroundColor = "#EC729C"});
    }
} 

