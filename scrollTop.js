// Scroll-to-Top funkcionalumas
const scrollTopButton = document.getElementById('scrollTopButton');

// Parodyti mygtuką, kai slenkama žemyn
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

// Grįžti į viršų
scrollTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Šviesos/Tamsos režimo mygtukas
const themeToggleButton = document.getElementById('theme-toggle');

// Prideda įvykio klausytoją mygtukui
themeToggleButton.addEventListener('click', () => {
    // Perjungia `dark` klasę prie <body>
    document.body.classList.toggle('dark');

    // Keičia mygtuko tekstą priklausomai nuo aktyvaus režimo
    if (document.body.classList.contains('dark')) {
        themeToggleButton.textContent = 'Perjungti į šviesos režimą';
    } else {
        themeToggleButton.textContent = 'Perjungti į tamsos režimą';
    }
});

// Automatinis režimo nustatymas pagal vartotojo sistemos spalvų schemą
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    themeToggleButton.textContent = 'Perjungti į šviesos režimą';
}
