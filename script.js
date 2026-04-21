const slides = document.querySelectorAll(".slide");
let current = 0;

let interval = setInterval(nextSlide, 3000);

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function changeSlide(dir) {
  clearInterval(interval);

  current += dir;

  if (current < 0) current = slides.length - 1;
  if (current >= slides.length) current = 0;

  showSlide(current);
  interval = setInterval(nextSlide, 3000);
}

/* FORM */
const form = document.getElementById("kontaktForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.textContent = "Šalje se...";

  const data = new FormData(form);

  try {
    const res = await fetch("https://formspree.io/f/xlgawkyd", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (res.ok) {
      status.textContent = "Poruka uspešno poslata ✔";
      form.reset();
    } else {
      status.textContent = "Greška pri slanju.";
    }

  } catch (err) {
    status.textContent = "Greška u konekciji.";
  }
});