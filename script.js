// Mapping buttons and input visor

const allButtons = [...document.querySelectorAll('button')];
let inputVisor = document.querySelector('#inputvisor')

//console.table(allButtons)

// add event listener for each button that is not "equals"

allButtons.forEach(button => {

    if (button.id !== 'equals' && button.id !== 'clear' && button.id !== 'delete') {
            button.addEventListener('click', (e) => {
        console.log(`Button ${button.textContent} was clicked!`);
        inputVisor.value += `${button.textContent}`;
    });
    }
});


// add event listener for equals, clear and delete

const equalsBtn = document.querySelector('#equals')
const clearBtn = document.querySelector('#clear')
const deleteBtn = document.querySelector('#delete')

equalsBtn.addEventListener('click', (e) => {

    operate(inputVisor.value);

})

clearBtn.addEventListener('click', (e) => {

    inputVisor.value = '';

})

deleteBtn.addEventListener('click', (e) => {

    inputVisor.value = inputVisor.value.substring(0, inputVisor.value.length - 1);

})



// operations


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
        // Modificada a expressão regular para considerar números decimais com múltiplos pontos
        return string.match(/[0-9]+(?:\.[0-9]+(?:\.[0-9]+)*)?|[-+*/X]|[^\w\s]/g);
}


function operate(operation) {
    let operationArray = StringToArray(operation);
    console.log(operationArray)
    let total = 0;

    // remove inputvisor value

    inputVisor.value = '';

    // if there are multiple "." in a single number, stop the operation, return 0
    // also insert a message "invalid value"

    if(operationArray.some(element => element.split('.').length > 2)) {
        console.log('match')
        inputVisor.value = 'Invalid Value';
        return total
    };

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
            n1 = parseFloat(operationArray[0]);
            operator = operationArray[1];
            n2 = parseFloat(operationArray[2]);

            if (operator === '+') total = sum(n1, n2);
            else if (operator === '-') total = subtr(n1, n2);
            else if (operator === 'X') total = mult(n1, n2);
            else if (operator === '/') total = divide(n1, n2);

            operationArray = operationArray.slice(3);
        } else if (operationArray.length > 1) {
            operator = operationArray[0];
            n1 = total;
            n2 = parseFloat(operationArray[1]);

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

    inputVisor.value = total;
    return total;
}