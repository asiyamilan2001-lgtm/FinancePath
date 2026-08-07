document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");

    // Check saved theme
    const savedTheme = localStorage.getItem("financeTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = "☀️";
    } else {
        themeToggle.innerHTML = "🌙";
    }


    // Button click
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("financeTheme", "dark");
            themeToggle.innerHTML = "☀️";

        } else {

            localStorage.setItem("financeTheme", "light");
            themeToggle.innerHTML = "🌙";

        }

    });

});
