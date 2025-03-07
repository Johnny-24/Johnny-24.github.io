document.addEventListener('DOMContentLoaded', function(){
  const burger = document.querySelector('.burger')
        mobileMenu = document.querySelector('.mobile-menu')
        mobileMenuClose = document.querySelector('.mobile-menu__close')

  burger.addEventListener("click", function(){
    mobileMenu.classList.add('isActive');
  })

  mobileMenuClose.addEventListener("click", function(){
    mobileMenu.classList.remove('isActive');
  })
});