document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved preference in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
        darkModeToggle.checked = true;
    }
    
    // Listen for toggle changes
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});