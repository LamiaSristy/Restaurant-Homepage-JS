const menu = () => {
  const bannerel = document.createElement('div');
  const jumbotronel = document.createElement('div');
  const jumbotrontitleel = document.createElement('h1');
  const jumbotronpel1 = document.createElement('p');
  const jumbotronpel2 = document.createElement('p');
  const jumbotronpel3 = document.createElement('p');
  const jumbotronpel4 = document.createElement('p');
  const jumbotronpel5 = document.createElement('p');
  const jumbotronpel6 = document.createElement('p');
  const jumbotronpel7 = document.createElement('p');
  bannerel.classList.add('banner');
  jumbotronel.classList.add('jumbotron', 'center');
  jumbotrontitleel.classList.add('jumbotrontitleel');
  jumbotronpel1.classList.add('lead');

  jumbotrontitleel.textContent = 'Choose from Our Menu:';
  jumbotronpel1.textContent = 'Continental';
  jumbotronpel2.textContent = 'Japanese';
  jumbotronpel3.textContent = 'Indian';
  jumbotronpel4.textContent = 'Chainese';
  jumbotronpel5.textContent = 'Italian';
  jumbotronpel6.textContent = 'Dutch';
  jumbotronpel7.textContent = 'Mexican';

  bannerel.appendChild(jumbotronel);
  jumbotronel.appendChild(jumbotrontitleel);
  jumbotronel.appendChild(jumbotronpel1);
  jumbotronel.appendChild(jumbotronpel2);
  jumbotronel.appendChild(jumbotronpel3);
  jumbotronel.appendChild(jumbotronpel4);
  jumbotronel.appendChild(jumbotronpel5);
  jumbotronel.appendChild(jumbotronpel6);
  jumbotronel.appendChild(jumbotronpel7);

  return bannerel;
};

export default menu;
