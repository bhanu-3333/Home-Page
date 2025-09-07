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


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".shop-card").forEach((card, index) => {
  gsap.fromTo(card,
    {
      opacity: 0,
      y: 100,
      scale: 0.8,
      filter: "blur(10px)"
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "restart none none reverse", // ✅ Animate out when leaving
      }
    }
  );
});
// ✅ Smooth Scroll for Nav Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ✅ GSAP Animation for Categories
gsap.utils.toArray(".category-card").forEach((card, index) => {
    gsap.fromTo(card,
        { opacity: 0, y: 100, scale: 0.8 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".categories-section",
                start: "top 80%",
                toggleActions: "restart none none reverse"
            }
        }
    );
});
