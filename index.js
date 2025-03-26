const buttons = document.querySelectorAll('button');
const operations = ['+', '-', '*', '/'];
let calculation = '';
let monitorElem = document.querySelector('.monitor');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (operations.includes(button.textContent)) {
            calculation += ` ${button.textContent} `;
        } else if (button.textContent === '=') {
            calculation = eval(calculation).toFixed(2);
        } else if (button.textContent === 'Clear') {
            calculation = '0'
        } else {
            if (calculation[0] === '0') {
                calculation = button.textContent;
            } else {
                calculation += button.textContent;
            }
        }
        monitorElem.innerHTML = calculation
        console.log(calculation);
    });
});


