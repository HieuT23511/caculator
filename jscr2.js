function addToResult(value) {
    let result = document.getElementById("result");
    result.value += value;
}

function clearResult() {
    let result = document.getElementById("result");
    result.value = "";
}

function calculateResult() {
    let result = document.getElementById("result");
    let calculation = result.value;
    let answer = eval(calculation);
    result.value = answer;
}