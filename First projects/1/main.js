const input = document.querySelector('input.drink');
const ul = document.querySelector('section.search ul')
let drinks = document.querySelectorAll('section.search ul li');
drinks = [...drinks];



const searchDrink = () => {
    const filteredDrinks = drinks.filter((drink)=>{
        return drink.textContent.toLowerCase().includes(input.value.toLowerCase())
    })
    ul.textContent = '';
    filteredDrinks.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.textContent;
        ul.appendChild(li);
    });
};

input.addEventListener('input',searchDrink)