// =========================
// MOBILE MENU
// =========================

const menu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav-links");

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}


// =========================
// LANGUAGE DROPDOWN
// =========================

const currentLanguage =
document.querySelector(".current-language");

const languageMenu =
document.querySelector(".language-menu");

if(currentLanguage && languageMenu){

    currentLanguage.addEventListener("click", () => {

        languageMenu.classList.toggle("show");

    });

    document.querySelectorAll(".language-option")
    .forEach((option) => {

        option.addEventListener("click", function(){

            const currentFlag =
            document.getElementById("current-flag");

            const currentText =
            document.getElementById("current-text");

            if(!currentFlag || !currentText) return;

            const oldFlag = currentFlag.src;
            const oldText = currentText.textContent;

            const newFlag =
            this.querySelector("img").src;

            const newText =
            this.querySelector("span").textContent;

            currentFlag.src = newFlag;
            currentText.textContent = newText;

            this.querySelector("img").src = oldFlag;
            this.querySelector("span").textContent = oldText;

            languageMenu.classList.remove("show");

        });

    });

}


// =========================
// GOOGLE TRANSLATE
// =========================

const languageSwitcher =
document.getElementById("languageSwitcher");

if(languageSwitcher){

    languageSwitcher.addEventListener("change", function(){

        const language = this.value;

        const interval = setInterval(() => {

            const select =
            document.querySelector(".goog-te-combo");

            if(select){

                select.value = language;

                select.dispatchEvent(
                    new Event("change")
                );

                clearInterval(interval);

            }

        },500);

    });

}


// =========================
// HERO CAROUSEL
// =========================

const slides =
document.querySelectorAll(".slide");

const dots =
document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    dots.forEach(dot => {

        dot.classList.remove("active");

    });

    if(slides[index]){

        slides[index].classList.add("active");

    }

    if(dots[index]){

        dots[index].classList.add("active");

    }

}

function autoSlide(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

}

if(slides.length > 0){

    showSlide(0);

    setInterval(autoSlide,5000);

}


// =========================
// TEAM CARD ANIMATION
// =========================

const teamCards =
document.querySelectorAll(".team-card");

if(teamCards.length > 0){

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show-card");

            }

        });

    },{

        threshold:0.2

    });

    teamCards.forEach((card)=>{

        card.classList.add("hidden-card");

        observer.observe(card);

    });

}

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if(count < target){

                    count += increment;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target.toLocaleString();

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Shared navigation and footer for inner pages.
// The homepage keeps its original, approved layout.
if (!document.body.classList.contains("home-page") && !document.querySelector("nav.navbar")) {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <nav class="navbar" aria-label="Main navigation">
        <a class="logo" href="index.html" aria-label="VINET home"><img src="images/logo.png" alt="Victus Impact Network"></a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">Who We Are</a></li>
          <li><a href="focus-area.html">Focus Areas</a></li>
          <li><a href="programs.html">Programs</a></li>
          <li><a href="project.html">Projects</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a class="nav-support" href="donate.html">Support Us</a>
        <button class="mobile-menu" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>
      </nav>`;
    document.body.prepend(header);
}

if (!document.body.classList.contains("home-page") && !document.querySelector("footer.site-footer")) {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="footer-grid">
        <div><img src="images/logo.png" alt="VINET" class="footer-logo"><p>To empower women and youth with the resources and platforms needed to co-create sustainable solutions for lasting change.</p></div>
        <div><h3>Explore</h3><a href="about.html">Who We Are</a><a href="focus-area.html">Focus Areas</a><a href="programs.html">Programs</a><a href="project.html">Projects</a></div>
        <div><h3>Get involved</h3><a href="partner.html">Partner With Us</a><a href="volunteer.html">Volunteer</a><a href="donate.html">Donate</a><a href="contact.html">Contact</a><a href="privacypolicy.html">Privacy Policy</a></div>
        <div class="footer-contact"><h3>Contact</h3><a href="mailto:victusimpactnetwork@gmail.com">victusimpactnetwork@gmail.com</a><a href="tel:+2347086694359">+234 708 669 4359</a><a href="tel:+2347062391711">+234 706 239 1711</a></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Victus Impact Network. All rights reserved.</span></div>`;
    document.body.append(footer);
}

document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === "projects.html") link.setAttribute("href", "project.html");
    if (link.getAttribute("href") === location.pathname.split("/").pop()) link.classList.add("active");
});

document.querySelectorAll("img").forEach((img, index) => {
    img.loading = index > 1 ? "lazy" : "eager";
    img.addEventListener("error", () => {
        const fallbacks = ["images/community.jpg", "images/Education.jpg", "images/Governance.jpg", "images/Gender Equality.jpg", "images/peace building...jpg"];
        if (!img.dataset.fallback) {
            img.dataset.fallback = "true";
            img.src = fallbacks[index % fallbacks.length];
        }
    });
});

document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".mobile-menu");
    if (!trigger) return;
    const links = document.querySelector(".nav-links");
    if (!links) return;
    links.classList.toggle("show");
    trigger.setAttribute("aria-expanded", links.classList.contains("show"));
});
