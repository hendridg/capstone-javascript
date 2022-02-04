import hidenItems from './hidenItems.js';
import { displayComents, getComments } from './displayComents.js';
import newMessageForm from './newComent.js';

const mainCont = document.querySelector('.container-food-cards');

const closePopup = (elem) => {
  mainCont.classList.toggle('no-grid');
  hidenItems();
  mainCont.removeChild(elem);
};

// function to display popup
const createPopup = (details, msgDat) => {
  const myPopup = document.createElement('div');
  const popupButon = document.createElement('button');
  const itemdata = document.createElement('div');
  itemdata.classList.add('mesgFormContainer');
  const messageContainer = document.createElement('div');
  messageContainer.id = 'mesgContainer';
  messageContainer.classList.add('mesgFormContainer');
  const newMessCont = document.createElement('div');
  newMessCont.classList.add('mesgFormContainer');
  displayComents(msgDat, messageContainer);
  newMessageForm(newMessCont, details.idMeal);

  itemdata.innerHTML = `<img src="${details.strMealThumb}" width="250px"><h2>${details.strMeal}</h2><h4>Ingredients:</h4><p>${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ${details.strIngredient4}, ${details.strIngredient5}</p><h4>Recipe:</h4>
  <p class="recipe">${details.strInstructions}</p>`;
  itemdata.id = details.idMeal;
  myPopup.id = 'myPopup';
  popupButon.innerHTML = 'X';
  popupButon.addEventListener('click', () => closePopup(myPopup));
  myPopup.classList.add('popuptext');
  myPopup.classList.toggle('show');
  mainCont.classList.toggle('no-grid');
  myPopup.appendChild(popupButon);
  myPopup.appendChild(itemdata);
  myPopup.appendChild(messageContainer);
  myPopup.appendChild(newMessCont);
  mainCont.appendChild(myPopup);
};

// function to get each element data
const getItemData = async (id) => {
  const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const request = new Request(foodItemDataURL + id);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals[0];

  const messageData = await getComments(id);

  createPopup(responsInfo, messageData);
};

export { getItemData as default };
