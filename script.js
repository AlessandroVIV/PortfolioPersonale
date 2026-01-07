const elementi = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elementi.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (
      rect.top < window.innerHeight - 100 &&
      rect.bottom > 0 &&
      !el.classList.contains("show")
    ) {
      el.classList.add("show");
    }
  });
});

window.history.scrollRestoration = "manual";

window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.querySelector(".btn.chi").addEventListener("click", () => {
  const target = document.querySelector("#blocco2");
  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

document.querySelector(".btn.comp").addEventListener("click", () => {
  const target = document.querySelector("#blocco3");
  target.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".btn.progetti").addEventListener("click", () => {
  const target = document.querySelector("#blocco4");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector(".btn.achievements").addEventListener("click", () => {
  const target = document.querySelector("#blocco5");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector(".btn.contatti").addEventListener("click", () => {
  const target = document.querySelector("footer");
  target.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".btn.su").addEventListener("click", () => {
  const target = document.querySelector("#blocco1");
  target.scrollIntoView({ behavior: "smooth" });
});

const skillBars = document.querySelectorAll(".fill");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const width = el.dataset.width;
      el.style.width = width;
    }
  });
});

skillBars.forEach((bar) => {
  observer.observe(bar);
});

function rimuoviFadeInResponsive() {
  const chisono = document.querySelector("#chisono");

  if (window.innerWidth <= 600) {
    chisono.classList.remove("fade-in");
  }
}

window.addEventListener("load", rimuoviFadeInResponsive);
window.addEventListener("resize", rimuoviFadeInResponsive);

const testi = {
  it: {
    nome: "Alessandro Vivaldi",
    titolo: "Junior Fullstack Developer",
    descrizione: "Dalle basi di HTML e CSS3, ai database con Spring e MySQL",
    chi: "Chi sono",
    competenze: "Competenze",
    progetti: "Progetti",
    contatti: "Contatti",
    chisonoTitolo: "Chi sono",
    chisonoPar1: `Mi chiamo <b>Alessandro Vivaldi</b>, sono un ragazzo di <b>Roma</b> che ha sviluppato, tra il 2024 e il 2025, una <b>forte passione</b> per il mondo della <b>programmazione</b> sia <b>frontend</b> che <b>backend.</b>`,
    chisonoPar2: `Seguendo un corso da <b>Fullstack Developer</b> della durata di quasi un anno, ho acquisito <b>competenze base</b> sul mondo della programmazione passando dalle basi di <b>HTML e CSS, a Javascript fino ad Angular.</b> Dopodiché son passato alla parte di <b>sviluppo backend con MySQL, Java base e Spring.</b>`,
    chisonoPar3: `Questo <b>corso</b> mi ha dato la spinta per continuare a <b>creare</b> e ad <b>imparare</b> di più su questo <b>vasto mondo</b> partendo anche da un <b>semplice portfolio come questo!</b>`,
    competenzeTitolo: "Le mie competenze",
    competenzeLinguaggi: "Linguaggi",
    competenzeDatabase: "Database / Controllo Versione",
    competenzeAltro: "Altro",
    competenzeLocalStorage: "Gestione Local Storage",
    progettiTitolo: "I miei progetti",
    contattiTitolo: "Contatti",
    cvText: "Vuoi sapere di più su di me? Scarica il mio CV!",
    cvBtnSintetico: "CV Sintetico",
    cvBtnCompleto: "CV Completo",
    progetto1Titolo: "Replica sito ufficiale Nike",
    progetto1Desc:
      "Una replica responsive del sito ufficiale Nike comprendente di registrazione, login, carrello e registro ordini.",
    progetto1Frontend: "Vai alla parte Frontend",
    progetto1Backend: "Vai alla parte Backend",
    progetto2Titolo: "Prenotazione Cinema 24h",
    progetto2Desc:
      "Un'app di prenotazione cinema realizzata entro 24h, in gruppi da 3, durante una coding challenge",
    progetto2Link: "Vai al progetto",
    progetto3Titolo: "Portfolio personale",
    progetto3Desc:
      "Questo stesso portfolio lo considero uno dei miei progetti! Spero ce ne saranno ancora tanti a venire!",
    tornaSu: "Torna su",
    progetto4Titolo: "E-Commerce Articoli Sportivi",
    progetto4Desc:
      "Una semplice applicazione di e-commerce per articoli sportivi realizzata come progetto finale del corso con Betacom",
    progetto4Frontend: "Vai alla parte Frontend",
    progetto4Backend: "Vai alla parte Backend",
  },

  en: {
    nome: "Alessandro Vivaldi",
    titolo: "Junior Fullstack Developer",
    descrizione:
      "From HTML and CSS3 basics, to databases with Spring and MySQL",
    chi: "About me",
    competenze: "Skills",
    progetti: "Projects",
    contatti: "Contacts",
    chisonoTitolo: "About me",
    chisonoPar1: `My name is <b>Alessandro Vivaldi</b>, I’m from <b>Rome</b>, and between 2024 and 2025 I developed a <b>strong passion</b> for the programming world, from <b>frontend</b> to <b>backend</b> development.`,
    chisonoPar2: `By attending a <b>Fullstack Developer</b> course lasting almost a year, I gained <b>foundational skills</b> starting from <b>HTML and CSS, to JavaScript and Angular.</b> Then I moved on to the backend part with <b>MySQL, Java basics and Spring.</b>`,
    chisonoPar3: `This <b>course</b> gave me the push to keep <b>creating</b> and <b>learning</b> more about this <b>awesome world</b>, starting even from a <b>simple portfolio like this!</b>`,
    competenzeTitolo: "My skills",
    competenzeLinguaggi: "Languages",
    competenzeDatabase: "Database / Version control",
    competenzeAltro: "Others",
    competenzeLocalStorage: "Local Storage Management",
    progettiTitolo: "My projects",
    contattiTitolo: "Contacts",
    cvText: "Want to know more about me? Download my CV!",
    cvBtnSintetico: "Short CV",
    cvBtnCompleto: "Full CV",
    progetto1Titolo: "Nike official site replica",
    progetto1Desc:
      "A responsive replica of the official Nike site, with login, register, cart and order tracking.",
    progetto1Frontend: "Go to Frontend",
    progetto1Backend: "Go to Backend",
    progetto2Titolo: "Cinema Booking App (24h)",
    progetto2Desc:
      "A cinema booking app made in 24h with a team of 3, during a coding challenge.",
    progetto2Link: "View project",
    progetto3Titolo: "Personal portfolio",
    progetto3Desc:
      "I consider this portfolio one of my own projects! And I hope many more will come!",
    tornaSu: "Go back up",
    progetto4Titolo: "Sports Articles E-Commerce",
    progetto4Desc:
      "A simple e-commerce application for sports items, built as the final project of the Betacom course.",
    progetto4Frontend: "Go to Frontend",
    progetto4Backend: "Go to Backend",
  },
};

let linguaCorrente = "it";
const linguaSalvata = localStorage.getItem("lingua");
const bandiera = document.getElementById("bandiera");

if (linguaSalvata && linguaSalvata !== linguaCorrente) {
  linguaCorrente = linguaSalvata;
  aggiornaBandiera();
  aggiornaTesti();
}

document.getElementById("selezionaLingua").addEventListener("click", () => {
  linguaCorrente = linguaCorrente === "it" ? "en" : "it";
  localStorage.setItem("lingua", linguaCorrente);
  aggiornaBandiera();
  aggiornaTesti();
});

function aggiornaBandiera() {
  bandiera.src =
    linguaCorrente === "it" ? "img/unitedKingdom.png" : "img/italy.png";
  bandiera.alt =
    linguaCorrente === "it" ? "Switch to English" : "Passa all'italiano";
}

function aggiornaTesti() {
  const t = testi[linguaCorrente];

  // Prima parte
  document.querySelector("#info h2").innerText = t.nome;
  document.querySelector("#info h3").innerText = t.titolo;
  document.querySelector("#info p").innerText = t.descrizione;

  // Bottoni
  const btns = document.querySelectorAll("#bottoniInfo .btn");
  btns[0].innerText = t.chi;
  btns[1].innerText = t.competenze;
  btns[2].innerText = t.progetti;
  btns[3].innerText = t.contatti;

  // Chisono section
  const chisono = document.querySelector("#chisono");
  chisono.querySelector("h2").innerText = t.chisonoTitolo;
  const ps = chisono.querySelectorAll("p");
  ps[0].innerHTML = t.chisonoPar1;
  ps[1].innerHTML = t.chisonoPar2;
  ps[2].innerHTML = t.chisonoPar3;

  // Competenze, progetti, contatti
  document.querySelector("#competenze h2").innerText = t.competenzeTitolo;
  document.querySelector("#linguaggi h3").innerText = t.competenzeLinguaggi;
  document.querySelector("#database h3").innerText = t.competenzeDatabase;
  document.querySelector("#altro h3").innerText = t.competenzeAltro;
  document.querySelector("#localStorage span").innerText =
    t.competenzeLocalStorage;
  document.querySelector("#progetti h2").innerText = t.progettiTitolo;
  document.querySelector("#contatti h2").innerText = t.contattiTitolo;

  // Progetti cards
  const cards = document.querySelectorAll(".cardProgetto");

  cards[0].querySelector("h3").innerText = t.progetto1Titolo;
  cards[0].querySelector("p").innerText = t.progetto1Desc;

  const link1 = cards[0].querySelectorAll("a");

  link1[0].innerText = t.progetto1Frontend;
  link1[1].innerText = t.progetto1Backend;

  cards[1].querySelector("h3").innerText = t.progetto2Titolo;
  cards[1].querySelector("p").innerText = t.progetto2Desc;
  cards[1].querySelector("a").innerText = t.progetto2Link;

  cards[2].querySelector("h3").innerText = t.progetto3Titolo;
  cards[2].querySelector("p").innerText = t.progetto3Desc;
  cards[2].querySelector("button").innerText = t.tornaSu;

  cards[3].querySelector("h3").innerText = t.progetto4Titolo;
  cards[3].querySelector("p").innerText = t.progetto4Desc;

  const link4 = cards[3].querySelectorAll("a");
  link4[0].innerText = t.progetto4Frontend;
  link4[1].innerText = t.progetto4Backend;

  // CV
  document.querySelector("#cv h3").innerText = t.cvText;
  const cvBtns = document.querySelectorAll("#cv .btn");
  cvBtns[0].innerHTML = `<i class="fas fa-download"></i>${t.cvBtnSintetico}`;
  cvBtns[1].innerHTML = `<i class="fas fa-download"></i>${t.cvBtnCompleto}`;
}

// Gestione Lightbox per gli Achievements
const zoomableImages = document.querySelectorAll(".zoomable");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeLightbox");

zoomableImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
    lightbox.classList.remove("fade-out");
  });
});

function closeLightbox() {
  lightbox.classList.add("fade-out");
  lightbox.classList.remove("active");
  setTimeout(() => {
    lightbox.classList.remove("fade-out");
    lightboxImg.src = "";
  }, 300); // matcha col transition
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
