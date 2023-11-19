// Mapping buttons and input visor

const allButtons = [...document.querySelectorAll('button')];
let inputVisor = document.querySelector('#inputvisor')

console.table(allButtons)

// add event listener for each button

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(`Button ${button.textContent} was clicked!`);
        inputVisor.value += `${button.textContent}`;
    });
});

function sum (a,b) {
    return a + b
}

function subtr (a,b) {
    return a - b
}

function mult (a,b) {
    return a * b
}

function divide (a,b) {
    return a / b
}

// This function will transform the string in to array, separating follow the rules
// explained below

function StringToArray(string) {
    return string.match(/[0-9]+|[-+*/X]|[^\w\s]/g);
}


function operate(operation) {
    let operationArray = StringToArray(operation);
    console.log(operationArray)
    let total = 0;

    // remove inputvisor value

    inputVisor.value = '';

    // Carrega as variaveis das operações
    // Faz a primeira etapa, que é pegar os 3 primeiros indexes e fazer a operação
    // No final da operação, remove esses 3 indexes
    // Se o array for maior que 1, quer dizer que ainda precisa calcular
    // Pega o próximo operador (que após o slice é o index 0)
    // n1 vira o total, e o index 1 o n2, faz o calculo e remove os dois primeiros indexes
    // O while loop vai continuar se operationArray.length > 0
    // o bloco de código de "else if (operationArray.length > 1)" é executado enquanto
    // o array for maior que zero

    while (operationArray.length > 0) {
        let n1, n2, operator;

        if (operationArray.length > 2 && !isNaN(parseInt(operationArray[0]))) {
            n1 = parseInt(operationArray[0]);
            operator = operationArray[1];
            n2 = parseInt(operationArray[2]);

            if (operator === '+') total = sum(n1, n2);
            else if (operator === '-') total = subtr(n1, n2);
            else if (operator === 'X') total = mult(n1, n2);
            else if (operator === '/') total = divide(n1, n2);

            operationArray = operationArray.slice(3);
        } else if (operationArray.length > 1) {
            operator = operationArray[0];
            n1 = total;
            n2 = parseInt(operationArray[1]);

            if (operator === '+') total = sum(n1, n2);
            else if (operator === '-') total = subtr(n1, n2);
            else if (operator === 'X') total = mult(n1, n2);
            else if (operator === '/') total = divide(n1, n2);

            operationArray = operationArray.slice(2);
        } else {
            // Handle the case when there's only one element left in operationArray
            break;
        }
    }

    return total;
}