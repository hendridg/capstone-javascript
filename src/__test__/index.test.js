import { displayCounter } from '../getDataFood.js';
import { countComment } from '../displayComents.js';

beforeAll(() => {
  document.body.innerHTML = `  
  <div class="container">
    <header>
        <div class="logo">
            <h1>Logo Page</h1>
        </div>
        <nav class="nav-bar">
            <ul class="nav-bar-list">
                <li class="selected">Beef</li>
                <li>Pasta</li>
                <li>Seafood</li>
            </ul>
        </nav>
    </header>
    <main class="container-food-cards">
    </main>
    <footer>
        <h4>&copy; Created by Microverse under CC license</h4>
    </footer>
  </div>
  `;
});

describe('Check counter all item function', () => {
  test('Should be show Beef (42) ', () => {
    const beefElement = document.querySelector('li');
    displayCounter(beefElement, 42);
    expect(beefElement.textContent).toEqual('Beef (42)');
  });
});

describe('Check comments counter function', () => {
  test('Title header shows Comments (3)', () => {
    const container = document.querySelector('.container-food-cards');
    container.innerHTML = `<h3>Comments</h3>
    <div><span>New comment 1</span></div>
    <div><span>New comment 2</span></div>
    <div><span>New comment 3</span></div>`;
    const title = document.querySelector('h3');
    const array = document.querySelectorAll('span');

    countComment(array, title);

    expect(title.innerHTML).toEqual('Comments (3)');
  });
});
