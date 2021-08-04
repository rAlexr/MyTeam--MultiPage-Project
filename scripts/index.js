const cell = document.querySelector('.directors__container')

cell.addEventListener('click', e => {
    
    if(e.target.tagName === 'I') {
        console.log(e.target)
        //sa ii aflu parinte la I
        const parinte = e.target.parentElement
        console.log(parinte)
        //selectez amandoi child
        const copii = parinte.children
        console.log(copii)
        //verific la primu child daca are clasa de visibil, daca o are ii pun none
        Array.from(copii).forEach((temp) => {
            if(temp.tagName === 'DIV') {
              console.log('elementul savlat in temp este', temp)  
              //la al doi-lea child fac acelas lucru, doar ca opus
              if(!temp.classList.contains('disp__non')) {
                    temp.classList.add('disp__non')  
              }else{
                  temp.classList.remove('disp__non')
              }
            }
        })
    }
});