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

// Full-Size Modal "Open Buttons"
for (const modal of openModal) {
  modal.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
};

// Full-Size Modal "Close Buttons"
for (const modal of closeModal) {
  modal.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove(isVisible);
  })
};