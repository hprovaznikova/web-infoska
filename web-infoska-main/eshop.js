console.log("ready")

//DARK MODE
// Výběr prvků
const tlacitkoTema = document.querySelector("#btn-tema");
const celeTelo = document.body;


// Funkce na přepnutí
function prepniTema() {
    nastavTmavy() 

    let jeTmavy = celeTelo.classList.contains("tmavy-rezim");
    if (jeTmavy) {
        tlacitkoTema.textContent = "light mode";
        localStorage.setItem("vybraneTema", "tmave"); // Uložíme volbu
    } else {
        tlacitkoTema.textContent = "dark mode";
        localStorage.setItem("vybraneTema", "svetle"); // Uložíme volbu
    }
}

function nastavTmavy(){
    // toggle přidá třídu, pokud tam není, a odebere ji, pokud tam je
    celeTelo.classList.toggle("tmavy-rezim");
    document.querySelector(".menu").classList.toggle("dark-menu");
    
}

// Spojení tlačítka s funkcí
tlacitkoTema.addEventListener("click", prepniTema);


// B) Načtení paměti PŘI STARTU APLIKACE (Přidej kamkoliv nahoru mimo funkce)
const ulozeneTema = localStorage.getItem("vybraneTema");


// Pokud uživatel už někdy zvolil tmavé téma, rovnou mu ho zapneme
if (ulozeneTema === "tmave") {
    nastavTmavy()
    tlacitkoTema.textContent = "light mode";
}