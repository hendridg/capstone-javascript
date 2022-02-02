const hidenItems = () => {
  const items = document.querySelectorAll('.items');
  items.forEach((e) => {
    e.classList.toggle('hiden');
  });
};

export { hidenItems as default };