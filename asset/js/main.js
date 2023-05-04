$(function(){

 /**
 * 
 *  intro
 */

//  text 객체로 나누기
   const text = document.querySelector('.intro .text');
   text.innerHTML = text.innerText.split("").map(
    (char, i) => 
    `<span style="transform:rotate(${i * 8.5}deg)">${char}</span>`
   ).join("")

  // bg
  $('.intro .circle').click(function(e){
    e.preventDefault();

   $('.intro').addClass('active');
    
    text.innerHTML = text.innerText.split("").map(
      (char, i) => 
      `<span style="display:none">${char}</span>`
    ).join("")
  });
  

  /**
 * 
 *  반응형
 */
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function() {
      gsap.from('.profile .point',{
        scrollTrigger:{
          trigger:'.profile .point',
          start: "50% 50%",
          end: "+=100",
          pin: '.profile',
          // markers:true,
          scrub:1
        },
        xPercent: 210
      });

      gsap.from('.introduce .desc',{
        scrollTrigger:{
          trigger:'.introduce .desc',
          start: "top bottom",
          end: "bottom 30%",
          pin: '.introduce',
          // markers:true,
          scrub:1
        },
        yPercent: 250,
      });
    }, 
    
    "(max-width: 768px)": function() {

      gsap.from('.introduce .desc',{
        scrollTrigger:{
          trigger:'.introduce .title',
          start: "top 20%",
          end: "bottom top",
          pin: '.introduce',
          // markers:true,
          scrub:1
        },
        yPercent: 350,
      });
      
    }
  });




  /**
 * 
 * portfolio
 */
    // isotope(배열 플러그인)
    const gird = $('.item-area').isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });
  
    $('.nav button').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
  
      const selector = $(this).attr('data-filter');
      gird.isotope({
        filter: selector
      });
  
      return false;
  
    })

    // text up
    gsap.to('.portfolio .sc-title .text',{
      scrollTrigger:{
        trigger: '.portfolio .sc-title .text',
        start: "top 80%",
        end:"bottom 70%",
        // markers: true,
      },
      yPercent: -100,
    })


  /**
 * 
 *  scroll event
 */
    $(window).scroll(function(){
      curr = $(this).scrollTop();
      target = $('.portfolio').offset().top;
      pagedown = $('.profile').offset().top;
      
      if( curr >= target ){
        $('.header-inner .text').addClass('hide')
      }else{
        $('.header-inner .text').removeClass('hide')
      };

      if( curr >= pagedown ){
        $('.scroll-box').addClass('hide')
      }else{
        $('.scroll-box').removeClass('hide')
      };

      if ( curr > 50 ) {
        $('header').addClass('active')
      } else {
        $('header').removeClass('active')
      }
      
    });



  /**
 * 
 *  viewport
 */

  function setScreenSize(){

      let vh = window.innerHeight * 0.01;
  
      document.documentElement.style.setProperty('--vh',`${vh}px`);
  }
  
    setScreenSize();
    window.addEventListener('resize',setScreenSize);






});
