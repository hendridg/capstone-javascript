import getItemData from './createPopup.js';
import hidenItems from './hidenItems.js';
import { addLikeToItem, getLikesToItems } from './likeDataApi.js';

// function display an array of objects
const displayData = (arr) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';
  arr.forEach((food) => {
    const item = document.createElement('article');
    item.id = food.idMeal;

    item.classList.add('card-food');
    item.innerHTML = `
        <div class="card-title">
          <h5>${food.strMeal}</h5>
        </div>        
        <button type="button" class="btn-recipe">Recipe</button>
        <div>        
        </div>
        <div class="btn-liked">
          Like
        </div>
        <div class="card-img">
         <img src="${food.strMealThumb}" class="img-food">        
        </div>     
    `;

    const btnRecipeElement = item.querySelector('.btn-recipe');
    const btnLikedElement = item.querySelector('.btn-liked');
    const printLike = (data) => {
      const likesReturned = data.find(
        // eslint-disable-next-line comma-dangle
        (element) => element.item_id === food.idMeal
      );
      // eslint-disable-next-line operator-linebreak
      btnLikedElement.innerHTML =
        likesReturned !== undefined
          ? `<i class="fas fa-heart"></i> (${likesReturned.likes})`
          : '<i class="far fa-heart"></i> (0)';
    };
    getLikesToItems()
      .then(printLike)
      .catch((e) => console.log(e));

    btnRecipeElement.addEventListener('click', () => {
      getItemData(food.idMeal);
      hidenItems();
    });
    btnLikedElement.addEventListener('click', () => {
      addLikeToItem(food.idMeal);
      getLikesToItems()
        .then(printLike)
        .catch((e) => console.log(e));
    });
    board.appendChild(item);
  });
};

export const displayCounter = (typeFoodSelected, count) => {
  typeFoodSelected.innerHTML = `${typeFoodSelected.textContent} (${count})`;
};

// function to get images and title
const getAllData = async (url, typeFoodSelected) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responseInfo = responseJson.meals;
  displayCounter(typeFoodSelected, responseInfo.length);
  displayData(responseInfo);
};

export { getAllData as default };
