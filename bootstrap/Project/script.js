document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
    });

    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('searchInput').value.toLowerCase();
        // For homepage, perhaps alert or redirect to courses with query
        window.location.href = `courses.html?search=${query}`;
    });

    // For courses page, filter logic would be here if on that page
});