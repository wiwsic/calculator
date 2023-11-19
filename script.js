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

function operate(operation) {

    // take the operation string, and separate in to numbers and operators
    // transform the information in an array, so for example the string 10+2-5
    // will be [10,'+',2,'-',5]

    let operationArray = [];

    // remove inputvisor value

    inputVisor.value = '';

    // Com o array montado, vamos iterar todo o array seguindo as seguintes regras
    // 1. O index 0 transforma o valor em número com parseInt, avalia o index 1 para saber o operador
    //    e efetua a operação com o valor do index 2
    // 2. Esse valor é armazenado em uma variavel "total"
    // 3. index 0,1,2 são removidos do array
    // 4. Se o lenght do array for 0, retorna o total
    // 5. Se o lenght do array for >=2, a variavel total vai usar o operador do index 0, e
    //    "adicionar" o index 1 ao total. Por exemplo total = total * 10
    // 6. index 0 e 1 são removidos do array
    // 7. Se o lenght do array for 0, retorna o total
    // 8. Caso contrário, as etapas 5 e 6 são repetidadas até o array ser 0




    


}