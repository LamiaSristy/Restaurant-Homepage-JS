const menu = () => {
  const bannerel = document.createElement('div');
  const jumbotronel = document.createElement('div');

  bannerel.classList.add('banner');
  jumbotronel.classList.add('jumbotron', 'center');

  const list = ['Choose from Our Menu:', 'Continental', 'Japanese', 'Indian', 'Chainese', 'Italian', 'Dutch', 'Mexican'];
  list.forEach((li, ind) => {
    const paraElement = document.createElement('p');
    if (ind === 0) {
      paraElement.classList.add('lead');
    }
    paraElement.textContent = li;
    jumbotronel.appendChild(paraElement);
  });

  bannerel.appendChild(jumbotronel);

  return bannerel;
};

export default menu;
