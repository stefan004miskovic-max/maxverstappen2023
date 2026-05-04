const vozac = "Max Verstappen"

function velikaSlova(tekst) {
    return tekst.toUpperCase()
}

function proveriEmail(email) {
    if (email.includes("@")) {
        return true
    } else {
        return false
    }
}

const pobede = [19, 15, 10, 8]

function ukupnoPobeda(niz) {
    let suma = 0
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i]
    }
    return suma
}

const kartice = document.querySelectorAll(".card")

kartice.forEach(k => {
    k.addEventListener("click", function() {
        this.style.background = "blue"
        this.style.color = "white"
    })
})

const forma = document.querySelector(".form")

if (forma) {
    forma.addEventListener("submit", function(e) {
        e.preventDefault()

        const ime = this.querySelector("input[type='text']").value
        const email = this.querySelector("input[type='email']").value
        const poruka = this.querySelector("textarea").value

        if (ime === "" || email === "" || poruka === "") {
            alert("Popuni sva polja")
            return
        }

        if (!proveriEmail(email)) {
            alert("Email nije ispravan")
            return
        }

        const porukaVelika = velikaSlova(poruka)

        const rezultat = document.createElement("p")
        rezultat.textContent = "Hvala " + ime + ", poruka: " + porukaVelika

        document.body.appendChild(rezultat)
    })
}

const sekcija = document.querySelector(".content")

if (sekcija) {
    let html = ""

    for (let i = 0; i < pobede.length; i++) {
        html += "<p>Sezona " + (i+1) + ": " + pobede[i] + " pobeda</p>"
    }

    sekcija.innerHTML += html
}