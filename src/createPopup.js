import hidenItems from './hidenItems.js';

const mainCont = document.querySelector('.container-food-cards');

const closePopup = (elem) => {
  mainCont.classList.toggle('no-grid');
  hidenItems();
  mainCont.removeChild(elem);
};

const createPopup = () => {
  const myPopup = document.createElement('div');
  const popupText = document.createElement('span');
  const popupButon = document.createElement('button');
  myPopup.id = 'myPopup';
  popupText.innerText = 'Popup text...';
  popupButon.innerHTML = 'X';
  popupButon.addEventListener('click', () => closePopup(myPopup));
  myPopup.classList.add('popuptext');
  myPopup.classList.toggle('show');
  mainCont.classList.toggle('no-grid');
  myPopup.appendChild(popupText);
  myPopup.appendChild(popupButon);
  mainCont.appendChild(myPopup);
};

export { createPopup as default };