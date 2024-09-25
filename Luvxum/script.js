// Vybereme všechny položky v menu a logo
const menuItems = document.querySelectorAll('.menu ul li');
const logo = document.getElementById('logo');
const menu = document.querySelector('.menu');
const back = document.getElementById('back');
back.style.display = 'none';

const luvxum = document.getElementById('luvxum');
const luvxumContent = document.getElementById('luvxumContent');
const photo = document.getElementById('photo');
const photoContent = document.getElementById('photoContent');
const illu = document.getElementById('illu');
const illuContent = document.getElementById('illuContent');
const content = document.getElementById('content');
luvxumContent.style.display = 'none';
photoContent.style.display = 'none';
illuContent.style.display = 'none';

// Přidáme event listener pro každou položku v menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        logo.classList.add('fade');
        menu.classList.add('up');
        back.style.display = 'block';
        menu.style.top = '0';
        content.classList.add('contentIn');
        if(item.id != 'back'){
            setTimeout(() => {
                logo.style.display = 'none';
              }, 200);
        }
    });
});

back.addEventListener('click', () => {
    logo.style.display = 'block';
    logo.classList.remove('fade');
    menu.classList.remove('up');
    back.classList.remove('back');
    content.classList.remove('contentIn');
    luvxum.style.color = 'white';
    photo.style.color = 'white';
    illu.style.color = 'white';
    back.style.display = 'none';
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'none';
    illuContent.style.display = 'none';
});

luvxum.addEventListener('click', () => {
    luvxum.style.color = 'red';
    photo.style.color = 'white';
    illu.style.color = 'white';
    content.style.display = 'block';
    luvxumContent.style.display = 'block';
    photoContent.style.display = 'none';
    illuContent.style.display = 'none';
});
photo.addEventListener('click', () => {
    luvxum.style.color = 'white';
    photo.style.color = 'red';
    illu.style.color = 'white';
    content.style.display = 'block';
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'block';
    illuContent.style.display = 'none';
});
illu.addEventListener('click', () => {
    luvxum.style.color = 'white';
    photo.style.color = 'white';
    illu.style.color = 'red';
    content.style.display = 'block';
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'none';
    illuContent.style.display = 'block';
});
