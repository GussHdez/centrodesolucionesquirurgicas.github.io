$(document).ready(function() {
    
    $(window).resize(function() {
    console.log($(window).width());
        if($('body').innerWidth() < 756) {
       
             $('#cardCarousel').carousel({
                interval: 5000
              })

             $('.cardCarouselInner').each(function(){
                  var minPerSlide = 3;
                  var next = $(this).next();
                  if (!next.length) {
                  next = $(this).siblings(':first');
                  }
                  next.children(':first-child').clone().appendTo($(this));

                  for (var i=0;i<minPerSlide;i++) {
                      next=next.next();
                      if (!next.length) {
                        next = $(this).siblings(':first');
                      }

                      next.children(':first-child').clone().appendTo($(this));
                    }
                });
    
            
        } else {
            
            $('#cardCarousel').carousel({
                interval: false
              })

            $('.cardCarouselInner').each(function(){
                  var minPerSlide = 3;
                  var next = $(this).next();
                  if (!next.length) {
                  next = $(this).siblings(':first');
                  }
                  next.children(':first-child').clone().appendTo($(this));

                  for (var i=0;i<minPerSlide;i++) {
                      next=next.next();
                      if (!next.length) {
                        next = $(this).siblings(':first');
                      }

                      next.children(':first-child').clone().appendTo($(this));
                    }
                });
        } 
        
    }).resize();
  
});
