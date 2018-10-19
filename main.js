function insert(x) {
    calculator.answer.value += x;
}

function calc() {
    calculator.answer.value = eval(calculator.answer.value);
}

function root() {
        calculator.answer.value = Math.sqrt(calculator.answer.value);
}

function back() {
    calculator.answer.value = calculator.answer.value.slice(0, calculator.answer.value.length - 1);
}