import './bootstrap';

const sidebar = document.getElementById('sidebar');
const collapseBtn = document.getElementById('collapse-btn');
const mainContent = document.getElementById('main-content');
const logoText = document.getElementById('logo-text');
const logoLetter = document.getElementById('logo-letter');
const sidebarTextElements = document.querySelectorAll('.sidebar-text');
const collapseIcon = document.getElementById('collapse-icon');
let isCollapsed = false;

collapseBtn.addEventListener('click', () => {
    isCollapsed = !isCollapsed;

    // Toggle sidebar width
    sidebar.style.width = isCollapsed ? '4rem' : '16rem';

    // Adjust main content margin
    mainContent.style.marginLeft = isCollapsed ? '4rem' : '16rem';

    // Adjust logo letter size and padding when collapsed
    if (isCollapsed) {
        logoLetter.classList.add('scale-75');
    } else {
        logoLetter.classList.remove('scale-75');
    }

    // Toggle text visibility
    logoText.style.opacity = isCollapsed ? '0' : '1';
    logoText.style.width = isCollapsed ? '0' : 'auto';
    sidebarTextElements.forEach(el => {
        el.style.opacity = isCollapsed ? '0' : '1';
        el.style.width = isCollapsed ? '0' : 'auto';
    });

    // Rotate icon
    collapseIcon.style.transform = isCollapsed ? 'rotate(180deg)' : '';

    // Add/remove collapsed class
    sidebar.classList.toggle('collapsed');
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    // Reset main content margin on mobile
    if (window.innerWidth < 1024) {
        mainContent.style.marginLeft = '0';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        sidebar.classList.add('-translate-x-full');
        mainContent.style.marginLeft = '0';
    } else {
        sidebar.classList.remove('-translate-x-full');
        mainContent.style.marginLeft = isCollapsed ? '4rem' : '16rem';
    }
});

// Set initial state based on screen size
window.addEventListener('load', () => {
    if (window.innerWidth < 1024) {
        mainContent.style.marginLeft = '0';
        sidebar.classList.add('-translate-x-full');
    } else {
        mainContent.style.marginLeft = '16rem';
    }
});



//-------------------------charts -----------------------------


        // Revenue Overview Chart
        const revenueCtx = document.getElementById('revenueChart').getContext('2d');
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'This Year',
                    data: [65, 59, 80, 81, 56, 55, 40, 84, 64, 89, 74, 98],
                    borderColor: '#6366F1',
                    tension: 0.4,
                    fill: false
                }, {
                    label: 'Last Year',
                    data: [45, 49, 60, 71, 46, 45, 30, 74, 54, 79, 64, 88],
                    borderColor: '#93C5FD',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            borderDash: [2, 4]
                        }
                    }
                }
            }
        });

        // Customer Growth Chart
        const customerCtx = document.getElementById('customerChart').getContext('2d');
        new Chart(customerCtx, {
            type: 'bar',
            data: {
                labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                datasets: [{
                    label: 'New Customers',
                    data: [120, 160, 140, 180, 210, 240],
                    backgroundColor: '#818CF8',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            borderDash: [2, 4]
                        }
                    }
                }
            }
        });

        // Transactions Growth Chart
        const transactionCtx = document.getElementById('transactionChart').getContext('2d');
        new Chart(transactionCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                datasets: [{
                    label: 'Transactions',
                    data: [1200, 1900, 1700, 2400, 2800, 3200],
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderColor: '#6366F1',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            borderDash: [2, 4]
                        }
                    }
                }
            }
        });

        // Product Sales Chart
        const productCtx = document.getElementById('productChart').getContext('2d');
        new Chart(productCtx, {
            type: 'doughnut',
            data: {
                labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Others'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        '#6366F1',
                        '#818CF8',
                        '#93C5FD',
                        '#BFDBFE',
                        '#DBEAFE'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    }
                },
                cutout: '75%'
            }
        });

