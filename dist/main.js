const homeBtn = document.getElementById("btn_home"),
    serviceBtn = document.getElementById("btn_service"),
    aboutBtn = document.getElementById("btn_about"),
    pageBtn = document.getElementById("btn_page"),
    blogBtn = document.getElementById("btn_blog"),
    contactBtn = document.getElementById("btn_contact")

const homeNav = document.getElementById('home_nav'),
    serviceNav = document.getElementById('service_nav'),
    aboutNav = document.getElementById('about_nav'),
    pageNav = document.getElementById('page_nav'),
    blogNav = document.getElementById('blog_nav'),
    contactNav = document.getElementById('contact_nav')

homeBtn.addEventListener('click', () => {
    homeNav.style.display = 'block'
} )
serviceBtn.addEventListener('click', () => {
    serviceNav.style.display = 'block'
} )
aboutBtn.addEventListener('click', () => {
    aboutNav.style.display = 'block'
} )
pageBtn.addEventListener('click', () => {
    pageNav.style.display = 'block'
} )
blogBtn.addEventListener('click', () => {
    blogNav.style.display = 'block'
} )
contactBtn.addEventListener('click', () => {
    contactNav.style.display = 'block'
} )