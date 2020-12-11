import './stylesheet/style.css';
import navbar from './navbar';
import banner from './banner';
import cuisinelist from './cuisinelist';
import cuisine from './cuisine';
import chef from './chef';
import menu from './menu';
import contact from './contact';

const bannerEl = banner();
const menuEl = menu();
const contactEl = contact();

document.body.prepend(navbar());
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

const parent = document.createElement('div');
parent.appendChild(bannerEl);
parent.appendChild(menuEl);
parent.appendChild(contactEl);

const varcuisine = cuisinelist();
document.getElementById('content').appendChild(parent);
document.getElementById('content').appendChild(cuisine(varcuisine));
document.getElementById('content').appendChild(chef());

const displayOnClicked = (ind) => {
  const pageEl = [bannerEl, menuEl, contactEl];
  const buttons = [homeBtn, menuBtn, contactBtn];
  pageEl.forEach((li, index) => {
    if (index === ind) {
      li.classList.add('banner-show');
      buttons[index].classList.add('active');
    } else {
      li.classList.remove('banner-show');
      buttons[index].classList.remove('active');
    }
  });
};

homeBtn.onclick = () => {
  displayOnClicked(0);
};

menuBtn.onclick = () => {
  displayOnClicked(1);
};

contactBtn.onclick = () => {
  displayOnClicked(2);
};
