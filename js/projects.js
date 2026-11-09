/* ============================================================
   TON CONTENU : modifie uniquement ce fichier.
   Les images vont dans le dossier img/ (tant qu'une image est
   absente, une vignette de remplacement s'affiche).
   ============================================================ */
const SITE = {
  firstName: "Gaspard",
  lastName: "RÉMY",
  heroImage: "img/moirevers.png",
  tagline: ["Étudiant en cinéma", "Technicien audiovisuel"],
  contact: "mailto:remy.gaspard.pro@gmail.com",
  email: "remy.gaspard.pro@gmail.com",
  aboutPhotos: ["img/moi_tournage.jpg", "img/moi_camera.jpg"],
  about: [
    "Je suis étudiant en cinéma et également technicien audiovisuel, basé à Paris et Laon (02). Je réalise des courts métrages mais aussi des clips vidéo et aftermovie avec mon auto-entreprise."
  ],
  socials: [
    { label: "YouTube",   url: "https://www.youtube.com/@Gaspard.r?si=FL0AsQNdsogk4_ZQ.com/" },     // à remplacer par ta chaîne
    { label: "Instagram", url: "https://www.instagram.com/" },   // à remplacer par ton profil
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/gaspard-remy-likdn//in/gaspard-remy-likdn.com/" }     // à remplacer par ton profil
  ],
  footer: "© 2026 Gaspard Rémy"
};

/* Études (section « Expérience » du site de référence) */
const EXPERIENCE = [
  { date: "2026", title: "Licence cinéma", meta: "Paris 8", desc: "" },
  { date: "2024", title: "BTS Audiovisuel", meta: "Lycée Henri Martin", desc: "" }
];

/* Grandes cartes (2 par ligne) : « Mes projets » */
const FEATURED = {
  title: "Mes projets",
  lead: "",
  items: [
    { title: "Split Scream", meta: "2025",
      desc: "Réalisation d'un court métrage en plan séquence avec un split screen et une vue subjective",
      image: "img/splitscream.png", link: null },      // link: { url: "https://...", label: "Voir le film", note: "" }
    { title: "Le Havre", meta: "2026",
      desc: "Réalisation d'un court métrage présentant la ville du Havre",
      image: "img/havre3.png", link: null }
  ]
};

/* Liste avec vignette à gauche : « Mon travail » + prix */
const OTHERS = {
  title: "Mon travail",
  lead: "Durant mes deux années de BTS j'ai pu expérimenter et créer avec mes camarades.",
  items: [
    { title: "Yves Saint Laurent", year: "2026", tag: "fausse publicité",
      desc: "Réalisation d'une fausse publicité sur le parfum Black Opium d'Yves Saint Laurent",
      image: "img/parfum1.png", url: "" },
    { title: "Panasonic", year: "2026", tag: "fausse publicité",
      desc: "Réalisation d'une fausse publicité sur la caméra UX90 de Panasonic",
      image: "img/panasonicpub.png", url: "" },
    { title: "Prix des 24H de la réalisation", year: "2025", tag: "old memories",
      desc: "« Prix de la meilleure photographie ». Concours organisé au sein du BTS audiovisuel d'Henri Martin.",
      image: "img/oldmemoriesplage.png", url: "" },
    { title: "Prix des 24H de la réalisation", year: "2026", tag: "Alice de 6 à 10",
      desc: "« Prix de la meilleure photographie ». Deuxième édition du concours.",
      image: "img/cléode6a10_2.png", url: "" }
  ]
};

const SKILLS = ["Cadrage", "Réalisation", "Montage", "Lumière"];

const INSPIRATIONS = {
  lead: "Les films que je regarde sont une grande source d'inspiration, surtout lorsqu'il s'agit de scènes avec des effets stylistiques marqués.",
  items: [
    { title: "Fallen Angels", credit: "Wong Kar-wai, 1995",
      note: "Grand angle, lumière néon, slow shutter, caméra portée",
      images: [{ src: "img/FallenAngels2.webp", alt: "Fallen Angels" }, { src: "img/FallensAngels3.webp", alt: "Fallen Angels" }] },
    { title: "Solaris", credit: "Andreï Tarkovski, 1972",
      note: "Longs plans, traveling et panoramique lents, composition réfléchie",
      images: [{ src: "img/solaris.png", alt: "Solaris" }, { src: "img/solaris_champ1.webp", alt: "Solaris" }] },
    { title: "Tree of Life", credit: "Terrence Malick, 2011",
      note: "Grand angle, lumière naturelle, contemplatif",
      images: [{ src: "img/Tree-of-Life-Shadow.jpg", alt: "Tree of Life" }, { src: "img/tree-of -life_main.png", alt: "Tree of Life" }] },
    { title: "Sur le globe d'argent", credit: "Andrzej Żuławski, 1988",
      note: "Grand angle, caméra portée, décors grandioses",
      images: [{ src: "img/Globe2.jpg", alt: "Sur le globe d'argent" }, { src: "img/Globe1.jpg", alt: "Sur le globe d'argent" }] },
    { title: "Gaspar Noé", credit: "Climax (2018) · Irréversible (2002) · Vortex (2021)",
      note: "Plans séquence, caméra portée, coupes cachées, split screen",
      images: [{ src: "img/climax_evier.jpg", alt: "Climax" }, { src: "img/irreversible_car.jpg", alt: "Irréversible" }, { src: "img/vortex1.png", alt: "Vortex" }] }
  ]
};

