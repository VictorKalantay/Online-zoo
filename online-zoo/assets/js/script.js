const dotsCollection = document.querySelectorAll('.pay__dot')
const inputField = document.querySelector('.feed__input')
if (inputField) {
    inputField.value = 100
}
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
    if (inputField) {
        inputField.addEventListener('input', () => {
            inputField.value = inputField.value.slice(0, 4)
            dotsCollection.forEach(dot => {
                dot.classList.remove('active')
                if (inputField.value === dot.getAttribute('data-pay')) {

                    dot.classList.add('active')

                }
            })
        })
    }


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
//---- Слайдер---------------------------------------------------
const prevBt = document.querySelector('.cards-button.prev')
const nextBt = document.querySelector('.cards-button.next')
const allCards = document.querySelectorAll('.backstage__card')
let currentIndex = 0
if(prevBt) {
    prevBt.addEventListener('click', () => {
        const windowInnerWidth = window.innerWidth
        console.log('prev click')
        console.log(windowInnerWidth)
        if(windowInnerWidth > 640) {
            let arrFromDom = Array.from(allCards)
            console.log(arrFromDom)
        }
//получили массив....финдим первый с эктив классом.....берем его индекс...финдим посл. без эктив. меняим у них классы....для превиуса наоборот...посл


        allCards.forEach((card, index) => {





        })

    })
}
//------------------------------
alert('Адаптив на брейкпоинтах: 1000px, 640px, 320px')