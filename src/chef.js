const chef = () => {
    
    const chefel = document.createElement('div');   
    const cheftitleel = document.createElement('h3');
    const chefintro = document.createElement('div');
    const chefbio = document.createElement('p');
    const img = document.createElement("IMG");

    chefel.classList.add('chef');    
    chefintro.classList.add('chef-intro');
    chefbio.classList.add('chef-bio');
    img.classList.add('chef-img');
    
    cheftitleel.textContent = 'Talk to our expert chef!';
    chefbio.textContent = 'Meet Our expert chef Miss Sarah Jane, who is an American chef, restaurateur, cookbook writer, filmmaker and humanitarian. She is one of the judges of Star World series MasterChef America. She is based in New York City.'
    img.setAttribute('src', './img/chef.jpg');

    
    chefel.appendChild(cheftitleel);
    chefel.appendChild(chefintro);
    chefintro.appendChild(chefbio);
    chefintro.appendChild(img);
      

    return chefel;    
  };

  export default chef;