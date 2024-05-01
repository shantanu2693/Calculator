let num1 = 0;
let num2 = 0;
let operator = '';

addEventListeners();

function addEventListeners(){
    const operatorButtons = document.querySelectorAll(".operator");

    for (let operatorButton of operatorButtons){
        operatorButton.addEventListener("click", () => {
            num1 = Number(document.querySelector(".screen").textContent);
        });
    }
    
    const allButtons = document.querySelectorAll("button");
    
    for (let button of allButtons){
        button.addEventListener("click", display);
        
        button.addEventListener("mouseover",() => {button.style.backgroundColor = "#F70776"});
        
        button.addEventListener("mouseleave",() => {button.style.backgroundColor = "#EC729C"});
    }

}

/**
 * 
 * @param {Event} event 
 */

function display (event){

    let existingInput = document.querySelector(".screen").textContent;

    document.querySelector(".screen").textContent = existingInput + event.currentTarget.textContent;
}




