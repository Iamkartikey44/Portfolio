const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const skillContent = document.getElementsByClassName('skills_content'),
    skillHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let item_class = this.parentNode.className
    for (i = 0; i < skillContent.length; i++) {
        skillContent[i].className = "skills_content skills_close"
    }
    if (item_class === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click',() => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link')
        }


    })
}
window.addEventListener('scroll',scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

function scrollUp(){
    const scrollUp  = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon =  localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' 
const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add'  : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add'  : 'remove'](iconTheme)
}


themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})