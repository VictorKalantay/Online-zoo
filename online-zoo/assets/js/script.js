const dotsCollection = document.querySelectorAll('.pay__dot')
const inputField = document.querySelector('.feed__input')
inputField.value = 100
let currentSum
const changeDotClass = () => {
    dotsCollection.forEach(dot => {
        dot.addEventListener('click', event => {
            currentSum = event.currentTarget.getAttribute('data-pay');
            dotsCollection.forEach(dot => {
                if (dot.classList.contains('active')) {
                    dot.classList.remove('active')
                }
            })
            let currentDot = event.currentTarget
            currentDot.classList.add('active')
            inputField.value = currentSum
        })
    })
    inputField.addEventListener('input', () => {
       inputField.value = inputField.value.slice(0, 4)
        dotsCollection.forEach(dot => {
            dot.classList.remove('active')
                     if(inputField.value === dot.getAttribute('data-pay')) {

                         dot.classList.add('active')

                     }
        })
    })




}
changeDotClass()


//-------------------------------------------------
// меню бургер

const headerArea = document.querySelector('.header__area')
const iconBurger = document.querySelector('.header__burger');
const navMenu = document.querySelector('.header .nav__container');
const logo = document.querySelector('.logo__container')
const currentLink = document.querySelector('.nav__link--current')
if (iconBurger) {
    iconBurger.addEventListener("click", function () {
        iconBurger.classList.toggle('active');
        navMenu.classList.toggle('active');
        logo.classList.toggle('active')
        currentLink.classList.toggle('nav__link--current')
        headerArea.classList.toggle('active')

    });

    headerArea.addEventListener('click', () => {
        iconBurger.classList.toggle('active');
        navMenu.classList.toggle('active');
        logo.classList.toggle('active')
        currentLink.classList.toggle('nav__link--current')
        headerArea.classList.toggle('active')
    })


}

if (iconBurger.classList.contains('active')) { //Если бургер развернут то уберем класс
    iconBurger.classList.remove('active');
    navMenu.classList.remove('active');
    logo.classList.remove('active')
    currentLink.classList.remove('nav__link--current')
    headerArea.classList.toggle('active')


}



//------------------------------
alert('Адаптив на брейкпоинтах: 1000px, 640px, 320px')