console.log("ready")

//dom selektory
// Do proměnné 'tlacitko' uložíme odkaz na HTML element s id="hlavni-tlacitko"
const tlacitko = document.querySelector("#hl-tlacitko");


// Do proměnné 'vystup' uložíme odkaz na HTML element s id="vysledek-box"
const vystup = document.querySelector("#vysledek");

// --- NOVÝ KÓD: NAČÍTÁNÍ PŘI STARTU ---
// Zkusíme vytáhnout data
const ulozenaVec = localStorage.getItem("posledniAktivita");

// Kontrola: Je tam něco? (není to null?)
if (ulozenaVec !== null) {
    vystup.textContent = ulozenaVec;
    // Můžeme přidat i třídu, aby to vypadalo aktivně
    vystup.classList.add("zvyrazneny-vysledek");
}
// --------------------------------------

// Test: Vypíšeme si to do konzole, abychom viděli, že jsme je našli
console.log(tlacitko);
console.log(vystup);

// 4. UDÁLOST (EVENT LISTENER)
// Když někdo klikne ('click') na 'tlacitko', spusť funkci 'vygenerujNahodu' (nebo 'zvysSkore')
tlacitko.addEventListener("click", vygenerujNahodu);

function vyberVec(seznamVeci, minulaVec) {
    do {
        nahodnyIndex = Math.floor(Math.random() * seznamVeci.length);
        novaVec = seznamVeci[nahodnyIndex];
    } while (novaVec == minulaVec)
    console.log("Vybráno:", novaVec);
    return novaVec; // Uložíme pro příště
}


let minulaVec = "";
// 3. FUNKCE
const obrazekPrvek = document.querySelector("#vysledek-img");

function vygenerujNahodu() {
    // Získáme náhodné číslo (index)
    // Math.random() dává 0 až 0.999...
    // Vynásobíme délkou seznamu a zaokrouhlíme dolů (Math.floor)
    let vybranaVec = vyberVec(seznamVeci, minulaVec);
    let vybranyObjekt = seznamVeci[nahodnyIndex];
    // Změníme text v našem HTML prvku
    vystup.textContent = vybranaVec;
    vystup.textContent = vybranyObjekt.text;

    obrazekPrvek.src = vybranyObjekt.obrazek;
    obrazekPrvek.alt = vybranyObjekt.text;
    //konzole pro kontrolu
    console.log("Vybráno:", vybranaVec);
    
    //----
    // 2. Přidáme třídu pro efekt
    vystup.classList.add("zvyrazneny-vysledek");

    // 3. (Bonus) Trik: Po chvilce třídu odebereme, aby animace mohla proběhnout znovu
    setTimeout(() => {
        vystup.classList.remove("zvyrazneny-vysledek");
    }, 500); // Po 500 milisekundách (0.5s) se třída odebere


    // --- NOVÝ KÓD ---
    // Uložíme vybranou věc do paměti pod klíčem 'posledniAktivita'
    localStorage.setItem("posledniAktivita", novaVec);
    console.log("Uloženo do paměti:", novaVec);
    // ----------------
    // Přidáme novou věc na začátek pole
    historie.unshift(novaVec);

    // Ořízneme historii na posledních 5 položek (nepovinné, ale dobré)
    historie = historie.slice(0, 5);

    // ZABALÍME do textu a uložíme
    localStorage.setItem("mojeHistorie", JSON.stringify(historie));
    prehrajZvuk()
}

// Načteme text z LocalStorage a hned ho "rozbalíme" na pole. Pokud nic není, vytvoříme prázdné [].
let historie = JSON.parse(localStorage.getItem("mojeHistorie")) || [];


// 1. Najdeme tlacitko a audio v dokumentu
//const button = document.getElementById('hl-tlacitko');

// 2. Přidáme "naslouchač" události kliknutí
function prehrajZvuk() {
    let zvuk = document.getElementById('zvukEfekt');

    // Resetujeme zvuk na začátek (pokud by někdo klikal velmi rychle za sebou)
    zvuk.currentTime = 0;

    // Přehrajeme zvuk
    zvuk.play();
}

// Bonus: Výpis do 


//----

// TODO: 1. Naučit se 'localStorage', abychom mohli ukládat skóre i po zavření prohlížeče.-hotovo
// TODO: 2. Předělat 'data.js' na formát JSON (načítání z externího souboru).
// TODO: 3. Přidat zvukový efekt při kliknutí (Audio API)-nefunguje!!!-uz jo
// TODO:prokliky - 1 splnen
// test