$(window).scroll(function(){
    let currentScrollTop = $(this).scrollTop();
    currentScrollTop > 0 ? $('.header').addClass('fixed') : $('.header').removeClass('fixed')
});

