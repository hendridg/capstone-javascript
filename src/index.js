import './style.css';
import getAllData from './getDataFood.js';

// eslint-disable-next-line operator-linebreak
const [liBeefElement, liPastaElement, liSeafoodElement] =
  document.querySelectorAll('li');
let typeFoodSelected = liBeefElement;
// links to get data from food api
const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const allPastaURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta`;
const allSeafoodURL = `
  https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

// link to likes and message store api
// const projectID = 'cq8n4ydnTGepOHztUKmY';
// const likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/likes/';

liBeefElement.addEventListener('click', () => {
  typeFoodSelected = liBeefElement;
  liBeefElement.classList.add('selected');
  liPastaElement.classList.remove('selected');
  liSeafoodElement.classList.remove('selected');
  typeFoodSelected.textContent = 'Beef';
  liPastaElement.textContent = 'Pasta';
  liSeafoodElement.textContent = 'Seafood';
  getAllData(allBeefURL, typeFoodSelected);
});

liPastaElement.addEventListener('click', () => {
  typeFoodSelected = liPastaElement;
  liPastaElement.classList.add('selected');
  liBeefElement.classList.remove('selected');
  liSeafoodElement.classList.remove('selected');
  typeFoodSelected.textContent = 'Pasta';
  liBeefElement.textContent = 'Beef';
  liSeafoodElement.textContent = 'Seafood';
  getAllData(allPastaURL, typeFoodSelected);
});

liSeafoodElement.addEventListener('click', () => {
  typeFoodSelected = liSeafoodElement;
  liSeafoodElement.classList.add('selected');
  liBeefElement.classList.remove('selected');
  liPastaElement.classList.remove('selected');
  typeFoodSelected.textContent = 'Seafood';
  liBeefElement.textContent = 'Beef';
  liPastaElement.textContent = 'Past';
  getAllData(allSeafoodURL, typeFoodSelected);
});

getAllData(allBeefURL, typeFoodSelected);
