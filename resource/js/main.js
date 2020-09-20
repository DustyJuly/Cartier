$(function(){
  new WOW().init();
 
  const mMenuBtn = $(".burger__menu");
  const mMenu = $(".mobile__menu");


  mMenuBtn.on('click', function() {
    mMenu.toggleClass('active');
   
  });



});
