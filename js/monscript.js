window.addEventListener('DOMContentLoaded', () => {

const tabsParent = document.querySelector('.tabheader__items');
const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');

console.log(tabsParent);
console.log(tabs);
console.log(tabsContent);



function hideTabContent() {
    tabs.forEach((item)=> {
        item.classList.remove('tabheader__item_active')
    })
}


function showContent() {
    tabs.forEach((item) => {
        item.classList.add('tabheader__item_active')
    })
}

