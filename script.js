//--RESPONSIVE HEADER & HAMBURGUER====//
const hamburguer = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav-menu')
hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
})
//===== GALLERY ===========//
const gallery = document.querySelector('#gallery')
const popup = document.querySelector('#popup')
const selectedImage = document.querySelector('#selectedImage')
const desc = document.querySelector('.item-descricao')
const imageIndexes = [1, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const selectedIndex = null
var i = 0
imageIndexes.forEach((i) => {
    const image = document.createElement('img')
    image.src = `./images/img-${i}.jpg`
    gallery.appendChild(image)
    image.classList.add('galleryImg')
    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)'
        selectedImage.src = `./images/img-${i}.jpg`
        switch (i) {
            case 1:
                desc.innerHTML = 'Um armarinho top com fundo cinza kk'
                break
            case 2:
                desc.innerHTML = 'uma mesa redonda e impossível de se colocar dentro de casa'
                break
            case 3:
                desc.innerHTML = 'Um guarda-roupa sem portas e com roupas sem personalidade'
                break
            case 4:
                desc.innerHTML = 'um bench sobre grama artificial'
                break
            case 5:
                desc.innerHTML = 'um banco sem graça demtro um estudio'
                break
            case 6:
                desc.innerHTML = 'uma foto de cozinha achada na internet, nessa hora eu já estava sem motivação e creatividade'
                break
            case 7:
                desc.innerHTML = 'Já praticamente sem criatividade...'
                break
            case 8:
                desc.innerHTML = 'Cozinha de madeira'
                break
            case 9:
                desc.innerHTML = 'A mesma mesa de antes'
                break
            case 10:
                desc.innerHTML = 'O mesmo armário de antes'
                break
            case 11:
                desc.innerHTML = 'a mesma cozinha de madeira'
                break
            case 12:
                desc.innerHTML = 'banco de quintal'
                break
        }
    })
})

//======== BUTTON =========//

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    window.open('index2.html', 'self')
})

//======== HIDE POPUP ========//
popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)'
    popup.src = ''
    desc.innerHTML = ''
})
