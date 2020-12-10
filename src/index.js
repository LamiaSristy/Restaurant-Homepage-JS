import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
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

homeBtn.onclick = () => {
  bannerEl.classList.add('banner-show');
  menuEl.classList.remove('banner-show');
  contactEl.classList.remove('banner-show');
};

menuBtn.onclick = () => {
  bannerEl.classList.remove('banner-show');
  menuEl.classList.add('banner-show');
  contactEl.classList.remove('banner-show');
};

contactBtn.onclick = () => {
  bannerEl.classList.remove('banner-show');
  menuEl.classList.remove('banner-show');
  contactEl.classList.add('banner-show');
};

const parent = document.createElement('div');
parent.appendChild(bannerEl);
parent.appendChild(menuEl);
parent.appendChild(contactEl);

const varcuisine = cuisinelist();
document.getElementById('content').appendChild(parent);
document.getElementById('content').appendChild(cuisine(varcuisine));
document.getElementById('content').appendChild(chef());
  