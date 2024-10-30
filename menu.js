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


const UpButton = document.
querySelector('.upbutton');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 200 ){
        UpButton.style.display = "flex"
    } else{
        UpButton.style.display = "none"
    }
}

UpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
