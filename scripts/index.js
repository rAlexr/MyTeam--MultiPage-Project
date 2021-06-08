const cell = document.querySelector('.directors__container');
const visibil = document.querySelector('.cell__visibile');
const invisibil = document.querySelector('.cell__invisible');

cell.addEventListener('click', e => {
    if(e.target.tagName === 'I') {
        const parinte = e.target.parentElement;
        visibil.style.display = 'none';
        invisibil.classList.remove('disp__non');
        console.log(parinte);
    } 
});