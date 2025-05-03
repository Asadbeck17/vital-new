
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const moreBtn = document.querySelector('.more-btn');
const aboutUs = document.querySelector('.about-us');
const item_1 = document.getElementById('item-1');
const item_2 = document.getElementById('item-2');
const item_3 = document.getElementById('item-3');
const item_4 = document.getElementById('item-4');
const item_5 = document.getElementById('item-5');
const moreBtn_1 = document.getElementById('moreBtn-1');
const moreBtn_2 = document.getElementById('moreBtn-2');
const moreBtn_3 = document.getElementById('moreBtn-3');
const moreBtn_4 = document.getElementById('moreBtn-4');
const moreBtn_5 = document.getElementById('moreBtn-5');
const addBtn = document.querySelector('.add-btn');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

moreBtn.addEventListener('click', () => {
    const moreInfo = document.querySelector('.more-info');
    moreInfo.classList.toggle('active');
    if (moreInfo.classList.contains('active')) {
        moreBtn.textContent = 'Kamroq ←';
        moreInfo.classList.add('more-info-active');
        aboutUs.classList.add('about-us-height');
    } else {
        moreBtn.textContent = 'Ko\'proq →';
        moreInfo.classList.remove('more-info-active');
        aboutUs.classList.remove('about-us-height');
    }

});

item_1.addEventListener('click', () => {
    const moreText1 = document.querySelector('.more-text-1');
    moreText1.classList.toggle('active');
    if (moreText1.classList.contains('active')) {
        moreBtn_1.textContent = 'Kamroq ←';
        moreText1.classList.add('more-text-active');
        item_1.classList.add('acc-content-item-size');
    } else {
        moreBtn_1.textContent = 'Ko\'proq →';
        moreText1.classList.remove('more-text-active');
        item_1.classList.remove('acc-content-item-size');
    }
});

item_2.addEventListener('click', () => {
    const moreText2 = document.querySelector('.more-text-2');
    moreText2.classList.toggle('active');
    if (moreText2.classList.contains('active')) {
        moreBtn_2.textContent = 'Kamroq ←';
        moreText2.classList.add('more-text-active');
        item_2.classList.add('acc-content-item-size');
    } else {
        moreBtn_2.textContent = 'Ko\'proq →';
        moreText2.classList.remove('more-text-active');
        item_2.classList.remove('acc-content-item-size');
    }
});

item_3.addEventListener('click', () => {
    const moreText3 = document.querySelector('.more-text-3');
    moreText3.classList.toggle('active');
    if (moreText3.classList.contains('active')) {
        moreBtn_3.textContent = 'Kamroq ←';
        moreText3.classList.add('more-text-active');
        item_3.classList.add('acc-content-item-size-3');
    } else {
        moreBtn_3.textContent = 'Ko\'proq →';
        moreText3.classList.remove('more-text-active');
        item_3.classList.remove('acc-content-item-size-3');
    }
});

item_4.addEventListener('click', () => {
    const moreText4 = document.querySelector('.more-text-4');
    moreText4.classList.toggle('active');
    if (moreText4.classList.contains('active')) {
        moreBtn_4.textContent = 'Kamroq ←';
        moreText4.classList.add('more-text-active');
        item_4.classList.add('acc-content-item-size');
    } else {
        moreBtn_4.textContent = 'Ko\'proq →';
        moreText4.classList.remove('more-text-active');
        item_4.classList.remove('acc-content-item-size');
    }
});

item_5.addEventListener('click', () => {
    const moreText5 = document.querySelector('.more-text-5');
    moreText5.classList.toggle('active');
    if (moreText5.classList.contains('active')) {
        moreBtn_5.textContent = 'Kamroq ←';
        moreText5.classList.add('more-text-active');
        item_5.classList.add('acc-content-item-size');
    } else {
        moreBtn_5.textContent = 'Ko\'proq →';
        moreText5.classList.remove('more-text-active');
        item_5.classList.remove('acc-content-item-size');
    }
});

addBtn.addEventListener('click', () => {
    const addMore = document.querySelector('.add-more');
    addMore.classList.toggle('active');
    if (addMore.classList.contains('active')) {
        addBtn.textContent = 'Kamroq ←';
        addMore.classList.add('add-text');
    } else {
        addBtn.textContent = 'Ko\'proq →';
        addMore.classList.remove('add-text');
    }
});
