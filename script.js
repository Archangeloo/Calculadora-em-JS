function addToDisplay(value) {
    document.Calculadora.display.value += value;
}

function clearDisplay() {
    document.Calculadora.display.value = '';
}

function calculate() {
    try {
        document.Calculadora.display.value = eval(document.Calculadora.display.value);
    } catch (error) {
        document.Calculadora.display.value = 'Erro';
    }
}