var NUM1 = "";
var NUM2 = "";
var OPERAND = "";

function set(number){
    if (OPERAND == ""){
        NUM1 += number;
        document.getElementById("output").textContent = NUM1;
    }else{
        NUM2 += number;
        document.getElementById("output").textContent = NUM2;
    }
}

function operate(operand){
    OPERAND = operand;
}

function equalButton(){
    if (!NUM2 == ""){
        var num1 = Number(NUM1);
        var num2 = Number(NUM2);
        var message = "";
        if (OPERAND == "add"){
            message = (num1 + num2).toString();
        }
        else if (OPERAND == "subtract"){
            message = (num1 - num2).toString();
        }
        else if (OPERAND == "multiply"){
            message = (num1 * num2).toString();
        }
        else if (OPERAND == "divide"){
            message = (parseFloat(num1) / num2).toString();
        }
        var out = document.getElementById("output");
        out.textContent = message;
    }
}

function clearButton(){
    NUM1 = "";
    NUM2 = "";
    OPERAND = "";
    document.getElementById("output").textContent = "0";
}