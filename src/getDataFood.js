// links to get data from food api
const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const allPastaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta';
const allSeafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='; // you need to add item id at end url

// link to likes and message store api
const projectID = 'cq8n4ydnTGepOHztUKmY';
const likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/likes/';
const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments';
const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments?item_id='; // you need to add item id at end of url

// function to get images and title
const getAllData = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;

  displayData(responsInfo);
};

// function display an array of objects
const displayData = (arr) => {
  const board = document.getElementById('food');
  board.innerHTML = '';

  arr.forEach((food) => {
    const item = document.createElement('div');
    item.innerHTML = `<img src="${food.strMealThumb}" width="250px"><h5>${food.strMeal}</h5>`;
    item.id = food.idMeal;
    board.appendChild(item);
  });
};

const showBeef = getAllData(allBeefURL);

export {showBeef as default};