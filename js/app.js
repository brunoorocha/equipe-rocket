$(function() {
    $("#header-nav li a").click(function(e){
        var cur = $(this);

        $('html, body').animate({
          scrollTop: $("."+cur.attr("id")+"").offset().top - 120
        }, 1000);
    });
});

$(window).scroll(function(){
    if($(this).scrollTop() > 550 && $(this).scrollTop() < 700) {
        $(".active").removeClass("active");
        $("#missao").addClass("active");
    } else if($(this).scrollTop() > 700 && $(this).scrollTop() < 1200) {
        $(".active").removeClass("active");
        $("#equipe").addClass("active");
    } else if($(this).scrollTop() > 1200) {
        $(".active").removeClass("active");
        $("#contato").addClass("active");
    } else {
        $(".active").removeClass("active");
    }
});

function parallax() {
    var planetBlue = document.getElementById('planet-blue');
    var planetRed  = document.getElementById('planet-red');
    var header     = document.getElementById('header');

    planetBlue.style.top = -(window.pageYOffset / 4) + 'px';
    planetRed.style.top = -window.pageYOffset + 'px';

    if(window.pageYOffset > (window.innerHeight - 200)) {
        header.setAttribute('class', 'background-apply');
    } else {
        header.setAttribute('class', '');
    }
}

window.addEventListener('scroll', parallax, false);
