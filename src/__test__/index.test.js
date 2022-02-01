beforeAll(() => {
  document.body.innerHTML = `  
    <h1 class='title'>Webpack Config</h1>
  `;
});
describe('Check testing config', () => {
  test('Should be h1 element ', () => {
    const h1Element = document.querySelector('h1');
    expect(h1Element.textContent).toEqual('Webpack Config');
  });
});
