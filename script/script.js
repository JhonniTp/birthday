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
const nombre_creador = "INVITACIÓN ESPECIAL DE CUMPLEAÑOS"

const nombre = ""

let n = 0
//const link_wa = `https://api.whatsapp.com/send?text=Gracias ${nombre_creador} te dare 6000 bolivianos y mañana de dare otros 6000 mas...y tienes razón EL BICHO es mejor que messi (gey) Y POR ESO GRITARE SIUUUUUUUU!!  &phone=${numero_creador}`
nm.textContent = nombre

const kata = [
`¡Hola ${nombre}! 🎉`,
`Soy yo, Alison, la cumpleañera 👧✨`,
`¡Hoy cumplo años y quiero celebrar contigo! 🥳`,
`Te invito a mi fiesta de cumpleaños 🎂`,
`Será en el Colegio JOHN WESLEY 📍`,
`El día: 16 de marzo, a las 1:40 PM ⏰`,
`Habrá juegos, música, sorpresas y pastel delicioso 🍰🎵`,
`Bailaremos, reiremos y crearemos recuerdos mágicos 💃🕺`,
`Tu presencia hará mi día aún más especial 💛✨`,
`No faltes, te espero con mucha emoción y alegría 🙌`,
`¡Juntos haremos de este un cumpleaños inolvidable! 🎈🎊`,
`¡Nos vemos en mi fiesta de cumpleaños 🎂�!`
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
    img.src = "./img/mini.gif"
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
    pesan.style.display = "flex"
    ucapan.style.display = "none"
    atas.style.height = "70%"
    bawah.style.height = "30%"
    ctn.style.height = "320px"
    atas.style.height = "0"
    bawah.style.height = "100%"
    ctn.style.height = "200px"
  }
  
  if(n == kata.length - 1){
    atas.style.height = "0"
    bawah.style.height = "100%"
    img.style.display = "none"
    ctn.style.height = "200px"
  }
  n++
}
function explosionCelebracion() {
  // Hide the button immediately when clicked
  const btn = document.getElementById("link");
  btn.style.display = 'none';
  btn.style.pointerEvents = 'none';
  btn.style.opacity = '0';
  
  // Crear contenedor para los efectos
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);
  
  // Colores para el confeti y globos
  const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
  
  // Crear confeti
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      container.appendChild(confetti);
    }, i * 30);
  }
  
  // Crear globos
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.left = Math.random() * 100 + '%';
      balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.animationDelay = Math.random() * 1 + 's';
      balloon.style.animationDuration = (Math.random() * 2 + 3) + 's';
      container.appendChild(balloon);
    }, i * 100);
  }
  
  // Efecto de sonido adicional si quieres
  const musik = document.getElementById("musik");
  if (musik) {
    musik.volume = 0.3;
    musik.play().catch(e => console.log("No se pudo reproducir el audio"));
  }
  
  // Mostrar el mensaje final después de la explosión
  setTimeout(() => {
    const mensajeFinal = document.getElementById("mensajeFinal");
    mensajeFinal.style.display = 'block';
    // Reiniciar la animación
    mensajeFinal.style.animation = 'none';
    setTimeout(() => {
      mensajeFinal.style.animation = 'fadeInScale 1s ease forwards';
    }, 10);
  }, 2000);
  
  // Limpiar el contenedor después de la animación
  setTimeout(() => {
    container.remove();
  }, 8000);
}

function hapusKue(){
  btn_2.style.display = "block"
  btn_2.textContent = "Sonrie*"
  btn_3.style.display = "none"
  img.src = "./img/pato.gif"
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
