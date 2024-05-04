(function(){
    const menuButton = document.querySelector('.menu__button')
    const menu = document.querySelector('.full-menu')
    const menuItems = document.querySelectorAll('.resp-menu__item')

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('open')
    }) 

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', function() {
            menu.classList.toggle('open')
        })
    })

})()