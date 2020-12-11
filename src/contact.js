const contact = () => {
  const bannerel = document.createElement('div');
  const jumbotronel = document.createElement('div');
  const jumbotrontitleel = document.createElement('h1');
  const jumbotronpel1 = document.createElement('p');
  const jumbotronpel2 = document.createElement('p');
  const jumbotronpel3 = document.createElement('p');
  const jumbotronpel4 = document.createElement('p');
  const jumbotronpel5 = document.createElement('p');
  const bookbutton = document.createElement('button');
  bannerel.classList.add('banner');
  jumbotronel.classList.add('jumbotron', 'center');
  jumbotrontitleel.classList.add('jumbotrontitleel');
  jumbotronpel1.classList.add('lead');
  bookbutton.classList.add('btn', 'btn-primary', 'btn-lg');

  jumbotrontitleel.textContent = 'About US';
  jumbotronpel1.textContent = 'We are obliged to provide you with the freash and tasy foods.';
  jumbotronpel2.textContent = 'Address';
  jumbotronpel3.textContent = '3029AD, Galvanistraat';
  jumbotronpel4.textContent = 'RotterDam, South Holland';
  jumbotronpel5.textContent = 'Phone : +00000000';
  bookbutton.textContent = 'Give us a call';

  bannerel.appendChild(jumbotronel);
  jumbotronel.appendChild(jumbotrontitleel);
  jumbotronel.appendChild(jumbotronpel1);
  jumbotronel.appendChild(jumbotronpel2);
  jumbotronel.appendChild(jumbotronpel3);
  jumbotronel.appendChild(jumbotronpel4);
  jumbotronel.appendChild(jumbotronpel5);
  jumbotronel.appendChild(bookbutton);

  return bannerel;
};

export default contact;