/* ---------- Rendu (pas besoin d'y toucher) ---------- */
const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = id => document.getElementById(id);

const media = (src, alt, cls) => src
  ? `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy"
       onerror="this.outerHTML='<div class=&quot;${cls} ph&quot;>${esc(alt.slice(0, 1))}</div>'">`
  : `<div class="${cls} ph" aria-hidden="true">${esc(alt.slice(0, 1))}</div>`;

function render() {
  document.title = `${SITE.firstName} ${SITE.lastName}`;
  $("name").innerHTML = `<span>${esc(SITE.firstName)}</span><span>${esc(SITE.lastName)}</span>`;
  $("tagline").innerHTML = SITE.tagline.map(l => `<span>${esc(l)}</span>`).join("");
  if (SITE.heroImage) {
    const probe = new Image();
    probe.onload = () => { document.querySelector(".hero").style.backgroundImage = `url("${SITE.heroImage}")`; };
    probe.src = SITE.heroImage;
  }
  $("about-photos").innerHTML =
    media(SITE.aboutPhotos[0], "Photo de Gaspard", "photo-a") + media(SITE.aboutPhotos[1], "Gaspard en tournage", "photo-b");
  $("about-text").innerHTML = SITE.about.map(p => `<p>${esc(p)}</p>`).join("");

  $("experience-list").innerHTML = EXPERIENCE.map(j => `
    <article class="job">
      <div class="job-date">${esc(j.date)}</div>
      <div>
        <h3 class="job-title">${esc(j.title)}</h3>
        <p class="job-meta">${esc(j.meta)}</p>
        ${j.desc ? `<p class="job-desc">${esc(j.desc)}</p>` : ""}
      </div>
    </article>`).join("");

  document.querySelector("#projects h2").textContent = FEATURED.title;
  $("featured-lead").textContent = FEATURED.lead;
  $("featured-lead").hidden = !FEATURED.lead;
  $("featured-list").innerHTML = FEATURED.items.map(p => `
    <article class="card">
      ${media(p.image, p.title, "card-media")}
      <div class="card-body">
        <h3>${esc(p.title)}</h3>
        <p class="meta">${esc(p.meta)}</p>
        <p class="desc">${esc(p.desc)}</p>
        ${p.link ? `<a class="link" href="${esc(p.link.url)}" target="_blank" rel="noopener">${esc(p.link.label)} →
          ${p.link.note ? `<small>${esc(p.link.note)}</small>` : ""}</a>` : ""}
      </div>
    </article>`).join("");

  document.querySelector("#other h2").textContent = OTHERS.title;
  $("other-lead").textContent = OTHERS.lead;
  $("other-list").innerHTML = OTHERS.items.map(p => `
    <article class="row">
      ${media(p.image, p.title, "row-media")}
      <div>
        <h3>${esc(p.title)} <span class="meta">${esc([p.year, p.tag].filter(Boolean).join(" · "))}</span></h3>
        <p>${esc(p.desc)}</p>
        ${p.url ? `<a class="link" href="${esc(p.url)}" target="_blank" rel="noopener">Voir le projet →</a>` : ""}
      </div>
    </article>`).join("");

  $("skills-list").innerHTML = SKILLS.map(s => `<li>${esc(s)}</li>`).join("");

  $("insp-lead").textContent = INSPIRATIONS.lead;
  $("insp-list").innerHTML = INSPIRATIONS.items.map(f => `
    <article class="film">
      <h3>${esc(f.title)}</h3>
      <p class="credit">${esc(f.credit)}</p>
      <div class="stills">${f.images.map(i => `<figure class="still">${media(i.src, i.alt, "still-media")}${f.images.length > 2 ? `<figcaption>${esc(i.alt)}</figcaption>` : ""}</figure>`).join("")}</div>
      <p class="note">${esc(f.note)}</p>
    </article>`).join("");

  $("mail").textContent = SITE.email;
  $("contact").href = SITE.contact;
  $("socials").innerHTML = SITE.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
  $("footer-text").textContent = SITE.footer;
}

document.addEventListener("DOMContentLoaded", render);
