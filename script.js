document.getElementById('contactForm').addEventListener('submit'), function(event) {
    event.preventDefault();
    alert('Pesan Anda telah dikirim!');
    this.reset
}

document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById("about-link");
    const skillLink = document.getElementById("skill-link");

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan
        const aboutSection = document.getElementById("about");
        aboutSection.classList.add("animate"); // Tambahkan kelas animasi
        aboutSection.scrollIntoView({ behavior: "smooth" }); // Gulir ke bagian "Tentang"
    });

    skillLink.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan
        const projectsSection = document.getElementById("projects");
        projectsSection.classList.add("animate"); // Tambahkan kelas animasi
        projectsSection.scrollIntoView({ behavior: "smooth" }); // Gulir ke bagian "Skill"
    });
});