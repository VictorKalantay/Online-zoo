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
// const prevBt = document.querySelector('.cards-button.prev')
// const nextBt = document.querySelector('.cards-button.next')
// const allCards = document.querySelectorAll('.backstage__card')
// let currentIndex = 0
// // if(prevBt) {
// //     prevBt.addEventListener('click', () => {
// //         const windowInnerWidth = window.innerWidth
// //         console.log('prev click')
// //         console.log(windowInnerWidth)
// //         if(windowInnerWidth > 640) {
// //             let arrFromDom = Array.from(allCards)
// //             console.log(arrFromDom)
// //         }
// // //получили массив....финдим первый с эктив классом.....берем его индекс...финдим посл. без эктив. меняим у них классы....для превиуса наоборот...посл
// //
// //
// //         allCards.forEach((card, index) => {
// //
// //
// //
// //
// //
// //         })
//
//     })
// }
//------------------------------
// alert('Адаптив на брейкпоинтах: 1000px, 640px, 320px')
let randomNumber = Math.ceil(Math.random() * 10 / 3)
console.log(randomNumber)
//-------------------------------
new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.cards-button.next',
        prevEl: '.cards-button.prev'
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: randomNumber,
    mousewheel: true,
    breakpoints: {
        0: {
            direction: 'vertical',
            slidesPerView: 2,
            spaceBetween: 20,
        },
        639: {
            direction: 'horizontal',
            slidesPerView: 2,
        },
        999: {
            slidesPerView: 3,
        }
    }
})
new Swiper('.request__cards-block', {
    direction: 'horizontal',
    slidesPerView: 4,
    mousewheel: true,
    spaceBetween: 30,
    scrollbar: {
        el: '.request__scroll',
        draggable: true,
        dragSize: 75,
    },

    breakpoints: {
        0: {
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 15,
        },
        999: {
            direction: 'horizontal',
            slidesPerView: 3,
            spaceBetween: 32,

        },
        1199: {
            slidesPerView: 4,

        }
    }
})


//-------------------POPUP--------------

const requestCards = document.querySelectorAll('.request .request__card')
const popup = document.querySelector('.popup__wrapper')
const popupContent = document.querySelector('.popup__content')
const closeIco = document.querySelector('.popup__close')
const windowInnerWidth = window.innerWidth
const body = document.body
const closePopup = () => {
    body.classList.remove('scroll-lock')
    popup.classList.remove('visibility')
    popup.classList.remove('active')

}
if(windowInnerWidth <= 640) {
    requestCards.forEach(card => {

        card.addEventListener('click', () => {
            popup.classList.add('active')

            setTimeout(() => {
                popup.classList.add('active')
            }, 0)

            setTimeout(() => {
                popup.classList.add('visibility')
            }, 0)
            //popupContent.innerHTML(clonedContent)
            popupContent.innerHTML = card.innerHTML
            setTimeout(() => {
                body.classList.add('scroll-lock')
            }, 0)
        })
    })
    document.addEventListener("click", (e) => {
        if (e.target == closeIco) {
            closePopup()
        }
        if (!e.target.closest('.popup__content')) {
            closePopup()
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.which === 27) {
            closePopup()
        }
    });
}