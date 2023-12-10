/* Toggle Style Switcher */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});


// Hide style switcher on scroll
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
});

/* Theme colors */

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}

/* Theme Light and Dark Mode */
const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', () => {
    dayNight.querySelector("img").classList.toggle("night")
    dayNight.querySelector("img").classList.toggle("day")
    document.body.classList.toggle('dark')
});

window.addEventListener('load', () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("img").classList.add("night")
    } else {
        dayNight.querySelector("img").classList.add("day")
    }
})