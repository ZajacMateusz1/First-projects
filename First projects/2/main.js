const btn = document.querySelector('button');
const inputMoney = document.querySelector('input.money');
const inputPeople = document.querySelector('input.people');
const select = document.querySelector('select');
const p = document.querySelector('p');

const disableOption = () => {
    select.options[0].disabled = true;
};
const calculate = e => {
    e.preventDefault();
    let money = 0;
    switch (select.value) {
        case '1':
            money = inputMoney.value * 1.1;
            break;
        case '2':
            money = inputMoney.value * 1.25;
            break;
        case '3':
            money = inputMoney.value * 1.2;
            break;
        case '4':
            money = inputMoney.value * 1.25;
            break
        case '0':
            money = inputMoney.value;
    }
    if (inputPeople.value && inputMoney.value) {
        p.textContent = `Każdy musi zapłacić: ${(money/inputPeople.value).toFixed(2)} zł!!!`;
    }
    else {
        alert('Uzupełnij wszystkie pozycje');
    }
}

select.addEventListener('click',disableOption)
btn.addEventListener('click',calculate)
