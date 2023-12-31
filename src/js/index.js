window.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.querySelector("#burger-menu");
    const nav = document.querySelector(".nav__right");

    mobileMenuBtn.addEventListener("click", function() {
        nav.classList.toggle("nav__active");
        if (nav.classList.contains("nav__active")) {
            this.classList.add("close");
        }
        else {
            this.removeAttribute("class")
        }
    });
});