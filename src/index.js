import './style.css';
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

homeBtn.onclick = () => {
  bannerEl.classList.add('banner-show');
  menuEl.classList.remove('banner-show');
  contactEl.classList.remove('banner-show');
  homeBtn.classList.add('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');
};

menuBtn.onclick = () => {
  bannerEl.classList.remove('banner-show');
  menuEl.classList.add('banner-show');
  contactEl.classList.remove('banner-show');
  homeBtn.classList.remove('active');
  menuBtn.classList.add('active');
  contactBtn.classList.remove('active');
};

contactBtn.onclick = () => {
  bannerEl.classList.remove('banner-show');
  menuEl.classList.remove('banner-show');
  contactEl.classList.add('banner-show');
  homeBtn.classList.remove('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.add('active');
};