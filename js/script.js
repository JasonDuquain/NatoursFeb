
let bttBtn = document.querySelector('.bttBtn');

let heights = [document.documentElement.scrollHeight, document.body.scrollHeight, document.body.clientHeight];

let topHeight = Math.max(...heights);

document.addEventListener('scroll', (e) => {
    (document.documentElement.scrollTop >= topHeight / 3) ? bttBtn.classList.add('visible') : bttBtn.classList.remove('visible');
});

bttBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
});