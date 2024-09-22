$("#owl-carousel-1").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<div><span>PREV</span><img src='assets/images/simple-right-arrow.png'></div>",
    "<div><span>NEXT</span><img src='assets/images/simple-right-arrow.png'></div>",
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    900: {
      items: 2,
    },
  },
});

$("#owl-carousel-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<div><span>PREV</span><img src='assets/images/simple-right-arrow.png'></div>",
    "<div><span>NEXT</span><img src='assets/images/simple-right-arrow.png'></div>",
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
});

document.getElementById("burger-menu").addEventListener("click", function () {
  document.getElementById("resp-menu").classList.add("active");
});
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("resp-menu").classList.remove("active");
});
