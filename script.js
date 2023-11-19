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