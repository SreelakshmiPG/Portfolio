document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       1. Smooth Scroll Navbar
    ========================= */
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });


    /* =========================
       2. Image Slider
    ========================= */
    const slides = document.querySelector('.slides');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (slides && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = document.querySelectorAll('.slides img').length;

        nextBtn.onclick = () => {
            index = (index + 1) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}vw)`;
        };

        prevBtn.onclick = () => {
            index = (index - 1 + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}vw)`;
        };
    }


    /* =========================
       3. Horizontal Scroll Indicator
    ========================= */
    const hFill = document.getElementById('h-fill');
    const hDot = document.getElementById('h-dot');

    if (hFill && hDot) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            const scrollPercentage = scrollHeight > 0 
                ? Math.min(scrollTop / scrollHeight, 1) * 100 
                : 0;

            hFill.style.width = scrollPercentage + '%';
            hDot.style.left = scrollPercentage + '%';
        });
    }


    /* =========================
       4. Floating "Me" Bubble
    ========================= */
 const text = document.getElementById("meText");

if (text) {
    const centerX = 300;
    const centerY = 300;
    const radius = 50;

    let x = centerX;
    let y = centerY;

    let dx = 0.5;
    let dy = 0.4;

    let t = 0;

    function animate() {
        t += 0.02;

        // ✨ Gentle floating variation
        dx += Math.sin(t) * 0.0015;
        dy += Math.cos(t) * 0.0015;

        x += dx;
        y += dy;

        const dist = Math.sqrt((x - centerX)**2 + (y - centerY)**2);

        // ✅ Bounce WITHOUT losing energy
        if (dist >= radius - 10) {
            dx *= -1;
            dy *= -1;
        }

        // ✅ Maintain minimum speed (prevents stopping)
        const minSpeed = 0.2;

        if (Math.abs(dx) < minSpeed) dx = dx < 0 ? -minSpeed : minSpeed;
        if (Math.abs(dy) < minSpeed) dy = dy < 0 ? -minSpeed : minSpeed;

        // ✅ Clamp max speed
        dx = Math.max(Math.min(dx, 1), -1);
        dy = Math.max(Math.min(dy, 1), -1);

        text.setAttribute("x", x);
        text.setAttribute("y", y);

        requestAnimationFrame(animate);
    }

    animate();
}


    /* =========================
       5. Vertical Scroll Indicator (Right Side)
    ========================= */
    const dot = document.querySelector(".scroll-dot");
    const line = document.querySelector(".scroll-line");

    if (dot && line) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

            const lineHeight = line.clientHeight;

            dot.style.top = (scrollPercent * (lineHeight - 10)) + "px";
        });
    }

});
const bubble = document.querySelector(".scroll-dot-wrapper");

if (bubble) {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateBubble() {
        const rect = bubble.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;

        // smooth movement
        currentX += dx * 0.03;
        currentY += dy * 0.03;

        bubble.style.transform = `
            translateX(-50%)
            translate(${currentX}px, ${currentY}px)
        `;

        requestAnimationFrame(animateBubble);
    }

    animateBubble();
}
