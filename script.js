window.addEventListener("scroll", function(){

      const navbar = document.querySelector(".navbar");

      navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
      );

    });


    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

      counter.innerText = "0";

      const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

          counter.innerText =
            `${Math.ceil(current + increment)}`;

          setTimeout(updateCounter, 30);

        } else {

          counter.innerText = target;

        }
      };

      updateCounter();

    });


    document.getElementById("learnBtn")
      .addEventListener("click", function(){

        alert(
          "Welcome to Victus Impact Network (VINET)"
        );

      });


const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transition = "0.4s ease";

  });

});



const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show-team");

    }

  });

});

document.querySelectorAll(".team-card").forEach((card) => {

  card.classList.add("hidden-team");

  observer.observe(card);

});