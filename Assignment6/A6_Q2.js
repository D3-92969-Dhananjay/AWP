


function add() {

    let num1 = parseInt(document.getElementById("number1").value)
    let num2 = parseInt(document.getElementById("number2").value)
    let res = num1 + num2;

    document.getElementById("Result").innerText = res;

}


function sub() {

    let num1 = parseInt(document.getElementById("number1").value)
    let num2 = parseInt(document.getElementById("number2").value)
    let res = num1 - num2;

    document.getElementById("Result").innerText = res;

}


function mul() {

    let num1 = parseInt(document.getElementById("number1").value)
    let num2 = parseInt(document.getElementById("number2").value)
    let res = num1 * num2;

    document.getElementById("Result").innerText = res;

}


function div() {

    let num1 = parseInt(document.getElementById("number1").value)
    let num2 = parseInt(document.getElementById("number2").value)
    let res = num1 / num2;

    document.getElementById("Result").innerText = res;

}