const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check localStorage for theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("ri-sun-line", "ri-moon-fill");  // Change to filled moon
}

// Toggle light/dark mode
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("ri-sun-line", "ri-moon-fill");  // Moon icon
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.classList.replace("ri-moon-fill", "ri-sun-line");  // Sun icon
        localStorage.setItem("theme", "light");
    }
});








