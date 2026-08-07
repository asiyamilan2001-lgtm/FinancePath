const themeToggle = document.getElementById("themeToggle");


// Load saved theme
const savedTheme = localStorage.getItem("financeTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}



// Theme switch button

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("financeTheme", "dark");
        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("financeTheme", "light");
        themeToggle.textContent = "🌙";

    }

});
