    // Span buttons

const span = document.querySelectorAll('.more');
const firstLine = document.querySelector('.span-line-1');
const secondLine = document.querySelector('.span-line-2');

span.forEach(function(e) {
    e.addEventListener('mouseenter', function(item) {
        const style = item.currentTarget.classList;
        if(style.contains('more-1')) {
            firstLine.classList.add('first-line-hover');
        }
        else {
            secondLine.classList.add('second-line-hover');
        }
    });
    e.addEventListener('mouseleave', function(item) {
        const style = item.currentTarget.classList;
        if(style.contains('more-1')) {
            firstLine.classList.remove('first-line-hover');
        }
        else {
            secondLine.classList.remove('second-line-hover');
        }
    });
});

    // Hamburger menu

const hamburgerButton = document.querySelector('.menu-button');
const hamburger = document.querySelector('.hamburger');
const hamburgerContainer = document.querySelector('.hamburger-container');

let hamburgerMenuActive = () => {
    hamburgerContainer.classList.toggle('active');
};

hamburgerButton.addEventListener('click', hamburgerMenuActive);