gsap.to(".label", {
	opacity: 1,
	duration: 2,
	x: 0,
});

gsap.to(".botton", {
	opacity: 1,
	duration: 2.2,
	x: 0,
});

let smoother = ScrollSmoother.create({
	wrapper: "#smooth-wrapper",
	content: "#smooth-content",
	smooth: 2,
	effects: true,
});
