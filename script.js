let p1 = document.querySelector('.p1');
let section2 = document.querySelector('.section2');
let p3 = document.querySelector('.p3');
let p2 = document.querySelector('.p2');
let line = document.querySelector('.line');
let image = document.querySelector('.image');

function makeBigger() {
    if (window.scrollY > 30 && window.scrollY <= 150) {
        p1.style.fontSize = `${30+window.scrollY/4}px`;
    }
}

function makeSmaller() {
    if (window.scrollY > 1400 && window.scrollY < 1950) {
        p3.style.fontSize = `${130-(window.scrollY*0.05)}px`;
    }
}

function move() {
    if (window.scrollY > 200 && window.scrollY <= 400) {
        p2.style.left = `${100+window.scrollY/2}px`;
        line.style.left = `${100+window.scrollY/2}px`;
        line.style.width = `${200+window.scrollY/2}px`;
        image.style.right = `${100+window.scrollY/2}px`;
    }
}
window.addEventListener('scroll', makeBigger);
window.addEventListener('scroll', makeSmaller);
window.addEventListener('scroll', move);


p1.addEventListener('mousedown', () => {
    section2.scrollIntoView({
        behavior: 'smooth'
    })
    event.target.style.color = 'red';
})
p1.addEventListener('mouseup', () => {
    event.target.style.color = 'rgb(71, 68, 68)';
})

p3.addEventListener('mousedown', () => {
    event.target.style.color = 'red';
    window.scroll({
        top: 0,
        behavior: 'smooth',
    })
})
p3.addEventListener('mouseup', () => {
    event.target.style.color = 'rgb(71, 68, 68)';
})