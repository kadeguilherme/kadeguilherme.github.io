const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    

  })


  var dots = Array.from(document.querySelectorAll(".dot"))
  
  dots[0].classList.add("active")

  var container = document.querySelector(".swiper");

  slides = Array.from(document.querySelectorAll('.swiper-slide'))

  const element = document.createElement('swiper-slide')

  container.addEventListener("touchstart", startTouch, false);
  container.addEventListener("touchmove", moveTouch, false);

  // Left / Right
  var initialX = null;
  var initialY = null;

  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

  function moveTouch(e) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        num = 3

        slides.forEach((slide,index)=> {
          
          var ariaLabel = slide.ariaLabel;
          
          if(slide.classList.contains("swiper-slide-active")){
            ordem = parseInt((ariaLabel.substring(0,1)))
            if(ordem === 4){
              dots[3].classList.remove("active")
              dots[0].classList.add("active")
            }else{
              dots[ordem-1].classList.remove("active")
              dots[ordem].classList.add("active")
            
            }
                       
          }
   
        })
      } else {
     
        slides.forEach((slide,index)=> {

          var ariaLabel = slide.ariaLabel;
        
          if(slide.classList.contains("swiper-slide-active")){
            
            ordem = parseInt((ariaLabel.substring(0,1)))
            
            if(ordem == 1){
                num = 3;
                
                dots[3].classList.add("active")
                dots[0].classList.remove("active")
            
            }else{
              num = num -1
              dots[num].classList.add('active')
              dots[num+1].classList.remove('active')
            }
          }
          
        })
      }  
    } 

    initialX = null;
    initialY = null;

    e.preventDefault();
  };


  // slider = document.querySelectorAll('.swiper-slide');







