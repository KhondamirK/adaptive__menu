let ul=$('ul');
let red=$('.red');
let black=$('.black');
let closeBtn= $('.close');
let closeRed=$('.close-red');
let closeWhite=$('.close-white');
let times=$('fa-times');

let btn=$('.burger');


function showMenu(){
   black.addClass('active');
   setTimeout(() => {
      red.addClass('active')

      setTimeout(() => {
         ul.addClass('active')

         setTimeout(() => {
            closeBtn.addClass('active')
         }, 500);
      }, 300);


   }, 200);
}

function hideMenu(){
   closeBtn.removeClass('active')
   
   setTimeout(() => {
      ul.removeClass('active')

      setTimeout(() => {
       red.removeClass('active')
       setTimeout(() => {
          black.removeClass('active')
       }, 300);
      }, 200);


   }, 500);
}



closeBtn.mouseenter(()=>{
   closeRed.addClass('active')
   setTimeout(() => {
      closeWhite.addClass('active')
      times.addClass('active')
   }, 300);

})
closeBtn.mouseleave(()=>{
   times.removeClass('active')
   closeWhite.removeClass('active')
   setTimeout(() => {
      closeRed.removeClass('active')
   }, 300);
})