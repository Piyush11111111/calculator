 let display = document.getElementById("display");
 let buttons = document.querySelectorAll("button");

 let firstNumber = "";
 let operator = "";
 let isCalculated = false; 

 buttons.forEach(function (button) {
    button.addEventListener("click" , function () {
        let value = button.getAttribute("data-key");
        
        if (value === "=") {
            let secondNumber = display.value;
            let result = 0;

            if (operator === "+") {
                result = Number(firstNumber) + Number(secondNumber);
            }
            else if (operator === "-") {
                result = Number(firstNumber) - Number(secondNumber);
            }
            else if (operator === "*") {
                result = Number(firstNumber) * Number(secondNumber);
            }else if (operator === "/") {
              if (Number(secondNumber) === 0) {
                  display.value = "Error";
                  isCalculated = true;
                  return;
              }

              result = Number(firstNumber) / Number(secondNumber);
            }
            
            display.value = result;
            isCalculated = true;
            return;
        }

        if (["+","-","*","/"].includes(value)) {
            firstNumber = display.value;
            operator = value;
            display.value = "0";
            isCalculated = false;
            return;
        }

        if (value === "AC") {
            display.value = "0";
            firstNumber = "";
            operator = "";
            isCalculated = false;
        } else if (value === ".") {
            if ((isCalculated)) {
                display.value = "0.";
                isCalculated = false;
            }else if (!display.value.includes(".")) {
                display.value += value;
            }
        }else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        
            if (display.value === "") {
                display.value = "0";
            }
        }else if(isCalculated){
            display.value =value;
            isCalculated = false;
        }else if (display.value === "0") {
            display.value = value;
        }
        else{
              display.value += value;
             }
        
    })
 })