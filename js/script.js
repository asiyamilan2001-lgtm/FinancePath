// ============================
// FinancePath Interactive Features
// ============================


// Floating Menu Open/Close

function toggleMenu() {

    const menu = document.getElementById("menuPanel");

    if (menu.style.display === "block") {

        menu.style.display = "none";

    } else {

        menu.style.display = "block";

    }

}



// Dark / Light Theme Toggle

function toggleTheme() {

    document.body.classList.toggle("dark-mode");


    // Save user preference

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

}



// Load saved theme when opening website

window.onload = function() {


    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


};
