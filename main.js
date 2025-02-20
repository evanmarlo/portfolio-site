function navOpen() {
    const hamburger = document.getElementById("hamburger");
    const M = document.getElementById("M")
    const L = document.getElementById("L")
    const R = document.getElementById("R")
    const p = document.getElementsByClassName("p_top")
    const h = document.getElementsByClassName("h1_top")
    const isOpen = hamburger.dataset.isOpen;

    if (isOpen === 'false') {

        // Rotate nav image
        hamburger.style.transform = "rotate(90deg)";

        // Set nav as open
        hamburger.dataset.isOpen = 'true';

        // Scale Columns when nav is open
        M.style.width = '42.7%';
        L.style.width = '26.4%';
        R.style.width = '30.9%';

        // Scale paragraphs when nav is open
        for (let i = 0; i < p.length; i++) {
            p[i].style.fontSize = '1.31vw';
            }
    
        // Scale header when nav is open
        for (let i = 0; i < h.length; i++) {
            h[i].style.fontSize = '1.62vw';
            }
    }
    else {
        // Set nav as closed
        hamburger.dataset.isOpen = 'false';

        // Rotate nav back to original position
        hamburger.style.transform = "rotate(0deg)";

        // Restore size of columns
        M.style.width = '52.8%';
        L.style.width = '32.6%';
        R.style.width = '14.6%';

        // Restore text size
        for (let i = 0; i < p.length; i++) {
            p[i].style.fontSize = '1.62vw';
            }
        for (let i = 0; i < h.length; i++) {
            h[i].style.fontSize = '2vw';
            }
    }
}

const p = document.getElementsByClassName("p_top")
const h = document.getElementsByClassName("h1_top")
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