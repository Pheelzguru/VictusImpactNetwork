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