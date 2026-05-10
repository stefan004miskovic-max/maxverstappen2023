let tema = "dark"

function promeniTemu(trenutna) {
    if (trenutna === "dark") {
        return "light"
    } else {
        return "dark"
    }
}

function velikaSlova(tekst) {
    return tekst.toUpperCase()
}

function proveriEmail(email) {
    if (email.includes("@") ) {
        return true
    } else {
        return false
    }
}

const dugme = document.getElementById("temaBtn")

if (dugme) {
    dugme.addEventListener("click", function() {
        tema = promeniTemu(tema)

        if (tema === "light") {
            document.body.style.background = "white"
            document.body.style.color = "black"
        } else {
            document.body.style.background = "black"
            document.body.style.color = "white"
        }
    })
}

const naslovi = document.querySelectorAll("h1, h2")

naslovi.forEach(n => {
    n.textContent = velikaSlova(n.textContent)
})

const kartice = document.querySelectorAll(".card")

kartice.forEach(k => {
    k.addEventListener("click", function() {
        this.style.background = "blue"
        this.style.color = "white"
    })
})

const forma = document.getElementById("kontaktForma")

if (forma) {
    forma.addEventListener("submit", function(e) {
        e.preventDefault()

        const ime = document.getElementById("ime").value
        const email = document.getElementById("email").value
        const poruka = document.getElementById("poruka").value

        if (ime === "" || email === "" || poruka === "") {
            alert("Popuni sva polja")
            return
        }

        if (!proveriEmail(email)) {
            alert("Email nije ispravan")
            return
        }

        const rezultat = document.createElement("p")
        rezultat.textContent = "Hvala " + ime + ", poruka: " + velikaSlova(poruka)

        document.body.appendChild(rezultat)
    })
}

function ispis(x) {

    var tekst = "";

    var dest = document.getElementById("polje");

    var vozaci = ["Max Verstappen", "Sergio Perez", "Lewis Hamilton", "Charles Leclerc"];

    var timovi = ["Red Bull Racing", "Mercedes", "Ferrari", "McLaren"];

    if (x == 'Vozaci') {

        tekst = "<h3>Vozači sezone 2023</h3><ul>";

        for (let i = 0; i < vozaci.length; i++) {
            tekst += "<li>" + vozaci[i] + "</li>";
        }

        tekst += "</ul>";

    } else {

        tekst = "<h3>F1 Timovi 2023</h3><ul>";

        for (let i = 0; i < timovi.length; i++) {
            tekst += "<li>" + timovi[i] + "</li>";
        }

        tekst += "</ul>";
    }

    dest.innerHTML = tekst;
}