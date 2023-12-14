'use strict';

window.addEventListener('DOMContentLoaded', () => {
    ////////////////////////// Tabs /////////////////////////////
    const tabsWrapper = document.querySelector('.ourWorks__items'),
                 tabs = document.querySelectorAll('.ourWorks__item'),
          tabsContent = document.querySelectorAll('.ourWorks__tabContent');
    
    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('ourWorks__item-active');
        });
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('ourWorks__item-active');
    }

    hideTabContent();
    showTabContent();

    tabsWrapper.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('ourWorks__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });

    ////////////////////////// Боковое меню /////////////////////////////

    const close = document.querySelector('.sideMenu__close'),
       sideMenu = document.querySelector('.sideMenu'),
      hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        if (!sideMenu.classList.contains('sideMenu__active')) {
            sideMenu.classList.add('sideMenu__active');
        } else {
            sideMenu.classList.remove('sideMenu__active');
        }
    });

    close.addEventListener('click', () => {
        sideMenu.classList.remove('sideMenu__active');
    });

    ////////////////////////// Ссылки в верхнем меню /////////////////////////////
    const links = document.querySelectorAll('.header__link'),
         header = document.querySelector('.header'),
          about = document.querySelector('.about'),
       services = document.querySelector('.services'),
         brands = document.querySelector('.brands'),
       ourWorks = document.querySelector('.ourWorks'),
     ourMasters = document.querySelector('.ourMasters'),
         prices = document.querySelector('.prices'),
       contacts = document.querySelector('.contacts');

    ourMasters.classList.add('ourMasters__none');
    prices.classList.add('prices__none');
    contacts.classList.add('contacts__none');

    links[1].addEventListener('click', () => {
        contacts.classList.add('contacts__none');
        prices.classList.add('prices__none');
        ourMasters.classList.remove('ourMasters__none');
        header.classList.add('header__none');
        about.classList.add('about__none');
        services.classList.add('services__none');
        brands.classList.add('brands__none');
        ourWorks.classList.add('ourWorks__none');
        links[1].classList.add('header__link-active');
        links[3].classList.remove('header__link-active');
        links[5].classList.remove('header__link-active');
    });

    links[0].addEventListener('click', () => {
        contacts.classList.add('contacts__none');
        ourMasters.classList.add('ourMasters__none');
        header.classList.remove('header__none');
        about.classList.remove('about__none');
        services.classList.remove('services__none');
        brands.classList.remove('brands__none');
        ourWorks.classList.remove('ourWorks__none');
        links[0].classList.remove('header__link-active');
        links[1].classList.remove('header__link-active');
        links[3].classList.remove('header__link-active');
        links[5].classList.remove('header__link-active');
    });

    links[3].addEventListener('click', () => {
        contacts.classList.add('contacts__none');
        prices.classList.remove('prices__none');
        ourMasters.classList.add('ourMasters__none');
        header.classList.add('header__none');
        about.classList.add('about__none');
        services.classList.add('services__none');
        brands.classList.add('brands__none');
        ourWorks.classList.add('ourWorks__none');
        links[0].classList.remove('header__link-active');
        links[1].classList.remove('header__link-active');
        links[5].classList.remove('header__link-active');
        links[3].classList.add('header__link-active');
    });

    links[5].addEventListener('click', () => {
        contacts.classList.remove('contacts__none');
        prices.classList.add('prices__none');
        ourMasters.classList.add('ourMasters__none');
        header.classList.add('header__none');
        about.classList.add('about__none');
        services.classList.add('services__none');
        brands.classList.add('brands__none');
        ourWorks.classList.add('ourWorks__none');
        links[0].classList.remove('header__link-active');
        links[1].classList.remove('header__link-active');
        links[3].classList.remove('header__link-active');
        links[5].classList.add('header__link-active');
    });

});