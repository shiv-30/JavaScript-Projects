const toggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

console.log(toggle)

toggle.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
})