document.addEventListener("DOMContentLoaded", function(){


    const calculation = document.querySelector(".calculation");
    const numberPart = document.querySelector(".number-part");
    const leftSide = document.querySelector(".left-side");
    const numbersDigit = document.querySelector(".numbers");
    const rightSide = document.querySelector(".right-side");
    const operators = document.querySelector(".operators");
    const equalTo = document.getElementById("equalTo");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const multiply = document.getElementById("multiply");
    const divide = document.getElementById("divide");
    const clearButton = document.getElementById("clrsrc")
    
    // function isValidating(number){
    //     const regex = /^[0-9]{1,10}$ + [+-*/] + [0-9]{1,10}$/;
        
    //     const isMatching = regex.test(number);
    //     if(!isMatching){
    //         alert("enter valid number");
    //     }
    //     return isMatching;
    // }

    let input = "";
    // function operations(num1 ,num2 ,signs){
    //     switch(signs){
    //         case '+' : calculation.textContent = num1 + num2;
    //         break;
    //         case '-' : calculation.textContent = num1 - num2;
    //         break;
    //         case '*' : calculation.textContent = num1 * num2;
    //         break;
    //         case '/' : if(calculation.textContent === "0"){
    //             calculation.textContent = "";
    //         }
    //         else{
    //             calculation.textContent = num1/num2;
    //         }
    //         break;
    //         default :  calculation.textContent = "invalid sign"

    //     }

    // }
    

    numbersDigit.addEventListener('click' , function(event) {
        
        input += event.target.textContent;
        calculation.textContent = input;
        
    });
    operators.addEventListener('click' , function(event){
        
        input += event.target.textContent;
        calculation.textContent = input;
    });
    // calculation.textContent = num.value + sign.value;
    // const num2 = numbersDigit.addEventListener('click' , function(event) {
        
        // calculation.textContent += event.target.textContent;
        
    // });

    // const number = num1 + sign + num;

    equalTo.addEventListener('click', function(){

        try{
            const result = eval(input);
            calculation.textContent = result;

            input = result.toString();

        }
        catch(error){
            calculation.textContent = "Error";
            input = "";
        }


    });

    clearButton.addEventListener('click' , function(){
        input = "";
        calculation.textContent = "";
    })

    

    // isValidating(number);
    

    



})