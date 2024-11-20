import './bootstrap';


//-------------------------sidebar -----------------------------
const sidebar = document.getElementById('sidebar');
const collapseBtn = document.getElementById('collapse-btn');
const mainContent = document.getElementById('main-content');
const logoText = document.getElementById('logo-text');
const logoLetter = document.getElementById('logo-letter');
const sidebarTextElements = document.querySelectorAll('.sidebar-text');
const collapseIcon = document.getElementById('collapse-icon');

// Set initial state based on screen size
let isCollapsed = window.innerWidth < 768;
updateSidebarState();

// Handle initial state
window.addEventListener('load', () => {
    if (window.innerWidth < 768) {
        collapseSidebar();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && !isCollapsed) {
        collapseSidebar();
    }
});

collapseBtn.addEventListener('click', () => {
    isCollapsed = !isCollapsed;
    updateSidebarState();
});

function updateSidebarState() {
    if (isCollapsed) {
        collapseSidebar();
    } else {
        expandSidebar();
    }
}

function collapseSidebar() {
    sidebar.classList.add('collapsed');
    sidebar.style.width = '4rem';
    mainContent.style.marginLeft = window.innerWidth < 768 ? '4rem' : '4rem';
    logoLetter.classList.add('scale-75');
    logoText.style.opacity = '0';
    logoText.style.width = '0';
    sidebarTextElements.forEach(el => {
        el.style.opacity = '0';
        el.style.width = '0';
    });
    collapseIcon.style.transform = 'rotate(180deg)';
}

function expandSidebar() {
    sidebar.classList.remove('collapsed');
    sidebar.style.width = '16rem';
    mainContent.style.marginLeft = '16rem';
    logoLetter.classList.remove('scale-75');
    logoText.style.opacity = '1';
    logoText.style.width = 'auto';
    sidebarTextElements.forEach(el => {
        el.style.opacity = '1';
        el.style.width = 'auto';
    });
    collapseIcon.style.transform = '';
}
function handleResponsiveLayout() {
    const width = window.innerWidth;

    if (width < 1024) {
        collapseSidebar();
    } else if (!isCollapsed) {
        expandSidebar();
    }
}

// Add resize listener
window.addEventListener('resize', handleResponsiveLayout);

// Initial call
handleResponsiveLayout();




//-------------------------charts -----------------------------

// Revenue Overview Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'This Year',
        data: [65, 59, 80, 81, 56, 55, 40, 84, 64, 89, 74, 98],
        borderColor: '#6366F1',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Last Year',
        data: [45, 49, 60, 71, 46, 45, 30, 74, 54, 79, 64, 88],
        borderColor: '#93C5FD',
        tension: 0.4,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [2, 4],
        },
      },
    },
  },
});

// Customer Growth Chart
const customerCtx = document.getElementById('customerChart').getContext('2d');
new Chart(customerCtx, {
  type: 'bar',
  data: {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'New Customers',
        data: [120, 160, 140, 180, 210, 240],
        backgroundColor: '#818CF8',
        borderRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [2, 4],
        },
      },
    },
  },
});

// Transactions Growth Chart
const transactionCtx = document
  .getElementById('transactionChart')
  .getContext('2d');
new Chart(transactionCtx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Transactions',
        data: [1200, 1900, 1700, 2400, 2800, 3200],
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: '#6366F1',
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [2, 4],
        },
      },
    },
  },
});

// Product Sales Chart
const productCtx = document.getElementById('productChart').getContext('2d');
new Chart(productCtx, {
  type: 'doughnut',
  data: {
    labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Others'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          '#6366F1',
          '#818CF8',
          '#93C5FD',
          '#BFDBFE',
          '#DBEAFE',
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    cutout: '75%',
  },
});
