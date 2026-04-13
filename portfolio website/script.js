// Smooth scroll when clicking navbar links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Button navigation (Hero buttons)
document.querySelectorAll(".buttons button").forEach((btn, index) => {
    btn.addEventListener("click", function () {
        
        if (index === 0) {
            document.getElementById("project").scrollIntoView({ behavior: "smooth" });
        }
        else if (index === 1) {
            document.getElementById("education").scrollIntoView({ behavior: "smooth" });
        }
        else if (index === 2) {
            document.getElementById("mission").scrollIntoView({ behavior: "smooth" });
        }

    });
});


// Simple hover animation effect
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});
// Navbar smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        let id = this.getAttribute("href").substring(1);
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Button scroll
let buttons = document.querySelectorAll(".buttons button");

buttons[0].onclick = function() {
    document.getElementById("project").scrollIntoView({ behavior: "smooth" });
};

buttons[1].onclick = function() {
    document.getElementById("education").scrollIntoView({ behavior: "smooth" });
};

buttons[2].onclick = function() {
    document.getElementById("mission").scrollIntoView({ behavior: "smooth" });
};

// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form submit
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});