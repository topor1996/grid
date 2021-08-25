window.addEventListener('DOMContentLoaded', function () {

gsap.from('.hero__left', {opacity:0, duration: 1, delay: 1, y:30})
gsap.from('.hero__descr', {opacity:0, duration:2, delay: 2 })
gsap.from('.img-one', {opacity:0, duration:1, delay:2})
gsap.from('.img-two', {opacity:0, duration:1, delay:2.3})
gsap.from('.img-three', {opacity:0, duration:1, delay:2.6})
gsap.from('.photos__author', {opacity:0, duration:1, delay:2.6})



let burger = document.querySelector('.burger');
let menuIsOpen = false; // tracks state

/* -----------------------------
// MENU IN ANIMATION
----------------------------- */

const menuIn = gsap.timeline({
    paused: true
});


menuIn.fromTo('.menu', {
    x: 0,
    y: 0,
    zIndex:-1,
    display: "none"
}, {
    duration: .2,
    opacity:1,
    x: 0,
    y: -300,
    zIndex: 7,
    display: "block"
})


menuIn.fromTo('.photos', {
  x: 0,
  y: 0,
}, {

  x: 0,
  y: 0,
  zIndex: 1,
})


menuIn.fromTo('.menu__nav', {
   x: 0,
   y: 0,
   opacity:0
}, {
   duration: .2,
   opacity:1,
   x: 0,
   y: 0,
})

menuIn.fromTo('.menu__right,.social', {
  x: 0,
  y: 0,
  opacity:0
}, {
  duration:.25,
  opacity:1,
  x: 0,
  y: 0,

})





/* -----------------------------
// MENU OUT  ANIMATION
----------------------------- */

let menuOut = gsap.timeline({
    paused: true
});

menuOut.to('.menu', {
    duration: .5,
    opacity: 0,
    zIndex:-1,
    display: "none"
})



// /* -----------------------------
// // ADD EVENT LISTER
// ----------------------------- */

burger.addEventListener('click', () => {
  menuIsOpen = !menuIsOpen; // toggle
  if (menuIsOpen) {
    menuIn.restart();
  } else {
    menuOut.restart();
  }
});

let burgernew = document.querySelector('.close');

menuOut.to('.menu', {
  duration: .5,
  opacity: 0,
  zIndex:-1,
  display: "none"
})

burgernew.addEventListener('click', () => {
  menuIsOpen = !menuIsOpen; // toggle
  if (menuIsOpen) {
    menuIn.restart();
  } else {
    menuOut.restart();
  }
});



})

