my code:
const resultElement = document.getElementById("result");
const clearBtn = document.getElementById("clear-button");
const deleteBtn = document.getElementById("delete-button");
const divideBtn = document.getElementById("divide-button");
const multiplyBtn = document.getElementById("multiply-button");
const subtractBtn = document.getElementById("subtract-button");
const addBtn = document.getElementById("add-button");
const decimalBtn = document.getElementById("decimal-button");
const equalBtn = document.getElementById("equal-button");
const numberBtns = document.querySelectorAll(".number");

//Declaring global variables
let firstOperand='';
let operation='';
let secondOperand='';
let finalResult='';

//appending input number to make first operand
const appendNumber = (number)=>{
    if(!operation){
        if(number==='.' && firstOperand.includes(".")) return;
    firstOperand+=number;
    console.log("First Operand "+firstOperand);
    resultElement.innerText=firstOperand;
    }
    else{
        if(number==='.' && secondOperand.includes(".")) return;
        secondOperand+=number;
        console.log("Second Operand "+secondOperand);
        resultElement.innerText=`${firstOperand} ${operation} ${secondOperand}`;    
    }
}

//Getting input numbers
numberBtns.forEach(button => {
    if(isNaN(button.innerText)) return;
    button.addEventListener("click",()=>appendNumber(button.innerText));
});

//getting operator
const getOperator = (operator)=>{    
    if(operator==='' || !isNaN(operator) || (!firstOperand)) return;
    switch (operator) {
        case '+':
            // if(operation!=='') return;
            operation=operator;
            console.log("Operator "+operation);
            resultElement.innerText=`${firstOperand} ${operation}`;
            break;
        case '-':
            // if(operation!=='') return;
            operation=operator;
            console.log("Operator "+operation);
            resultElement.innerText=`${firstOperand} ${operation}`;
            break;
        case '*':
            // if(operation!=='') return;
            operation=operator;
            console.log("Operator "+operation);
            resultElement.innerText=`${firstOperand} ${operation}`;
            break;
        case '/':
            // if(operation!=='') return;
            operation=operator;
            console.log("Operator "+operation);
            resultElement.innerText=`${firstOperand} ${operation}`;
            break;
        default:
            return;
            // break;
    }
    //   resultElement.innerText=`${firstOperand} ${operation}`;
}
const clearResult = ()=>{
    firstOperand='';
    secondOperand='';
    operation='';
    finalResult='';
    resultElement.innerText="0";
}
getResult = () =>{
    // resultElement.innerText=`${firstOperand} ${operation} ${secondOperand}`;
    a = parseFloat(firstOperand);
    b= parseFloat(secondOperand);
    const operations = {
        "+":(a,b)=>a+b,
        "-":(a,b)=>a-b,
        "*":(a,b)=>a*b,
        "/":(a,b)=>a/b,
    };
    finalResult=operations[operation](a,b);
    finalResult = finalResult.toFixed(2);
    // console.log(typeof(finalResult));
    
    let c = finalResult.toString();
    resultElement.innerText = c;
    firstOperand = c;
    operation = '';
    secondOperand ='';
    finalResult = '';
}
deleteLastDigit = ()=>{    
    if(firstOperand || operation || secondOperand){
        if(secondOperand) {
            secondOperand=secondOperand.slice(0,-1);
            resultElement.innerText=`${firstOperand} ${operation} ${secondOperand}`;
        }
        else if(operation && !secondOperand){
            operation=operation.slice(0,-1);
            resultElement.innerText=`${firstOperand} ${operation}`;
        }
        else if(firstOperand){
            firstOperand=firstOperand.slice(0,-1);
            if(!firstOperand){
                resultElement.innerText="0";
            }
            else{
                resultElement.innerText=`${firstOperand}`;
            }
        }
    }
    else{
        // resultElement.innerText='0';
        return;
    }
}
addBtn.addEventListener("click",()=>getOperator("+"));
subtractBtn.addEventListener("click",()=>getOperator("-"));
multiplyBtn.addEventListener("click",()=>getOperator("*"));
divideBtn.addEventListener("click",()=>getOperator("/"));
clearBtn.addEventListener("click",clearResult);
equalBtn.addEventListener("click",getResult);
decimalBtn.addEventListener("click",()=>appendNumber("."));
deleteBtn.addEventListener("click",deleteLastDigit);



Youtube code:



const resultElement = document.getElementById("result");
const clearBtn = document.getElementById("clear-button");
const deleteBtn = document.getElementById("delete-button");
const divideBtn = document.getElementById("divide-button");
const multiplyBtn = document.getElementById("multiply-button");
const subtractBtn = document.getElementById("subtract-button");
const addBtn = document.getElementById("add-button");
const decimalBtn = document.getElementById("decimal-button");
const equalBtn = document.getElementById("equal-button");
const numberBtns = document.querySelectorAll(".number");

//initialize the variables
let result = '';
let operation = '';
let previousOperand = 0;

//FUnction to append number
const appendNumber = (number)=>{
    if(number === "." && result.includes(".")) return;
    result += number;
    updateDisplay();
}
// Function to Update Display
const updateDisplay = () =>{
    if(operation){
        resultElement.innerText = `${previousOperand} ${operation} ${result}`; //understand?
    }
    else{
        resultElement.innerText=result;
    }
}
//Function to select operator
const selectOperator = (operatorValue) =>{
    if(result==='') return;
    //undestand
    if(operation !== '' && previousOperand !==''){
        calculateResult();
}

    operation = operatorValue;
    previousOperand = result;
    result='';
    updateDisplay();
}
//Function to calculate Result
const calculateResult = ()=>{
    let evaluateResult;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result);
    if((isNaN(prev)) || isNaN(current)) return;
    switch(operation){
        case '+':
            evaluateResult = prev + current;
            break;
        case '-':
                evaluateResult = prev - current;
                break; 
        case '*':
             evaluateResult = prev * current;
             break;
        case '/':
           evaluateResult = prev / current;
           break; 
        default:
            return;  
    }
    result = evaluateResult.toString();
    operation = '';
    previousOperand ='';
}
// Add event listener to number buttons
numberBtns.forEach(button => {
    button.addEventListener("click",() =>{
        // console.log(button.innerText);
        appendNumber(button.innerText);
    })
})

//Function to clear Display
const clearDisplay = () =>{
    result='';
    previousOperand='';
    operation = '';
    updateDisplay();
}

//Function to delete last digit
const deleteLastDigit = () =>{
    if(result==='') return;
    result = result.slice(0,-1);
    updateDisplay();
}
decimalBtn.addEventListener("click",()=> appendNumber("."));
addBtn.addEventListener("click",()=> selectOperator('+'));
subtractBtn.addEventListener("click",()=> selectOperator('-'));
multiplyBtn.addEventListener("click",()=> selectOperator('*'));
divideBtn.addEventListener("click",()=> selectOperator('/'));
equalBtn.addEventListener("click",()=>{
    if(result==='') return;
    calculateResult();
    updateDisplay();
});

clearBtn.addEventListener("click",clearDisplay);
deleteBtn.addEventListener("click",deleteLastDigit);