const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listAll = document.querySelector('#ingredients');

let fragment = new DocumentFragment();

for (const value of ingredients){
  const ingredientList = document.createElement('li');
        ingredientList.classList.add('item');
        ingredientList.textContent += value;

  fragment.appendChild(ingredientList);
};

listAll.append(fragment);
console.log (listAll);

