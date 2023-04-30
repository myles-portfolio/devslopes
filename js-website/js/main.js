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
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const dataPortfolio = '[data-card]';

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const toggler = document.querySelectorAll(toggleBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLinks = document.querySelectorAll(dataFilter);
const portfolioCards = document.querySelectorAll(dataPortfolio);
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

// Portfolio Search Box
searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioCards.forEach((card) => {
    if (card.dataset.card.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';    
    }
  })
});

// Portfolio Filter
for (const link of filterLinks) {
  link.addEventListener('click', function() {
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioCards.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.card === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
};

// Modal "Open Buttons"
for (const modal of openModal) {
  modal.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
};

// Modal "Close Buttons"
for (const modal of closeModal) {
  modal.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
};

// Modal
document.addEventListener('click', (e) => {
  if(e.target === document.querySelector('.default-modal.is-visible')) {
    document.querySelector('.default-modal.is-visible').classList.remove(isVisible);
  }
});

document.addEventListener('keyup', (e) => {
  if(e.key === 'Escape') {
    document.querySelector('.default-modal.is-visible').classList.remove(isVisible);
  }
});

// Add Portfolio Cards to Portfolio Grid
function createPortfolioCards() {
  const portfolioContainer = document.querySelector('.portfolio-grid');

  for (let i = 0; i < projectsData.length; i++) {
    const { projectType, imgURL, category, title, modal } = projectsData[i];
    const modalId = modal.id;

    const pcWrapper = document.createElement('div');
    pcWrapper.classList.add('pc-wrapper');
    pcWrapper.setAttribute('data-card', projectType);

    const pcBody = document.createElement('div');
    pcBody.classList.add('pc-body');

    const image = document.createElement("img");
    image.src = "./assets/images/" + imgURL;
    image.alt = "portfolio icon";

    const link = document.createElement('div');
    link.classList.add('pc-popup-box');
    link.setAttribute('data-open', modalId);

    const categoryDiv = document.createElement("div");
    categoryDiv.textContent = category;

    const titleDiv = document.createElement("h3");
    titleDiv.textContent = title;

    link.appendChild(categoryDiv);
    link.appendChild(titleDiv);
    pcBody.appendChild(image);
    pcBody.appendChild(link);
    pcWrapper.appendChild(pcBody);

    portfolioContainer.appendChild(pcWrapper);
  }
}
// Call
createPortfolioCards()

// Create Project Modal
function createProjectModal(project) {
  const modalId = project.modal.id;
  const modal = document.createElement('div');
  modal.classList.add('default-modal');
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
  return modal;
}

const card = document.querySelector('.pc-popup-box');

// Build Project Modal Upon Click
card.addEventListener('click', function() {
  const dataOpen = this.getAttribute('data-open');
  const project = projectsData.find(project => project.modal.id === dataOpen);

  const projectModal = createProjectModal(project);

  document.body.appendChild(projectModal);
});

