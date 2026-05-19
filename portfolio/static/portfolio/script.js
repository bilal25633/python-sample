const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const revealItems = document.querySelectorAll(".reveal");
const parallaxItems = document.querySelectorAll(".parallax");
const tiltCards = document.querySelectorAll(".tilt-card");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen.toString());
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
    });
}, { threshold: 0.18 });

revealItems.forEach((item) => revealObserver.observe(item));

document.addEventListener("pointermove", (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    document.body.style.setProperty("--mouse-x", `${x * 100}%`);
    document.body.style.setProperty("--mouse-y", `${y * 100}%`);

    parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.speed || 0);
        const moveX = (x - 0.5) * speed * 80;
        const moveY = (y - 0.5) * speed * 80;
        item.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
});

tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
    });

    card.addEventListener("pointerleave", () => {
        card.style.transform = "";
    });
});
