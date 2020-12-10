const arrows = document.querySelector('.left-content')

arrows.addEventListener('click', (e) => {
    // read classes 
    const menuClass = e.target.classList

    // select containers 
    const containers = document.querySelector('.app')
    const leftArrow = document.querySelector('.fa-arrow-left')
    const rightArrow = document.querySelector('.fa-arrow-right')

    // hide or show arrows and add/remove no-menu class
    if (menuClass.contains('fa-arrow-left')) {
        containers.classList.add('no-menu')
        e.target.style.display = 'none'; 
        rightArrow.style.display = 'block';
    } else if(menuClass.contains('fa-arrow-right')){
        containers.classList.remove('no-menu')
        e.target.style.display = 'none';
        leftArrow.style.display = 'block';
    }
})
