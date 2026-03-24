console.log("ready")

//DARK MODE
// Výběr prvků
const tlacitkoTema = document.querySelector("#btn-tema");
const celeTelo = document.body;


// Funkce na přepnutí
function prepniTema() {
    // toggle přidá třídu, pokud tam není, a odebere ji, pokud tam je
    celeTelo.classList.toggle("tmavy-rezim");
    
    // Změna textu na tlačítku
    if (celeTelo.classList.contains("tmavy-rezim")) {
        tlacitkoTema.textContent = "light mode";
    } else {
        tlacitkoTema.textContent = "dark mode";
    }
}


// Spojení tlačítka s funkcí
tlacitkoTema.addEventListener("click", prepniTema);


// A) Vylepšení funkce prepniTema() - ULOŽENÍ
function prepniTema() {
    celeTelo.classList.toggle("tmavy-rezim");
    
    let jeTmavy = celeTelo.classList.contains("tmavy-rezim");
    if (jeTmavy) {
        tlacitkoTema.textContent = "light mode";
        localStorage.setItem("vybraneTema", "tmave"); // Uložíme volbu
    } else {
        tlacitkoTema.textContent = "dark mode";
        localStorage.setItem("vybraneTema", "svetle"); // Uložíme volbu
    }
}


// B) Načtení paměti PŘI STARTU APLIKACE (Přidej kamkoliv nahoru mimo funkce)
const ulozeneTema = localStorage.getItem("vybraneTema");


// Pokud uživatel už někdy zvolil tmavé téma, rovnou mu ho zapneme
if (ulozeneTema === "tmave") {
    celeTelo.classList.add("tmavy-rezim");
    tlacitkoTema.textContent = "light mode";
}
