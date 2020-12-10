
const cuisine = (array) => {
  const menuel = document.createElement('div');  
  menuel.classList.add('menu');
  const cardeck = document.createElement('div');
  cardeck.classList.add('card-deck');
  const menutitleel = document.createElement('h2');

  for (let i = 0; i < array.length; i += 1) {
    const menuC = array[i];   

    //card    
    const cardel = document.createElement('div');
    const img = document.createElement("IMG");
    const cardbodyel = document.createElement('div');
    const titleel = document.createElement('div');
    const descriptionel = document.createElement('div');
    const priceel = document.createElement('div');

        
   //adding class  
   cardel.classList.add('card');
   img.classList.add('card-img-top');
   cardbodyel.classList.add('card-body');
   titleel.classList.add('card-title');
   descriptionel.classList.add('card-text');
   priceel.classList.add('card-text', 'text-muted');
   
   // Data insertion   
   menutitleel.textContent = 'We Have variety of Cuisines from all around the world!!!';
   img.setAttribute('src', menuC.icon );
   titleel.textContent = menuC.title;
   descriptionel.textContent = menuC.description;
   priceel.textContent = `start from : $${menuC.price}`;

    //Organogram
    menuel.appendChild(menutitleel);
    menuel.appendChild(cardeck);
    cardeck.appendChild(cardel);
    cardel.appendChild(img);
    cardel.appendChild(cardbodyel);
    cardbodyel.appendChild(titleel);
    cardbodyel.appendChild(descriptionel);
    cardbodyel.appendChild(priceel);
  }  
 
  return menuel;  
};

export default cuisine;