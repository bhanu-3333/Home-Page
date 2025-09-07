var timeline = gsap.timeline();

timeline.from("nav img",{
    y: 50,
    duration: 1,
    opacity: 0,
})

timeline.from(".items h2, .nav-buttons button",{
    y: 50,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
})

timeline.from("#main h1",{
    x: 50,
    duration: 1,
    opacity: 0,
    stagger: 0.6,
})

timeline.from("#main>img",{
    x: -60,
    duration: 2,
    scale: 0,
    opacity: 0,
    stagger: 0.4,
})

timeline.from("#announcement-div",{
    y: 50,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
})

timeline.from(".socials",{
    y: -50,
    duration: 2,
    opacity: 0,
})

timeline.from("#main h5",{
    opacity:0,
    duration: 1,
})

timeline.to("#main h5",{
    y: 10,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
})

gsap.registerPlugin(ScrollTrigger);

// Detect when user reaches the bottom section
ScrollTrigger.create({
    trigger: ".scrolling-text",
    start: "top 90%", // when the section is about to come fully into view
    once: true, // run only once
    onEnter: () => {
        gsap.to(".scrolling-content", {
            x: "-50%",           // move left by 50%
            duration: 15,        // 15 seconds for smooth scroll
            repeat: -1,          // infinite loop
            ease: "linear"
        });
    }
});
