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