const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

// Aplica o tema salvo ao carregar a página
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    rootHtml.setAttribute("data-theme", savedTheme);

    if (savedTheme === "dark") {
        toggleTheme.classList.add("bi-sun");
        toggleTheme.classList.remove("bi-moon-stars");
    } else {
        toggleTheme.classList.add("bi-moon-stars");
        toggleTheme.classList.remove("bi-sun");
    }
}

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Altera o tema
    rootHtml.setAttribute("data-theme", newTheme);

    // Salva a escolha do usuário
    localStorage.setItem("theme", newTheme);

    // Alterna os ícones
    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);
