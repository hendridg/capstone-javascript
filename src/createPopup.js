import hidenItems from './hidenItems.js';

const mainCont = document.querySelector('.container-food-cards');

const closePopup = (elem) => {
  mainCont.classList.toggle('no-grid');
  hidenItems();
  mainCont.removeChild(elem);
};

// function to display popup
const createPopup = (element, details) => {
  const myPopup = document.createElement('div');
  const popupButon = document.createElement('button');
  const itemdata = document.createElement('div');
  itemdata.innerHTML = `<img src="${element.strMealThumb}" width="250px"><h5>${element.strMeal}</h5><p>Ingredients: ${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ${details.strIngredient4}, ${details.strIngredient5}</p>`;
  itemdata.id = element.idMeal;
  myPopup.id = 'myPopup';
  popupButon.innerHTML = 'X';
  popupButon.addEventListener('click', () => closePopup(myPopup));
  myPopup.classList.add('popuptext');
  myPopup.classList.toggle('show');
  mainCont.classList.toggle('no-grid');
  myPopup.appendChild(popupButon);
  myPopup.appendChild(itemdata);
  mainCont.appendChild(myPopup);
};

// function to get each element data
const getItemData = async (elem) => {
  const id = elem.idMeal;
  const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const request = new Request(foodItemDataURL + id);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals[0];

  createPopup(elem, responsInfo);
};

export { getItemData as default };