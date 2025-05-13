function navOpen(isMobile) {
    const hamburger = document.getElementById("hamburger");
    // const M = document.getElementById("M");
    // const L = document.getElementById("L");
    // const R = document.getElementById("R");
    const p = document.getElementsByClassName("p_top");
    const h = document.getElementsByClassName("h1_top");
    const nav = document.getElementById("first_parallax").getElementsByClassName("nav")[0]
    const isOpen = hamburger.dataset.isOpen;

    if (isOpen === 'false') {
        if (isMobile) {
            nav.style.transform = "translate(-100vw, 0px)";
        }
        else {
            nav.style.transform = "translate(-14.6vw, 0px)";
        }


        // Rotate nav image
        hamburger.style.transform = "rotate(90deg)";

        // Set nav as open
        hamburger.dataset.isOpen = 'true';

        // Scale Columns when nav is open
        // M.style.width = '42.7%';
        // L.style.width = '26.4%';
        // R.style.width = '30.9%';

        // Scale paragraphs when nav is open
        // for (let i = 0; i < p.length; i++) {
        //     p[i].style.fontSize = '.81vw';
        //     }
    
        // // Scale header when nav is open
        // for (let i = 0; i < h.length; i++) {
        //     h[i].style.fontSize = '1.31vw';
        //     }
    }
    else {
        if (isMobile) {
            nav.style.transform = "translate(100vw, 0px)";
        }
        else {
            nav.style.transform = "translate(14.6vw, 0px)";
        }

        // Set nav as closed
        hamburger.dataset.isOpen = 'false';

        // Rotate nav back to original position
        hamburger.style.transform = "rotate(0deg)";

        // Restore size of columns
        // M.style.width = '58.4%';
        // L.style.width = '32.6%';
        // R.style.width = '9%';

        // Restore text size
        // for (let i = 0; i < p.length; i++) {
        //     p[i].style.fontSize = '1vw';
        //     }
        // for (let i = 0; i < h.length; i++) {
        //     h[i].style.fontSize = '1.62vw';
        //     }
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
let iterCount = 0;
const arrow = document.getElementsByClassName("arrow")[0];

arrow.addEventListener("animationiteration", () => {
    iterCount++;
})

function scrollFunction() {
    if (iterCount === 0) {
        arrow.style.animationIterationCount = 0; // Don't blink if user scrolls before it starts blinking
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