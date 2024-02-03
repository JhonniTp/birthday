const img = document.getElementById("gambar")
const atas = document.getElementById("atas")
const bawah = document.getElementById("bawah")
const ctn = document.getElementById("content")
const musik = document.getElementById("musik")
const ucapan = document.getElementById("ucapan")
const btn = document.getElementById("btn")
const btn_2 = document.getElementById("btn_2")
const btn_3 = document.getElementById("btn_3")
const pesan = document.getElementById("link")
const kotak_pesan = document.getElementById("kotak-pesan")
const nm = document.getElementById("nama")
const nm_2 = document.getElementById("nama2")

const numero_creador = "+51948747296"
const nombre_creador = "Pudin (Insano) Presenta..."

const nombre = ""

let n = 0
const link_wa = `https://api.whatsapp.com/send?text=Gracias ${nombre_creador} te dare 6000 bolivianos y mañana de dare otros 6000 mas...y tienes razón EL BICHO es mejor que messi (gey) Y POR ESO GRITARE SIUUUUUUUU!!  &phone=${numero_creador}`
nm.textContent = nombre
nm_2.textContent = nombre_creador

const kata = [
  `Hola ${nombre}, por si no te diste cuenta soy yo😎`,
  'Y queria decirte que...',
  `Cuidate mucho  🙃...`,
  `Siempre sonríe, sin importar lo que la gente haga ${nombre}...`,
  `No olvides comer el pastel 🍰, aunque sea virtual...`,
  'Es tu deber que te la comas toda😑...',
  'Si me entero que la tiraste te buscare y te encontrare...',
  'Soy capas de venirme por cielo, aire, tierra y atravesar el mar...',
  'todo sea por encontrar el paradero de Mery Gey🙄',
  'Weno...',
  `¡Feliz cumpleaños 🎂 ${nombre}! Que la pases muy bonito 🙌✨`
]

function gantiGambar(a) {
  atas.style.height = "40%"
  bawah.style.height = "60%"
  btn.style.display = "none"
  btn_2.style.bottom = "10px"
  btn_2.style.left = "10px"
  btn_2.style.width = "30%"
  btn.textContent = "next"
  ctn.style.backgroundColor = "white"
  setTimeout(()=> {
    img.src = "/img/mini.gif"
  }, 100)
  ucapanCetak()
}

function musikPlay() {
  musik.play()
  musik.loop = true

}

function exit() {
  kotak_pesan.style.display = "none"
  musikPlay()
  fullLayar()
}

function ucapanCetak() {
  ucapan.textContent = kata[n]
  btn_2.textContent = "Siguiente"
  if (n == 3) {
    btn_3.style.width = "50%"
    btn_3.style.bottom = "20px"
    btn_3.style.display = "block"
    btn_3.textContent = "siguiente"
    btn_2.style.display = "none"
  } else if (n > kata.length - 1) {
    btn_2.style.display = "none"
    pesan.style.display = "block"
    ucapan.style.display = "none"
    atas.style.height = "70%"
    bawah.style.height = "30%"
    ctn.style.height = "320px"
    atas.style.height = "0"
    bawah.style.height = "100%"
    ctn.style.height = "200px"
    pesan.setAttribute("href", link_wa)
  }
  
  if(n == kata.length - 1){
    atas.style.height = "0"
    bawah.style.height = "100%"
    img.style.display = "none"
    ctn.style.height = "200px"
  }
  n++
}
function hapusKue(){
  btn_2.style.display = "block"
  btn_2.textContent = "Sonrie*"
  btn_3.style.display = "none"
  img.src = "/img/pato.gif"
  img.style.width = "200px"
}
function fullLayar() {
			var elem = document.documentElement;

			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) {
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			}

		}
