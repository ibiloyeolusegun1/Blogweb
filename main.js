// Nav Bar Show/Hide
let navItems = document.querySelector('.nav-items');
let navbarOpen = document.querySelector('#open-btn');
let navbarClose = document.querySelector('#close-btn');

document.querySelector('#open-btn').onclick = () =>{
    navItems.classList.toggle('active');
    navbarOpen.style.display = 'none';
    navbarClose.style.display = 'inline-block';
}
document.querySelector('#close-btn').onclick = () =>{
    navItems.classList.toggle('active');
    navbarOpen.style.display = 'inline-block';
    navbarClose.style.display = 'none';
}




// Side Bar
const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show_sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide_sidebar-btn');


// Show sidebar on small devices
const showSidebar = () =>{
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

// Hide sidebar on small devices
const hideSidebar = () =>{
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);