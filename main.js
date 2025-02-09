function navOpen() {
    const hamburger = document.getElementById("hamburger");
    const M = document.getElementById("M")
    const L = document.getElementById("L")
    const R = document.getElementById("R")
    const isOpen = hamburger.dataset.isOpen;
    console.log(isOpen);
    if (isOpen === 'false') {
        hamburger.style.transform = "rotate(90deg)";
        hamburger.dataset.isOpen = 'true';
        M.style.width = '42.7%';
        L.style.width = '26.4%';
        R.style.width = '30.9%';
    }
    else {
        hamburger.dataset.isOpen = 'false';
        hamburger.style.transform = "rotate(0deg)";
        M.style.width = '52.8%';
        L.style.width = '32.6%';
        R.style.width = '14.6%';
    }
}