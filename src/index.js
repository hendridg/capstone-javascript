import './style.css';
import getAllData from './getDataFood.js';

// links to get data from food api
const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
// const allPastaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta';
// const allSeafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
// const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='; // you need to add item id at end url

// // link to likes and message store api

// const projectID = 'cq8n4ydnTGepOHztUKmY';
// const likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/likes/';
// const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments';
// const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments?item_id='; // you need to add item id at end of url

getAllData(allBeefURL);
