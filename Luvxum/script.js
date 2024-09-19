// Vybereme všechny položky v menu a logo
const menuItems = document.querySelectorAll('.menu ul li');
const logo = document.getElementById('logo');
const menu = document.querySelector('.menu');
const back = document.getElementById('back');

const luvxum = document.getElementById('luvxum');
const luvxumContent = document.getElementById('luvxumContent');
const photo = document.getElementById('photo');
const photoContent = document.getElementById('photoContent');
const illu = document.getElementById('illu');
const illuContent = document.getElementById('illuContent');
const content = document.getElementById('content');

// Přidáme event listener pro každou položku v menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Fade out logo
        logo.classList.add('fade');

        menu.querySelector('ul').classList.add('horizontal');
        back.style.display = 'block';
        menu.style.top = '0'; // Posune menu na vrchol stránky
    });
});

back.addEventListener('click', () => {
    logo.classList.remove('fade', 'fadeBack');
    menu.querySelector('ul').classList.remove('horizontal', 'back');
    back.classList.remove('back');
    back.style.display = 'none';
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'none';
    illuContent.style.display = 'none'
    content.style.display = 'none';
});

luvxum.addEventListener('click', () => {
    content.style.display = 'block';
    luvxumContent.style.display = 'block';
    photoContent.style.display = 'none';
    illuContent.style.display = 'none'
});
photo.addEventListener('click', () => {
    content.style.display = 'block';
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'block';
    illuContent.style.display = 'none'
});
illu.addEventListener('click', () => {
    content.style.display = 'block';
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'none';
    illuContent.style.display = 'block'
});
