const cell = document.querySelector('.directors__container');
const visibil = document.querySelector('.cell__visibile');
const invisibil = document.querySelector('.cell__invisible');

cell.addEventListener('click', e => {
    
    if(e.target.tagName === 'I') {
        const parinte = e.target.parentElement;
        let firstChild = parinte.children[0];
        let secondChild = parinte.children[1];
        firstChild.classList.add('disp__non');
        secondChild.classList.remove('disp__non');
        
        
        let clasFirst = firstChild.className.split(' ');
        console.log(firstChild, secondChild, clasFirst[1]);
    }
});

