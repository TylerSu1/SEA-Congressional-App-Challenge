const button1 = document.getElementById("leftbarButton1");
const button2 = document.getElementById("leftbarButton2");
const sidebar = document.getElementById("sidebar");

button1.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

button2.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// Footer: hides when scrolling down, shows when scrolling up or at the top/bottom of the page.
(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        const atTop = currentScrollY <= 0;
        const atBottom =
            window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 1;

        if (atTop || atBottom) {
            footer.classList.remove("hidden");
        } else if (Math.abs(currentScrollY - lastScrollY) < 10) {
            return;
        } else if (currentScrollY > lastScrollY) {
            footer.classList.add("hidden");
        } else if (currentScrollY < lastScrollY) {
            footer.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    });
})();
