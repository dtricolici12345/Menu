require('es6-promise').polyfill();
import tabs from "./modules/tabs";
import modal, { openModal } from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import slider from "./modules/slider";
import forms from "./modules/forms";


window.addEventListener('DOMContentLoaded' , () => {
  const modalTimerId = setTimeout(() => openModal('.modal',  modalTimerId), 300000);
  
  tabs(".tabheader__item",".tabcontent", ".tabheader__items", "tabheader__item_active"); 
  modal('[data-modal]','.modal'); 
  timer('.timer', '2024-12-31');
  cards(); 
  calc(); 
  slider({
    container: '.offer__slider',
    nextArrow :'.offer__slider-next', 
    prevArrow:'.offer__slider-prev', 
    totalCounter: '#total', 
    currentCounter: '#current',
    slide: '.offer__slide',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  }); 
  forms('form', modalTimerId); 
})

