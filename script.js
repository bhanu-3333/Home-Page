// ===== GSAP Timeline Animations =====
var timeline = gsap.timeline();

timeline.from("nav img", {
    y: 50,
    duration: 1,
    opacity: 0,
});

timeline.from(".items h2, .nav-buttons button", {
    y: 50,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
});

timeline.from("#main h1", {
    x: 50,
    duration: 1,
    opacity: 0,
    stagger: 0.6,
});

timeline.from("#main>img", {
    x: -60,
    duration: 2,
    scale: 0,
    opacity: 0,
    stagger: 0.4,
});

timeline.from("#announcement-div", {
    y: 50,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
});

timeline.from(".socials", {
    y: -50,
    duration: 2,
    opacity: 0,
});

timeline.from("#main h5", {
    opacity: 0,
    duration: 1,
});

timeline.to("#main h5", {
    y: 10,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
});

// ===== GSAP ScrollTrigger for scrolling text =====
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".scrolling-text",
    start: "top 90%",
    once: true,
    onEnter: () => {
        gsap.to(".scrolling-content", {
            x: "-50%",
            duration: 15,
            repeat: -1,
            ease: "linear"
        });
    }
});

// ===== GSAP Shop Cards Animation =====
gsap.utils.toArray(".shop-card").forEach((card) => {
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
                toggleActions: "restart none none reverse",
            }
        }
    );
});

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== GSAP Categories Animation =====
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

// ===== Scroll Animation for Story, Values, Timeline, CTA Sections =====
const scrollElements = document.querySelectorAll(
    '.about-hero, .story-content, .story-visual, .story-image, .value-item, .timeline-title, .timeline-item, .cta-section'
);

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => element.classList.add('animate');
const hideScrollElement = (element) => element.classList.remove('animate');

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// ===== Story Grid Images =====
// Replace empty boxes with your images dynamically if needed
document.querySelectorAll('.story-visual').forEach((visual, index) => {
    const img = document.createElement('img');
    img.src = `images/story${index + 1}.jpg`; // make sure you have these images in your folder
    img.alt = `Story Image ${index + 1}`;
    img.classList.add('story-image');
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    visual.appendChild(img);
});

// ===== Optional GSAP Image Animations =====
gsap.utils.toArray('.story-image').forEach((img, index) => {
    gsap.from(img, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
});
