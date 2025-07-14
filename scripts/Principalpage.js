 let index = 0 
 const track = document.querySelector('.My_imgCarouseltrack'); 
 const imgs = document.querySelectorAll('.My_imgCarouseltrack img');
 const totalimg = imgs.length;

 function showNextImage() {

index = (index +1) % totalimg;
track.style.transform = `translateX( -${ index * 7   }vw )`;

 }

 setInterval(showNextImage, 3000);