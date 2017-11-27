function parallax() {
    var planetBlue = document.getElementById('planet-blue');
    var planetRed  = document.getElementById('planet-red');
    var header     = document.getElementById('header');

    planetBlue.style.top = -(window.pageYOffset / 4) + 'px';
    planetRed.style.top = -(window.pageYOffset / 2) + 'px';

    if(window.pageYOffset > (window.innerHeight - 200)) {
        header.setAttribute('class', 'background-apply');        
    } else {
        header.setAttribute('class', '');
    }
}

window.addEventListener('scroll', parallax, false);
