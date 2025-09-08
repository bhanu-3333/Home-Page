// ===== GSAP Timeline Animations =====
gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline();
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

// ===== Scrolling Text Animation =====
ScrollTrigger.create({
    trigger: ".scrolling-text",
    start: "top 90%",
    once: true,
    onEnter: () => {
        gsap.to(".scrolling-content", {
            x: "-50%",
            duration: 20,
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
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
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
    '.about-hero, .story-content, .story-visual, .story-image, .value-item, .timeline-title, .timeline-item, .cta-section, .deals-header, .featured-deal, .quick-deal, .contact-header, .contact-info, .contact-form'
);

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => element.classList.add('animate');

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    });

    // Animate quick deals with stagger
    const quickDeals = document.querySelectorAll('.quick-deal');
    quickDeals.forEach((deal, index) => {
        if (elementInView(deal, 150)) {
            setTimeout(() => {
                deal.classList.add('animate');
            }, index * 200);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// ===== Add Story Images Dynamically =====
document.querySelectorAll('.story-visual').forEach((visual, index) => {
    console.log('Checking story-visual element:', visual);
    if (!visual.querySelector('img')) {
        const img = document.createElement('img');
        img.src = `images/story${index + 1}.jpg`;
        img.alt = `Story Image ${index + 1}`;
        img.classList.add('story-image');
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        visual.appendChild(img);
        console.log('Appended image:', img.src);
    } else {
        console.log('Image already exists in:', visual);
    }
});

// ===== Story Images Animation (Direct Style) =====
document.addEventListener('DOMContentLoaded', () => {
    const storyImages = document.querySelectorAll('.story-image');
    console.log('Found story images:', storyImages.length);

    storyImages.forEach((img, index) => {
        console.log('Processing image:', index, img.src);

        // Force initial state
        img.style.opacity = '0';
        img.style.transform = 'translateY(50px)';
        img.style.transition = 'all 0.8s ease';

        // Animate after a delay
        setTimeout(() => {
            console.log('Animating image:', index);
            img.style.opacity = '1';
            img.style.transform = 'translateY(0)';
        }, 500 + (index * 300));
    });
});

// ===== Countdown Timer =====
function startCountdown() {
    const timer = setInterval(() => {
        const daysElem = document.getElementById('days');
        const hoursElem = document.getElementById('hours');
        const minutesElem = document.getElementById('minutes');
        const secondsElem = document.getElementById('seconds');

        if (!daysElem || !hoursElem || !minutesElem || !secondsElem) {
            clearInterval(timer);
            return;
        }

        let days = parseInt(daysElem.textContent);
        let hours = parseInt(hoursElem.textContent);
        let minutes = parseInt(minutesElem.textContent);
        let seconds = parseInt(secondsElem.textContent);

        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                    days--;
                }
            }
        }

        daysElem.textContent = days.toString().padStart(2, '0');
        hoursElem.textContent = hours.toString().padStart(2, '0');
        minutesElem.textContent = minutes.toString().padStart(2, '0');
        secondsElem.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

window.addEventListener('load', startCountdown);

// ===== Form Submission Handling =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = document.querySelector('.submit-btn span');
        if (!submitBtn) return;

        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending...';

        setTimeout(() => {
            submitBtn.innerHTML = 'Message Sent!';
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
    
}

// ===== Hover Effects with GSAP =====
gsap.utils.toArray(".info-item").forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { x: 15, duration: 0.3, ease: "power2.out" });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { x: 10, duration: 0.3, ease: "power2.out" });
    });
});

gsap.utils.toArray(".deals-btn, .submit-btn").forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { y: -3, duration: 0.3, ease: "power2.out" });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { y: 0, duration: 0.3, ease: "power2.out" });
    });
});

// Featured deal hover effect
const featuredDeal = document.querySelector('.featured-deal');
if (featuredDeal) {
    featuredDeal.addEventListener('mouseenter', function () {
        gsap.to(this, { y: -8, duration: 0.4, ease: "power2.out" });
    });
    featuredDeal.addEventListener('mouseleave', function () {
        gsap.to(this, { y: 0, duration: 0.4, ease: "power2.out" });
    });
}
