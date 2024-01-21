let water = document.querySelector('#water')
let air = document.querySelector('#air')
let smallBottle = document.querySelectorAll('.smallBottle')

smallBottle[0].addEventListener('click', () => {
    water.style.height = '12.5%'
    air.style.height = '87.5%'
    water.innerHTML = '12.5%'
    air.innerHTML = '1.75 l'
    smallBottle[0].style.backgroundColor = '#457B9D'
    for (let index = 1; index < smallBottle.length; index++) {
        smallBottle[index].style.backgroundColor = '#F1FAEE'
    }
})

smallBottle[1].addEventListener('click', () => {
    water.style.height = '25%'
    air.style.height = '75%'
    water.innerHTML = '25%'
    air.innerHTML = '1.5 l'
    smallBottle[0,1].style.backgroundColor = '#457B9D'
    for (let index = 2; index < smallBottle.length; index++) {
        smallBottle[index].style.backgroundColor = '#F1FAEE'
    }
})

smallBottle[2].addEventListener('click', () => {
    water.style.height = '37.5%'
    air.style.height = '62.5%'
    water.innerHTML = '37.5%'
    air.innerHTML = '1.25 l'
    for (let index = 0; index < 3; index++) {
        smallBottle[index].style.backgroundColor = '#457B9D'
    }
    for (let index = 3; index < smallBottle.length; index++) {
        smallBottle[index].style.backgroundColor = '#F1FAEE'
    }
})

smallBottle[3].addEventListener('click', () => {
    water.style.height = '50%'
    air.style.height = '50%'
    water.innerHTML = '50%'
    air.innerHTML = '1 l'
    for (let index = 0; index < 4; index++) {
        smallBottle[index].style.backgroundColor = '#457B9D'
    }
    for (let index = 4; index < smallBottle.length; index++) {
        smallBottle[index].style.backgroundColor = '#F1FAEE'
    }
})

smallBottle[4].addEventListener('click', () => {
    water.style.height = '62.5%'
    air.style.height = '37.5%'
    water.innerHTML = '62.5%'
    air.innerHTML = '0.75 l'
    for (let index = 0; index < 5; index++) {
        smallBottle[index].style.backgroundColor = '#457B9D'
    }
    for (let index = 5; index < smallBottle.length; index++) {
        smallBottle[index].style.backgroundColor = '#F1FAEE'
    }
})

smallBottle[5].addEventListener('click', () => {
    water.style.height = '75%'
    air.style.height = '25%'
    water.innerHTML = '75%'
    air.innerHTML = '0.5 l'
    for (let index = 0; index < 6; index++) {
        smallBottle[index].style.backgroundColor = '#457B9D'
    }
    for (let index = 6; index < smallBottle.length; index++) {
        smallBottle[index].style.backgroundColor = '#F1FAEE'
    }
})

smallBottle[6].addEventListener('click', () => {
    water.style.height = '87.5%'
    air.style.height = '12.5%'
    water.innerHTML = '87.5%'
    air.innerHTML = '0.25 l'
    for (let index = 0; index < 7; index++) {
        smallBottle[index].style.backgroundColor = '#457B9D'
    }
    for (let index = 7; index < smallBottle.length; index++) {
        smallBottle[index].style.backgroundColor = '#F1FAEE'
    }
})

smallBottle[7].addEventListener('click', () => {
    water.style.height = '100%'
    air.style.height = '0%'
    water.innerHTML = '100%'
    air.innerHTML = ''
    for (let index = 0; index < 8; index++) {
        smallBottle[index].style.backgroundColor = '#457B9D'
    }
    for (let index = 8; index < smallBottle.length; index++) {
        smallBottle[index].style.backgroundColor = '#F1FAEE'
    }
})