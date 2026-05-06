// Animasi muncul saat scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// Navbar aktif
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = sec.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Validasi form
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;

    if (nama === "" || email === "") {
        message.style.color = "red";
        message.textContent = "Semua field harus diisi!";
    } else {
        message.style.color = "green";
        message.textContent = "Pesan berhasil dikirim!";
        form.reset();
    }
});
