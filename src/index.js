import './style.css';
import getAllData from './getDataFood.js';

// links to get data from food api
const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
// const allPastaURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta';
// const allSeafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

// // link to likes and message store api

// const projectID = 'cq8n4ydnTGepOHztUKmY';
// const likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/likes/';
// const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments';


getAllData(allBeefURL);
