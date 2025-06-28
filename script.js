// Use this with a span like <span id="typewriter"></span>
const texts = ["Web Developer", "Data Science Enthusiast"];
let i = 0, j = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const element = document.getElementById("typewriter");

  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
    } else if (isDeleting && j > 0) {
      currentText = texts[i].substring(0, j--);
    }

    element.innerHTML = currentText;

    if (j === texts[i].length && !isDeleting) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 70 : 120);
  }
}
type();
function toggleMenu() {
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.toggle('active');
    }
    function closeMenu() {
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.remove('active');
    }



let currentFilter = 'all';

function filterProjects(category, buttonElement) {
  const cards = document.querySelectorAll('.project-card');

  // Toggle logic: if the same filter is clicked again, reset to 'all'
  if (currentFilter === category) {
    category = 'all';
    currentFilter = 'all';
  } else {
    currentFilter = category;
  }

  // Filter the project cards
  cards.forEach(card => {
    const tech = card.dataset.tech;
    if (category === 'all' || tech.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Update button styles
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));

  if (category !== 'all') {
    buttonElement.classList.add('active');
  }
}




