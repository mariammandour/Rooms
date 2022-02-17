$(window).on('load', function() { 
    
    $('.vimg').click( function(){
        if($('video').get(0).paused==true){
            $('video').get(0).play();
        }
        else{$('video').get(0).pause();
        }
    });  
    $('video').on('play', function () {
        $('.vimg').css('display','none')
    });
    // nav
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}

});