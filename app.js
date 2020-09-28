const tl = gsap.timeline();

tl.from(".black", { duration: 1, y: "-100%" })
  .from(".red", { duration: 0.5, y: "-100%" }, "-=0.5")
  .from(".sideBar", { duration: 0.3, x: -200 }, "-=0.2")
  .from(
    ".sideBar__gsap",
    { duration: 1, y: -200, stagger: "0.1", ease: "elastic.out(1, 0.3" },
    "-=0.1"
  )
  .from(".nav__gsap", { duration: 0.5, y: -200, stagger: "0.1" }, "-=1")
  .from(".image", { duration: 1, x: "200%", ease: "elastic.out(1, 0.3" }, "-=1")
  .from(
    ".content__gsap",
    { duration: 0.5, y: 200, stagger: "0.1", opacity: 0 },
    "-=0.6"
  )
  .from(
    ".i__gsap",
    { duration: 0.5, x: 200, stagger: "0.1", opacity: 0 },
    "-=0.6"
  );
