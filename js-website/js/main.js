import { projectsData } from "./data.js";

const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-toggle-tab';
const toggleBtn = '.toggle-btn';
const dark = 'dark';
const light = 'light';

const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const $isVisible = 'is-visible';

const dataFilter = '[data-filter]';

const root = document.documentElement;

/* Nav */

const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const toggler = document.querySelectorAll(toggleBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLinks = document.querySelectorAll(dataFilter);
const portfolioGrid = document.querySelector('.portfolio-grid');
const projectCards = document.querySelectorAll('.pc-wrapper');
const searchBox = document.querySelector('#search');

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (toggle, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  } 
  toggle.classList.add(active);
}

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);  
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  toggler.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    toggler[1].classList.add(active);
  } else {
    toggler[0].classList.add(active);
  }
}

// Theme Tab Toggle "Open/Close"
toggleTheme.addEventListener('click', function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

// Theme Color Toggle
for (const toggle of toggler) {
  toggle.addEventListener('click', function() {
    const themeType = this.dataset.toggle;
    setActive(toggle, toggleBtn);
    setTheme(themeType);
  });
};

// Modal "Open Buttons"
for (const modal of openModal) {
  modal.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add($isVisible);
  });
};

// Modal "Close Buttons"
for (const modal of closeModal) {
  modal.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove($isVisible);
  });
};

// Modal
document.addEventListener('click', (e) => {
  if(e.target === document.querySelector('.default-modal.is-visible')) {
    document.querySelector('.default-modal.is-visible').classList.remove($isVisible);
  }
});

document.addEventListener('keyup', (e) => {
  if(e.key === 'Escape') {
    document.querySelector('.default-modal.is-visible').classList.remove($isVisible);
  }
});

const portfolioContainer = document.querySelector(".portfolio-grid");

function createPortfolioCard(project) {
  const card = document.createElement("div");
  card.classList.add("pc-wrapper");
  card.setAttribute("data-card", project.projectType);
  card.setAttribute("project-id", project.modal.id);

  const cardBody = document.createElement("div");
  cardBody.classList.add("pc-body");

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", `./assets/images/${project.imgURL}`);
  cardImage.setAttribute("alt", "portfolio icon");
  cardBody.appendChild(cardImage);

  const cardPopupBox = document.createElement("div");
  cardPopupBox.classList.add("pc-popup-box");
  cardPopupBox.setAttribute("data-open", project.modal.id);

  const cardPopupBoxCategory = document.createElement("div");
  cardPopupBoxCategory.textContent = project.category;
  cardPopupBox.appendChild(cardPopupBoxCategory);

  const cardPopupBoxTitle = document.createElement("h3");
  cardPopupBoxTitle.textContent = project.title;
  cardPopupBox.appendChild(cardPopupBoxTitle);

  cardBody.appendChild(cardPopupBox);
  card.appendChild(cardBody);
  portfolioContainer.appendChild(card);

  return card;
}

// Create Project Modal
function createProjectModal(project) {
  const modalId = project.modal.id;
  const modal = document.createElement('div');
  modal.classList.add('default-modal');
  modal.classList.add($isVisible);
  modal.setAttribute('id', modalId);
  modal.setAttribute('data-animation', 'slideInOutTop');

  const modalContent = `
      <div class='modal-container'>
        <header class='modal-header'>
          <h3>${project.title}</h3>
          <i class='fas fa-times' data-close></i>
        </header>
        <div class='modal-body'>
          <div class='img-wrapper'>
            <img src='./assets/images/${project.imgURL}' alt='portfolio-image'>
          </div>
          <div class='text-wrapper'>
            <p>
              <strong>${project.modal.headline}</strong>
            </p>
            <p>
              ${project.modal.paragraph1}
            </p>
            <p>
              ${project.modal.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.innerHTML = modalContent;
  document.body.appendChild(modal); 

  const closeButton = modal.querySelector('[data-close]');
  closeButton.addEventListener('click', function() {
  modal.classList.remove($isVisible);
});

  return modal;
}

function loadProjects() {
  projectsData.forEach((project) => {
    const card = createPortfolioCard(project);
    portfolioGrid.appendChild(card);
  });

  const projectCards = document.querySelectorAll('.pc-wrapper');

  // Portfolio Filter Trigger
  for (const link of filterLinks) {
    link.addEventListener('click', function() {
      setActive(link, '.filter-link');
      const filter = this.dataset.filter;
      portfolioFilter(filter, projectCards);
    });
  };
  
  // Portfolio Search
  searchBox.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase().trim();
    projectCards.forEach((card) => {
      if (card.dataset.card.includes(searchInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';    
      }
    })
  });
};

  // Open project modals
  portfolioGrid.addEventListener('click', (e) => {
    const popupBox = e.target.closest('.pc-popup-box');
    const modalId = popupBox.dataset.open;
    const project = projectsData.find(p => p.modal.id === modalId);
    const modal = createProjectModal(project);
    document.body.appendChild(modal);
  });

// Portfolio Filter Handler
function portfolioFilter(filter, projectCards) {
  setActive(document.querySelector(`[data-filter=${filter}]`), '.filter-link');
  projectCards.forEach((card) => {
    if (filter === 'all') {
      card.style.display = 'block';
    } else if (card.dataset.card === filter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  portfolioGrid.scrollIntoView({ behavior: 'smooth' });
}

loadProjects();
portfolioFilter('all', projectCards);

// Marquee Continuous Animation
const displayedElems = getComputedStyle(root).getPropertyValue('--marquee-elems-displayed');
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elems', marqueeContent.children.length);

for (let i = 0; i < displayedElems; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}