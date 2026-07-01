// ======================================
// Portfolio Website JavaScript
// ======================================
// =========================
// EmailJS Initialization
// =========================

emailjs.init({
    publicKey: "LlIF7kexPHoRJA9qH",
});

// Typing Animation
const typingElement = document.getElementById("typing");

const text = "B.Tech (ECS) | Full Stack Developer";

let index = 0;

function typeText() {

    if (typingElement && index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}

window.addEventListener("load", typeText);

// ======================================
// Reveal Animation
// ======================================

const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();

// ======================================
// Active Navbar
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ======================================
// Back To Top Button
// ======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ======================================
// Footer Year
// ======================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ======================================
// Mobile Menu
// ======================================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}

// =========================
// Contact Form EmailJS
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");

        button.innerHTML = "Sending...";
        button.disabled = true;

        const params = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send(
    "service_tjgufgm",
    "template_3zsg1xs",
    params
)
        .then(function () {

            alert("Message Sent Successfully!");

            contactForm.reset();

            button.innerHTML = "Send Message";
            button.disabled = false;

        })
        .catch(function (error) {

            alert("Failed to send message!");

            console.error(error);

            button.innerHTML = "Send Message";
            button.disabled = false;

        });

    });

}

// ======================================
// Smooth Button Animation
// ======================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

console.log("Portfolio Website Loaded Successfully!");
/* ===========================
   PROJECT CARDS ANIMATION
=========================== */

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-project");

        }

    });

}, {
    threshold: 0.2
});

projectCards.forEach((card) => {
    projectObserver.observe(card);
});


/* ===========================
   PROJECT BUTTON RIPPLE EFFECT
=========================== */

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const circle = document.createElement("span");

        circle.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        circle.style.left = (e.clientX - rect.left) + "px";
        circle.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        },600);

    });

});


/* ===========================
   PROJECT CARD HOVER TILT
=========================== */

projectCards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width/2)/18;
        const rotateX = -(y - rect.height/2)/18;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

/* ==========================
     SERVICES ANIMATION
========================== */

const services = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show-service");

}

});

},{threshold:0.2});

services.forEach((card)=>{

serviceObserver.observe(card);

});

/* ===========================
   TIMELINE ANIMATION
=========================== */

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show-timeline");

}

});

},{threshold:0.2});

timelineItems.forEach(item=>{

timelineObserver.observe(item);

});

/* ==========================
      SKILLS ANIMATION
========================== */

const skills = document.querySelector("#skills");

const progressBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

progressBars.forEach(bar=>{

bar.style.width = bar.classList.contains("html") ? "95%" :
                  bar.classList.contains("css") ? "90%" :
                  bar.classList.contains("js") ? "80%" :
                  bar.classList.contains("excel") ? "85%" :
                  "75%";

});

}

});

},{threshold:0.5});
if (skills) {
    skillObserver.observe(skills);
}

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-moon");
            icon.classList.toggle("fa-sun");
        }

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Auto Update Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

/* ===================================
      ULTRA PREMIUM PRELOADER
=================================== */

const loadingText = document.getElementById("loading-percent");
const progressFill = document.getElementById("progress-fill");

let load = 0;

const loader = setInterval(()=>{

load++;

if(loadingText){

loadingText.innerHTML=`Loading ${load}%`;

}

if(progressFill){

progressFill.style.width=load+"%";

}

if(load>=100){

clearInterval(loader);

setTimeout(()=>{

document.getElementById("preloader").classList.add("preloader-hide");

},400);

}

},20);

/* ==========================
   SCROLL PROGRESS BAR
========================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});

/* ==========================
      STATS COUNTER
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target / 80;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:0.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ============================
// Floating Particles
// ============================

const particles = document.querySelector(".particles");

for(let i=0;i<40;i++){

    const p=document.createElement("span");

    p.classList.add("particle");

    p.style.left=Math.random()*100+"%";

    p.style.animationDuration=
    (5+Math.random()*10)+"s";

    p.style.animationDelay=
    Math.random()*5+"s";

    p.style.width=
    (2+Math.random()*5)+"px";

    p.style.height=p.style.width;

    particles.appendChild(p);

}


const cards = document.querySelectorAll(".project-card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 12;
        const rotateY = (x - centerX) / 12;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});

const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}
/* ==========================
   Mouse Spotlight
========================== */

const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

    spotlight.style.left = e.clientX + "px";

    spotlight.style.top = e.clientY + "px";

});

/* ==========================
   Project Details Modal
========================== */
const modalTech = document.getElementById("modalTech");
const modalFeatures = document.getElementById("modalFeatures");
const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const modalLive = document.getElementById("modalLive");
const modalGithub = document.getElementById("modalGithub");

const closeModal = document.querySelector(".close-modal");

const detailsButtons = document.querySelectorAll(".details-btn");

const projects = [

{
    image:"images/portfolio.jpg",

    title:"Personal Portfolio",

    description:"A modern responsive portfolio website built using HTML, CSS and JavaScript with premium animations.",

    tech:"HTML, CSS, JavaScript, EmailJS, AOS",

    features:[
        "Responsive Design",
        "Dark / Light Mode",
        "Premium Animations",
        "Working Contact Form",
        "Resume Preview",
        "Project Showcase",
        "3D Tilt Cards",
        "Custom Cursor"
    ],

    live:"#",

    github:"#"
},

{
    image:"images/restaurant.jpg",

    title:"Restaurant Website",

    description:"Modern restaurant landing page with attractive UI, responsive layout and smooth animations.",

    tech:"HTML, CSS, JavaScript",

    features:[
        "Responsive Layout",
        "Food Gallery",
        "Animated Hero Section",
        "Online Menu",
        "Contact Section",
        "Modern UI Design"
    ],

    live:"#",

    github:"#"
},

{
    image:"images/travel.jpg",

    title:"Travel Website",

    description:"Beautiful travel website with premium design, responsive pages and engaging animations.",

    tech:"HTML, CSS, JavaScript",

    features:[
        "Travel Destinations",
        "Booking Section",
        "Responsive Design",
        "Image Gallery",
        "Modern Navigation",
        "Smooth Animations"
    ],

    live:"#",

    github:"#"
}

];

detailsButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        modal.classList.add("active");

        modalImage.src = projects[index].image;

        modalTitle.textContent = projects[index].title;

        modalDescription.textContent = projects[index].description;

        modalTech.textContent = projects[index].tech;

        modalFeatures.innerHTML = "";

        projects[index].features.forEach(feature => {

            const li = document.createElement("li");

            li.textContent = feature;

            modalFeatures.appendChild(li);

        });

        modalLive.href = projects[index].live;

        modalGithub.href = projects[index].github;

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("active");

    }

});