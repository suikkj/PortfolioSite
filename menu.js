let botãoMenu = document.getElementById('abrirmenu')
let Menu = document.getElementById('menumobile')
let overlay = document.getElementById('overlay-menu')

botãoMenu.addEventListener('click', ()=>{
    Menu.classList.add('Abrir-Menu')

})

Menu.addEventListener('click', ()=>{
    Menu.classList.remove('Abrir-Menu')

})
overlay.addEventListener('click', ()=>{
    Menu.classList.remove('Abrir-Menu')

})
