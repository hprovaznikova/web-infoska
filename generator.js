console.log("ready")


const tlacitko = document.querySelector("#hl-tlacitko");


const vystup = document.querySelector("#vysledek");

const ulozenaVec = localStorage.getItem("posledniAktivita");

if (ulozenaVec !== null) {
    vystup.textContent = ulozenaVec;
    vystup.classList.add("zvyrazneny-vysledek");
}

console.log(tlacitko);
console.log(vystup);

tlacitko.addEventListener("click", vygenerujNahodu);

function vyberVec(seznamVeci, minulaVec) {
    let nahodnyIndex;
    let novaVec;
    do {
        nahodnyIndex = Math.floor(Math.random() * seznamVeci.length);
        novaVec = seznamVeci[nahodnyIndex];
    } while (novaVec == minulaVec)
    console.log("Vybráno:", novaVec);
    return novaVec; 
}


let minulaVec = "";
const obrazekPrvek = document.querySelector("#vysledek-img");
function vygenerujNahodu() {
    let vybranyObjekt = vyberVec(seznamVeci, minulaVec);
   
     vystup.textContent = vybranyObjekt.text;

    obrazekPrvek.src = vybranyObjekt.obrazek;
    obrazekPrvek.alt = vybranyObjekt.text; 

    console.log("Vybráno:", vybranyObjekt);

    vystup.classList.add("zvyrazneny-vysledek");

    setTimeout(() => {
        vystup.classList.remove("zvyrazneny-vysledek");
    }, 500); 

    localStorage.setItem("posledniAktivita", JSON.stringify(vybranyObjekt));
    console.log("Uloženo do paměti:", vybranyObjekt);

    historie.unshift(vybranyObjekt);

    historie = historie.slice(0, 5);

    localStorage.setItem("mojeHistorie", JSON.stringify(historie));
    prehrajZvuk()
}

let historie = JSON.parse(localStorage.getItem("mojeHistorie")) || [];

function prehrajZvuk() {
    let zvuk = document.getElementById('zvukEfekt');

    zvuk.currentTime = 0;

    zvuk.play();
}
