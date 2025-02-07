function navOpen() {
    const hamburger = document.getElementById("hamburger");
    const isOpen = hamburger.dataset.isOpen;
    console.log(isOpen)
    if (isOpen === 'false') {
        hamburger.style.transform = "rotate(90deg)";
        hamburger.dataset.isOpen = 'true';
    }
    else {
        hamburger.dataset.isOpen = 'false';
        hamburger.style.transform = "rotate(0deg)";
    }
}