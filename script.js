var menu = document.querySelector("#menu");
var close = document.querySelector("#cross");
// var tl = gsap.timeline();
var herotl = gsap.timeline();

// tl.to(".side-menu", {
//   right: 0,
// });
// tl.from(".side-menu h4", {
//   x: 150,
//   duration: 0.7,
//   stagger: 0.28,
//   opacity: 0,
// });
// tl.from(".side-menu i", {
//   opacity: 0,
// });
// tl.pause();

// menu.addEventListener("click", function () {
//   tl.play();
// });
// cross.addEventListener("click", function () {
//   tl.reverse();
// });

herotl.from(".jimmy", {
  y: 20,
  duration: 0.8,
  opacity: 0,
});
herotl.from(".left-text h1",{
    y: 20,
    duration: 1,
    opacity:0
})
herotl.from(".left-text p",{
    y: -10,
    opacity: 0,
    duration: 1,
});
herotl.from(".hero-btn",{
  opacity:0,
  duration:-0.5,  
})
herotl.to(".hero-btn",{
    opacity:1,
})
herotl.from(".man",{
    opacity: 0,
})
herotl.from(".ae, .pr",{
    opacity: 0,
})

gsap.to(".pr, .ae",{
    y:10,
    duration:1.2,
    repeat: -1,
    ease: "none",
    yoyo:true,
})
gsap.to(".marque",{
    transform: "translateX(-100%)",
    duration: 10,
    ease: "none",
    repeat: -1,
})
gsap.to("#man",{
    y:2,
    ease: "none",
    repeat: -1,
    yoyo: true,
    duration:2,
})
gsap.from(".abt-head",{
    opacity:0,
    duration: .7,
    y: 20,
    scrollTrigger:{
        scroller: "body",
        trigger: ".abt-head",
        // markers: true,
        start: "top 63%"
    }
});
gsap.from(".abt-cont p",{
    opacity:0,
    duration: .7,
    delay:.4,
    y: 20,
    scrollTrigger:{
        scroller: "body",
        trigger: ".abt-head",
        // markers: true,
        start: "top 63%"
    }
});
gsap.to(".marque2",{
    transform: "translateX(-100%)",
    duration: 10,
    ease: "none",
    repeat: -1,
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});