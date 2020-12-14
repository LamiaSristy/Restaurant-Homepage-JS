const chef = () => {
  const chefEl = document.createElement('div');
  const cheftitleel = document.createElement('h3');
  const chefintro = document.createElement('div');
  const chefbio = document.createElement('p');
  const imgdiv = document.createElement('div');
  const img = document.createElement('IMG');

  chefEl.classList.add('chef');
  chefintro.classList.add('row', 'chef-intro');
  chefbio.classList.add('chef-bio', 'col-12', 'col-md-8');
  imgdiv.classList.add('col-12', 'col-md-4');
  img.classList.add('chef-img');

  cheftitleel.textContent = 'Talk to our expert chef!';
  chefbio.textContent = 'Meet Our expert chef Miss Sarah Jane, who is an American chef, restaurateur, cookbook writer, filmmaker and humanitarian. She is one of the judges of Star World series MasterChef America. She is based in New York City.';
  img.setAttribute('src', './img/chef.jpg');

  chefEl.appendChild(cheftitleel);
  chefEl.appendChild(chefintro);
  chefintro.appendChild(chefbio);
  chefintro.appendChild(imgdiv);
  imgdiv.appendChild(img);

  return chefEl;
};

export default chef;
