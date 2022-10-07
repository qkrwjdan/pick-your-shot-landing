let controller = new ScrollMagic.Controller();

let tween = TweenMax.to(".animate", 0.5, {
  y: -500,
});

let scene = new ScrollMagic.Scene({
  triggerElement: "#trigger",
  duration: "130%",
});
scene.setTween(tween).addTo(controller).addIndicator();
