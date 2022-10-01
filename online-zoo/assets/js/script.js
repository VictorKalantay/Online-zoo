let dotsCollection = document.querySelectorAll('.pay__dot')
const changeDotClass = () => {
    dotsCollection.forEach(dot => {
        dot.addEventListener('click', event => {
            dotsCollection.forEach(dot => {
                if (dot.classList.contains('active')) {
                    dot.classList.remove('active')
                }
            })
            let currentDot = event.currentTarget
            currentDot.classList.add('active')
        })
    })
}
changeDotClass()


//-------------------------------------------------
// меню бургер


const iconBurger = document.querySelector('.header__burger');
const navMenu = document.querySelector('.nav__container');
const logo = document.querySelector('.logo__container')
const currentLink = document.querySelector('.nav__link--current')
if (iconBurger) {
    iconBurger.addEventListener("click", function () {
        iconBurger.classList.toggle('active');
        navMenu.classList.toggle('active');
        logo.classList.toggle('active')
        currentLink.classList.toggle('nav__link--current')
    });
}

if (iconBurger.classList.contains('active')) { //Если бургер развернут то уберем класс
    iconBurger.classList.remove('active');
    navMenu.classList.remove('active');
    logo.classList.remove('active')
}
