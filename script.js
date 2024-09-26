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
    back.style.display = 'none';
    luvxum.classList.remove('redText');
    photo.classList.remove('redText');
    illu.classList.remove('redText');
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'none';
    illuContent.style.display = 'none';
});

luvxum.addEventListener('click', () => {
    luvxum.classList.add('redText');
    photo.classList.remove('redText');
    illu.classList.remove('redText');
    content.style.display = 'block';
    luvxumContent.style.display = 'block';
    photoContent.style.display = 'none';
    illuContent.style.display = 'none';
    content.style.columns = 'auto';
});
photo.addEventListener('click', () => {
    luvxum.classList.remove('redText');
    photo.classList.add('redText');
    illu.classList.remove('redText');
    content.style.display = 'block';
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'block';
    illuContent.style.display = 'none';
    content.style.columns = '300px';
});
illu.addEventListener('click', () => {
    luvxum.classList.remove('redText');
    photo.classList.remove('redText');
    illu.classList.add('redText');
    content.style.display = 'block';
    luvxumContent.style.display = 'none';
    photoContent.style.display = 'none';
    illuContent.style.display = 'block';
    content.style.columns = '300px';v
});

// Funkce na kontrolu, zda obrázek existuje
function imageExists(url, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
}

function loadImages(path, contentClass, i = 1) {
    const parts = path.split('/'); // Rozdělí cestu na části podle '/'
    const folder = parts.slice(0, parts.length - 1).join('/') + '/'; // Složka
    const filename = parts[parts.length - 1]; // Celý název souboru (např. 'budova1.png')
    
    // Regulární výraz pro oddělení prefixu a čísla
    const match = filename.match(/([^\d]+)(\d+)\.(.+)/);
    
    if (!match) {
        console.error('Název souboru neodpovídá očekávanému formátu.');
        return; // Konec, pokud název nesplňuje formát
    }

    const prefix = match[1]; // Prefix (např. 'budova')
    const extension = match[3]; // Přípona (např. 'png')

    const imageUrl = `${folder}${prefix}${i}.${extension}`; // Vytvoří URL pro obrázek

    imageExists(imageUrl, function(exists) {
        if (exists) {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = `${prefix}${i}`; // Nastaví alt text
            document.querySelector('.' + contentClass).appendChild(imgElement);
            i++; // Zvyší počítadlo a zkusí další obrázek

            loadImages(path, contentClass, i); // Správné volání funkce
        } else {
            console.log(`Obrázek ${imageUrl} neexistuje. Konec načítání obrázků.`);
        }
    });
}

// Přidáme event listener pro obrázek "backImg"
document.addEventListener('DOMContentLoaded', function() {
    const backImage = document.getElementById('backImg');
    backImage.addEventListener('mouseover', function() {
        backImage.src = 'Obrazky/back/backT.png'; // Změní obrázek při hoveru
    });
    backImage.addEventListener('mouseout', function() {
        backImage.src = 'Obrazky/back/backF.png'; // Vrátí původní obrázek
    });
    content.style.display = 'none';

    // Volání funkce pro načítání obrázků
    loadImages('Obrazky/budovy/budova1.png', 'photoContent');
    loadImages('Obrazky/ilustrace/illu1.png', 'illuContent');
    loadImages('Obrazky/budovy/budova1.png', 'photoContent');
    loadImages('Obrazky/ilustrace/illu1.png', 'illuContent');
});


