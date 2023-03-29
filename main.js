
const container = document.querySelector('.img-slider_section');

document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})
