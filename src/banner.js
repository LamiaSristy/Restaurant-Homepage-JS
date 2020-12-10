const banner = () => {

    const bannerel = document.createElement('div');
    const jumbotronel = document.createElement('div');
    const jumbotrontitleel = document.createElement('h1');
    const jumbotronpel1 = document.createElement('p');
    const jumbotronpel2 = document.createElement('p');
    const hrel = document.createElement('hr');
    const bookbutton = document.createElement('button');
    bannerel.classList.add('banner', 'banner-show', 'active');
    jumbotronel.classList.add('jumbotron', 'center');
    jumbotrontitleel.classList.add('jumbotrontitleel');
    jumbotronpel1.classList.add('lead');
    hrel.classList.add('my-4');
    bookbutton.classList.add('btn', 'btn-primary', 'btn-lg');

    jumbotrontitleel.textContent = 'Wellcome.';
    jumbotronpel1.textContent =`Stop, eat and go! Now you're eating! What are you eating today? It's Good Mood Food!`;
    jumbotronpel2.textContent = 'We provide all the foods from our best pantries and you can also take away.';
    bookbutton.textContent = 'Book a table';
    
    bannerel.appendChild(jumbotronel);
    jumbotronel.appendChild(jumbotrontitleel);
    jumbotronel.appendChild(jumbotronpel1);
    jumbotronel.appendChild(hrel);
    jumbotronel.appendChild(jumbotronpel2);
    jumbotronel.appendChild(bookbutton);   

    return bannerel;    
  };

  export default banner;