$(function(){
  new WOW().init();

  if ($(window).width() < 1380) {
    $('body').addClass('hidden');
} else {
    $('body').removeClass('hidden');
}
 
  const mMenuBtn = $(".burger__menu");
  const mMenu = $(".mobile__menu");


  mMenuBtn.on('click', function() {
    mMenu.toggleClass('active');
   
  });



});
