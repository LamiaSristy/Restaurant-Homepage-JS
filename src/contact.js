const contact = () => {
  const bannerel = document.createElement('div');
  const jumbotronel = document.createElement('div');
  const jumbotrontitleel = document.createElement('h1');

  const list = ['About US:', 'We are obliged to provide you with the freash and tasy foods.', 'Address', '3029AD, Galvanistraat', 'Rotterdam, Netherlands', 'Phone : +00000000'];
  list.forEach((li, ind) => {
    const paraElement = document.createElement('p');
    if (ind === 0) {
      paraElement.classList.add('lead');
    }
    paraElement.textContent = li;
    jumbotronel.appendChild(paraElement);
  });

  const bookbutton = document.createElement('button');
  bannerel.classList.add('banner');
  jumbotronel.classList.add('jumbotron', 'center');
  jumbotrontitleel.classList.add('jumbotrontitleel');
  bookbutton.classList.add('btn', 'btn-primary', 'btn-lg');
  bookbutton.textContent = 'Give us a call';

  bannerel.appendChild(jumbotronel);
  jumbotronel.appendChild(jumbotrontitleel);
  jumbotronel.appendChild(bookbutton);

  return bannerel;
};

export default contact;
