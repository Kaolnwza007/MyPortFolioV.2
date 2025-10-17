const navbarToggle = document.querySelector('.nav-toggle');
const navbarMenu = document.querySelector('.nav-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200; // กัน navbar บัง
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const modal = document.getElementById("pf-modal");
const modalImg = document.getElementById("pf-modal-img");
const modalTitle = document.getElementById("pf-modal-title");
const modalDate = document.getElementById("pf-modal-date");
const modalText = document.getElementById("pf-modal-text");
const closeBtn = document.querySelector(".pf-close");

document.querySelectorAll(".pf-btn").forEach(button => {
    button.addEventListener("click", () => {
        modalImg.src = button.getAttribute("data-img");
        modalTitle.textContent = button.getAttribute("data-title");
        modalDate.textContent = button.getAttribute("data-date");
        modalText.textContent = button.getAttribute("data-content");
        modal.style.display = "flex";
    });
});

// ปิด modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target.classList.contains("pf-modal")) {
        modal.style.display = "none";
    }
});

const filterLinks = document.querySelectorAll(".project-list a");
const cards = document.querySelectorAll(".pf-card");

filterLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // เอา active class ออกจากทุกปุ่ม
    filterLinks.forEach(l => l.classList.remove("active"));
    // ใส่ active ให้ปุ่มที่กด
    link.classList.add("active");

    const filter = link.dataset.filter; // all / robots / camp / frontend

    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block"; // แสดง
      } else {
        card.style.display = "none"; // ซ่อน
      }
    });
  });
});

