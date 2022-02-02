import getItemData from './createPopup.js';
import hidenItems from './hidenItems.js';

// function display an array of objects
const displayData = (arr) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';

  arr.forEach((food) => {
    const item = document.createElement('div');
    item.innerHTML = `<img src="${food.strMealThumb}" width="250px"><h5>${food.strMeal}</h5>`;
    item.id = food.idMeal;
    item.classList.add('items');
    // event listener just for test
    item.addEventListener('click', () => {
      getItemData(food);
      hidenItems();
    });
    board.appendChild(item);
  });
};

// function to get images and title
const getAllData = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;

  displayData(responsInfo);
};

export { getAllData as default };
