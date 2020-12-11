const navbar = () => {
  const header = document.createElement('div');
  const navul = document.createElement('ul');
  const navli1 = document.createElement('li');
  const navli2 = document.createElement('li');
  const navli3 = document.createElement('li');
  const nava1 = document.createElement('a');
  const nava2 = document.createElement('a');
  const nava3 = document.createElement('a');

  navul.classList.add('nav', 'navbar-light');
  navli1.classList.add('nav-item');
  navli2.classList.add('nav-item');
  navli3.classList.add('nav-item');
  nava1.classList.add('nav-link', 'active');
  nava2.classList.add('nav-link');
  nava3.classList.add('nav-link');

  nava1.id = 'home';
  nava2.id = 'menu';
  nava3.id = 'contact';

  nava1.textContent = 'Home';
  nava2.textContent = 'Menu';
  nava3.textContent = 'Contact';

  header.appendChild(navul);
  navul.appendChild(navli1);
  navul.appendChild(navli2);
  navul.appendChild(navli3);
  navli1.appendChild(nava1);
  navli2.appendChild(nava2);
  navli3.appendChild(nava3);

  return header;
};

export default navbar;