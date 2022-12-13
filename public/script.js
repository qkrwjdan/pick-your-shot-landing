window.onload = () => {
  let scene = new ScrollMagic.Scene({
    triggerHook: 0,
    triggerElement: "#trigger",
    duration: "100%",
  })
    .setTween(
      TweenMax.to(".animate", 1, {
        y: -500,
      })
    )
    .setPin("#trigger");

  let scene2 = new ScrollMagic.Scene({
    triggerHook: 0.25,
    triggerElement: "#trigger2",
    duration: "50%",
  }).setTween(
    TweenMax.to(".animate2", 0.5, {
      x: "-20rem",
    })
  );

  let scene3 = new ScrollMagic.Scene({
    triggerHook: 0.25,
    triggerElement: "#trigger3",
    duration: "100%",
  }).setTween(
    TweenMax.to(".animate3", 0.5, {
      x: "-40rem",
    })
  );

  let controller = new ScrollMagic.Controller();
  controller.addScene(scene);
  controller.addScene(scene2);
  controller.addScene(scene3);
};

function cb() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

cb();
windoaddEventListener("resize", cb);
