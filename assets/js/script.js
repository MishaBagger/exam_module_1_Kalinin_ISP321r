document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".swiperBagger", {
        spaceBetween: 30,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: ".swiper-pagination",
        },
        mouseWheel: true,
        keyboard: true,
    });

    let burgerClick = document.getElementById("burger-click");
    let burgerToggle = document.getElementById("burger-toggle");
    let mobile = document.getElementById("mobile");
    let modal = document.getElementById("modal");
    const registerIds = document.querySelectorAll('[id^="register"]');

    registerIds.forEach(function (element) {
        element.addEventListener("click", function (e) {
        modal.classList.toggle("open");
        });
    });

    burgerClick.addEventListener("click", function (e) {
        mobile.classList.toggle("open");
        burgerToggle.classList.toggle("burger-toggle");
        burgerClick.classList.toggle("burger-click");
    });

    const modalContainer = document.querySelector(".modal__container");
    let modal__close = document.getElementById('modal__close')
    
    modalContainer.addEventListener("click", function (e) {
        if (e.target == modal__close) {
            modal.classList.toggle("open");
        }
    });


    let aboutModal = document.querySelector('.about__modal')
    let about__close = document.getElementById('about__close')
    about__close.addEventListener('click', function (e) {
        aboutModal.classList.toggle('open')
    })

    const moreButtons = document.querySelectorAll('.more:not(.register)');

    moreButtons.forEach((button) => {
        button.addEventListener('click', function() {
          aboutModal.classList.toggle('open');
      
          const card = button.closest('.card__container');
          const title = card.querySelector('.card__title').textContent;
          const text = card.querySelector('.card__text').textContent;
      
          aboutModal.querySelector('.title').textContent = title
          aboutModal.querySelector('.text').textContent = text;
        });
      });
      
      
});