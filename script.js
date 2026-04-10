// Simple smooth-scroll for navbar links
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

document.querySelector('.next').onclick = () => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 800}px)`;
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 800}px)`;
};

// Horizontal scroll animation
const hFill = document.getElementById('h-fill');
const hDot = document.getElementById('h-dot');

if (hFill && hDot) {
    window.addEventListener('scroll', () => {
        // Calculate scroll progress for the entire document
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) * 100 : 0;
        
        // Apply width and position
        hFill.style.width = scrollPercentage + '%';
        hDot.style.left = scrollPercentage + '%';
    });
}



const text = document.getElementById("meText");

// Center of circle
const centerX = 300;
const centerY = 300;

// Radius of circle
const radius = 50;

// Movement
let x = centerX;
let y = centerY;
let dx = 0.6;  // speed X
let dy = 0.5;  // speed Y


function animate() {
  x += dx;
  y += dy;

  // Distance from center
  const dist = Math.sqrt((x - centerX)**2 + (y - centerY)**2);

  // Bounce when hitting circle edge
  if (dist >= radius - 10) {
    dx *= -1;
    dy *= -1;
  }
    
    

  text.setAttribute("x", x);
  text.setAttribute("y", y);

  requestAnimationFrame(animate);
}

animate();
