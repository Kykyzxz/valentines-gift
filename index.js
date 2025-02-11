
const card = document.querySelector('.card');
const btn = document.querySelector('.btn-div');

btn.addEventListener('click', () => {
    card.style.transform = 'rotateY(180deg)';
});