const hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click', function (event) {
    event.preventDefault();
})

function navOpen(isMobile) {
    const hamburger = document.getElementById("hamburger");
    const hamburger_mobile = document.getElementById("hamburger_mobile");
    const p = document.getElementsByClassName("p_top");
    const h = document.getElementsByClassName("h1_top");
    const nav = document.getElementById("first_parallax").getElementsByClassName("nav")[0]
    const isOpen = hamburger.dataset.isOpen;

    if (isOpen === 'false') {
        if (isMobile) {
            nav.style.transform = "translate(-100vw)";
        }
        else {
            nav.style.transform = "translate(-14.6vw)";
        }

        // Rotate nav image and change to white
        hamburger.style.transform = "rotate(90deg)";
        hamburger.style.opacity = 0;
        hamburger_mobile.style.transform = "rotate(90deg)";
        hamburger_mobile.style.opacity = 0;
        setTimeout(() => {
            hamburger.src="menuwhite.png";
            hamburger.style.opacity = 1;
            hamburger_mobile.src="menuwhite.png";
            hamburger_mobile.style.opacity = 1;
        }, 500);

        // Set nav as open
        hamburger.dataset.isOpen = 'true';
    }
    else {
        if (isMobile) {
            nav.style.transform = "translate(100vw)";
        }
        else {
            nav.style.transform = "translate(14.6vw)";
        }

        // Set nav as closed
        hamburger.dataset.isOpen = 'false';

        // Rotate nav back to original position and change to black
        hamburger.style.transform = "rotate(0deg)";
        hamburger.style.opacity = 0;
        hamburger_mobile.style.transform = "rotate(0deg)";
        hamburger_mobile.style.opacity = 0;
        setTimeout(() => {
            hamburger.src="menu.png";
            hamburger.style.opacity = 1;
            hamburger_mobile.src="menu.png";
            hamburger_mobile.style.opacity = 1;
        }, 200);
    }
}

const p = document.getElementsByClassName("p_top");
const h = document.getElementsByClassName("h1_top");
var resizeTimer;

window.onresize = () => {
    for (let i = 0; i < p.length; i++) {
        p[i].classList.add('no-transition');
        }
    for (let i = 0; i < h.length; i++) {
        h[i].classList.add('no-transition');
        }
  
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    for (let i = 0; i < p.length; i++) {
        p[i].classList.remove('no-transition'), 250;
        }
    for (let i = 0; i < h.length; i++) {
        h[i].classList.remove('no-transition'), 250;
        }
  });
};

// This section counts how many times the arrow blinks
// When the user scrolls down, the arrow blinks the iterCount + 1th time and then disappears
// This isn't just setting variables, it is setting how many times to blink
let iterCount = 0;
let started = false;
const arrow = document.getElementsByClassName("arrow")[0];

arrow.addEventListener("animationstart", () => {
    started = true;
})
arrow.addEventListener("animationiteration", () => {
    iterCount++;
})

window.history.scrollRestoration = "manual"; // Prevent window from automatically "scrolling" on render

function scrollFunction() {
    console.log("Removing arrow");
    if (started === false) {
        arrow.style.animationIterationCount = 0; // Don't blink if user scrolls before arrow starts blinking
    }
    else {
        arrow.style.animationIterationCount = iterCount + 1;
    }
}

window.onscroll = scrollFunction;

function projectReveal(projectIndex) {
    const gas = document.getElementById("gas");
    const fish = document.getElementById("fish");
    const tutor = document.getElementById("typing");
    const dashboard = document.getElementById("dashboard");
    const license = document.getElementById("license");

    if (projectIndex === 0) {
        gas.style.opacity = 1;
    }
    else if (projectIndex === 1) {
        fish.style.opacity = 1;
    }
    else if (projectIndex === 2) {
        tutor.style.opacity = 1;
    }
    else if (projectIndex === 3) {
        dashboard.style.opacity = 1;
    }
    else {
        license.style.opacity = 1;
    }
}

function projectHide(projectIndex) {
    const gas = document.getElementById("gas");
    const fish = document.getElementById("fish");
    const tutor = document.getElementById("typing");
    const dashboard = document.getElementById("dashboard");
    const license = document.getElementById("license");
    
    if (projectIndex === 0) {
        gas.style.opacity = 0;
    }
    else if (projectIndex === 1) {
        fish.style.opacity = 0;
    }
    else if (projectIndex === 2) {
        tutor.style.opacity = 0;
    }
    else if (projectIndex === 3) {
        dashboard.style.opacity = 0;
    }
    else {
        license.style.opacity = 0;
    }
}