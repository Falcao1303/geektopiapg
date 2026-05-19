import { useEffect, useMemo, useState } from "react";

const eventDate = new Date("2026-08-22T13:00:00").getTime();

const editions = [
  {
    id: "edicao1",
    title: "1a Edicao (2023)",
    details: ["Publico: 330 pessoas", "Local: Teatro CECI"],
    description:
      "Ingressos esgotados com artist alley, games, k-pop, cosplay e workshops.",
    photos: [
      "/images/geektopia1.JPG",
      "/images/geektopia2.JPG",
      "/images/geektopia3.JPG",
    ],
  },
  {
    id: "edicao2",
    title: "2a Edicao - Natal Otaku (2023)",
    details: ["Publico: 317 pessoas", "Local: A Pizza Frita"],
    description:
      "Evento lotado com games, apresentacao k-pop, desfile cosplay e lojas.",
    photos: ["/images/natal1.jpg", "/images/natal2.jpg"],
  },
  {
    id: "edicao3",
    title: "3a Edicao (2024)",
    details: ["Publico: 2500 pessoas", "Local: AABB"],
    description:
      "Primeiro evento dos Campos Gerais com dubladores nacionais e multiplas atracoes geek.",
    photos: [
      "/images/3edicao-1.jpg",
      "/images/3edicao2.jpg",
      "/images/3edicao3.jpg",
      "/images/3edicao4.jpg",
      "/images/3edicao6.jpg",
    ],
  },
  {
    id: "halloween",
    title: "Geektopia Halloween (2024)",
    details: ["Publico: 317 pessoas", "Local: Billi's Burguer"],
    description:
      "Edicao tematica com card game, k-pop, cosplay e experiencias especiais.",
    photos: ["/images/halloween.jpg", "/images/halloween2.jpg"],
  },
  {
    id: "edicao4",
    title: "4a Edicao (2025)",
    details: ["Publico: 2800 pessoas", "Local: Clube Verde - PG"],
    description:
      "A maior edicao ate agora, com convidadas especiais, competicoes e grande publico.",
    photos: [
      "/images/4edicao/1.jpg",
      "/images/4edicao/2.jpg",
      "/images/4edicao/20250816_143932.jpg",
      "/images/4edicao/20250816_160635.jpg",
      "/images/4edicao/20250816_174657.jpg",
      "/images/4edicao/20250817_162606.jpg",
    ],
  },
];

const navItems = [
  ["home", "Inicio"],
  ["sobre", "Sobre"],
  ["edicoes", "Edicoes"],
  ["contato", "Contato"],
];

function getCountdown() {
  const now = Date.now();
  const distance = eventDate - now;

  if (distance <= 0) {
    return { ended: true, days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    ended: false,
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function App() {
  const [countdown, setCountdown] = useState(getCountdown);
  const [activeEdition, setActiveEdition] = useState(editions[0].id);
  const [activePhoto, setActivePhoto] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActivePhoto("");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const edition = useMemo(
    () => editions.find((item) => item.id === activeEdition) ?? editions[0],
    [activeEdition]
  );

  const goTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-shell">
      <header className="hero-bg" id="home">
        <div className="aurora a1" />
        <div className="aurora a2" />
        <div className="aurora a3" />

        <nav className="top-nav">
          <div className="brand">GEEKTOPIA</div>
          <div className="nav-links">
            {navItems.map(([id, label]) => (
              <button key={id} type="button" onClick={() => goTo(id)}>
                {label}
              </button>
            ))}
          </div>
        </nav>

        <section className="hero-content container">
          <p className="tag">22 e 23 de Agosto de 2026 | Ponta Grossa - PR | 13h</p>
          <h1>Uma experiencia geek viva, colorida e inesquecivel.</h1>
          <p className="subtitle">
            Cultura pop, cosplay, games, k-pop, comunidade e energia de evento grande em uma
            identidade visual renovada.
          </p>
          <div className="hero-actions">
            <a
              href="https://uticket.com.br/evento/geektopia-5-edicao/01LQT68BH3OPMU"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Comprar ingressos
            </a>
            <button type="button" className="btn ghost" onClick={() => goTo("edicoes")}>
              Ver edicoes
            </button>
          </div>
        </section>

        <section className="hero-banner container">
          <img src="/images/bannersitenovo.jpeg" alt="Banner Geektopia" />
        </section>
      </header>

      <main>
        <section className="countdown container">
          <h2>Contagem regressiva</h2>
          {countdown.ended ? (
            <p className="countdown-ended">Obrigado por viver a Geektopia com a gente.</p>
          ) : (
            <div className="clock-grid">
              <div><strong>{countdown.days}</strong><span>Dias</span></div>
              <div><strong>{countdown.hours}</strong><span>Horas</span></div>
              <div><strong>{countdown.minutes}</strong><span>Min</span></div>
              <div><strong>{countdown.seconds}</strong><span>Seg</span></div>
            </div>
          )}
        </section>

        <section className="about container" id="sobre">
          <article className="card glow">
            <h3>O evento</h3>
            <p>
              O Geektopia conecta pessoas apaixonadas por cultura pop em uma atmosfera criada por
              quem vive esse universo. Cada edicao cresce em publico, estrutura e impacto local.
            </p>
          </article>
          <article className="card">
            <h3>Organizacao</h3>
            <p>
              Conselho de Cultura POP de Ponta Grossa: projeto colaborativo que fortalece artistas,
              criadores, lojistas e a cena geek dos Campos Gerais.
            </p>
            <img src="/images/logo_ccpop.png" alt="Logo Conselho de Cultura POP" className="logo" />
          </article>
          <article className="card sponsors">
            <h3>Patrocinio</h3>
            <img src="/images/patrocinio.png" alt="Patrocinadores Geektopia" />
          </article>
        </section>

        <section className="editions container" id="edicoes">
          <h2>Edições anteriores</h2>
          <div className="edition-tabs">
            {editions.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === edition.id ? "is-active" : ""}
                onClick={() => setActiveEdition(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="edition-panel">
            <div className="edition-copy">
              <h3>{edition.title}</h3>
              <p>{edition.description}</p>
              <ul>
                {edition.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="edition-gallery">
              {edition.photos.map((photo) => (
                <button key={photo} type="button" onClick={() => setActivePhoto(photo)}>
                  <img src={photo} alt={edition.title} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="contact container" id="contato">
          <div className="card">
            <h2>Contato</h2>
            <p>Tem proposta, parceria ou duvida? Fala com o time.</p>
            <form action="https://formspree.io/f/xvoevzyr" method="POST">
              <label>
                Nome
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="_replyto" required />
              </label>
              <label>
                Mensagem
                <textarea name="message" rows="4" required />
              </label>
              <button type="submit" className="btn primary">Enviar</button>
            </form>
          </div>

          <div className="card social">
            <h3>Redes</h3>
            <a href="https://www.instagram.com/geektopia_pg/" target="_blank" rel="noreferrer">
              Instagram Geektopia
            </a>
            <a href="https://www.instagram.com/ccpop.pg/" target="_blank" rel="noreferrer">
              Instagram CCPOP
            </a>
            <a href="https://www.tiktok.com/@ccpop.pg" target="_blank" rel="noreferrer">
              TikTok CCPOP
            </a>
            <a href="mailto:cocpopg.contato@gmail.com">cocpopg.contato@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="footer">Geektopia 2026 | Feito para a comunidade geek de PG.</footer>

      {activePhoto && (
        <button type="button" className="lightbox" onClick={() => setActivePhoto("")}>
          <img src={activePhoto} alt="Foto ampliada" />
        </button>
      )}
    </div>
  );
}
