const hidenItems = () => {
  const items = document.querySelectorAll('.card-food');
  items.forEach((e) => {
    e.classList.toggle('hiden');
  });
};

export { hidenItems as default };