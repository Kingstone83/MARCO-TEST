const ASSET_PHOTO = "assets/2e28ad23-d030-4593-9b35-d4e20e55f7fa.png";
const HOME_HERO_PHOTO = "assets/home-hero-podologica.png";
const FOOT_PAIN_HERO_PHOTO = "assets/foot-pain-hero.png";
const FALLBACK_PHOTO = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=82";
const CLINIC_PHOTO = "https://images.unsplash.com/photo-1584467735871-829732e270e8?auto=format&fit=crop&w=1400&q=82";
const ANALYSIS_PHOTO = "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=82";
const RUN_PHOTO = "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?auto=format&fit=crop&w=1400&q=82";
const SHOES_PHOTO = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=82";
const TECH_PHOTO = "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1400&q=82";

const navItems = [
  ["Home", "index.html"],
  ["Metodo Biodinamica", "pages/metodo-biodinamica.html"],
  ["Analisi", "pages/analisi.html"],
  ["Plantari su misura", "pages/plantari-su-misura.html"],
  ["Foot Pain Identifier", "pages/foot-pain-identifier.html"],
  ["Patologie", "pages/patologie-disturbi.html"],
  ["Tecnologia", "pages/tecnologia.html"],
  ["Chi siamo", "pages/chi-siamo.html"],
  ["Contatti", "pages/contatti.html"]
];

const icon = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  foot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3c3 0 5 3 5 7 0 5 4 5 4 8 0 2-2 3-5 3-5 0-8-4-8-9 0-6 1-9 4-9Z"/><path d="M15 4h.01"/><path d="M18 6h.01"/><path d="M19 9h.01"/></svg>',
  scan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V5a1 1 0 0 1 1-1h2"/><path d="M17 4h2a1 1 0 0 1 1 1v2"/><path d="M20 17v2a1 1 0 0 1-1 1h-2"/><path d="M7 20H5a1 1 0 0 1-1-1v-2"/><path d="M7 12h10"/></svg>'
};

const analysisServices = [
  ["Analisi del piede", "Per valutare appoggio, struttura, pressioni e zone di carico.", "analisi-del-piede.html"],
  ["Analisi del passo", "Per osservare il movimento reale durante la camminata.", "analisi-del-passo.html"],
  ["Analisi della corsa", "Per runner, sportivi e persone con dolore durante attivita dinamiche.", "analisi-della-corsa.html"],
  ["Analisi baropodometrica", "Per misurare la distribuzione delle pressioni in statica e dinamica.", "analisi.html"],
  ["Analisi della calzata", "Per capire se la scarpa aiuta o peggiora il problema.", "calzature-feetting.html"]
];

const methodSteps = [
  ["Anamnesi tecnica", "Raccogliamo informazioni su dolore, abitudini, attivita lavorativa, sport, calzature utilizzate e storia del problema."],
  ["Osservazione del piede", "Analizziamo morfologia, appoggio, mobilita, aree di sovraccarico e punti sensibili."],
  ["Analisi statica", "Studiamo la distribuzione del carico a piede fermo, individuando asimmetrie, pressioni e compensi."],
  ["Analisi dinamica", "Valutiamo il passo in movimento per capire come il piede entra in contatto con il suolo, sostiene il peso e accompagna la spinta."],
  ["FEETTING calzatura", "Controlliamo la relazione tra piede, plantare e scarpa. Una buona soluzione deve funzionare dentro la calzatura reale."],
  ["Soluzione personalizzata", "Progettiamo il trattamento piu adatto: indicazioni tecniche, modifica della calzatura, plantare su misura o percorso di controllo."]
];

const plantTypes = [
  ["Plantari Biodinamici", "Per chi necessita di una soluzione funzionale, personalizzata e integrata con la dinamica del passo."],
  ["Plantari Biomeccanici", "Per controllare compensi, sovraccarichi e alterazioni dell'appoggio."],
  ["Plantari Sportivi", "Per corsa, camminata sportiva, palestra, tennis, calcio e attivita dinamiche."],
  ["Plantari Podologici", "Per problematiche specifiche del piede, aree dolorose, ipercheratosi e sovraccarichi localizzati."],
  ["Plantari 3D", "Per soluzioni progettate digitalmente con alto livello di precisione."],
  ["Plantari per piede sensibile", "Per piedi delicati, diabetici, reumatici o con necessita di scarico e protezione."]
];

const painProfiles = {
  tallone: ["Tallone", "Dolore al tallone", "Possibili correlazioni: tallonite, fascite plantare, sperone calcaneare, sovraccarico posteriore.", ["Dolore al risveglio", "Fastidio dopo cammino o corsa", "Puntura sotto il tallone"], "Analisi del piede", "analisi-del-piede.html"],
  arco: ["Arco plantare", "Dolore all'arco plantare", "Possibili correlazioni: fascite plantare, piede piatto, sovraccarico della fascia, pronazione.", ["Tensione sotto il piede", "Bruciore centrale", "Stanchezza plantare"], "Analisi del passo", "analisi-del-passo.html"],
  avampiede: ["Avampiede", "Dolore all'avampiede", "Possibili correlazioni: metatarsalgia, neuroma di Morton, sovraccarico metatarsale.", ["Bruciore anteriore", "Formicolio", "Dolore con scarpe strette"], "FEETTING calzatura", "calzature-feetting.html"],
  alluce: ["Alluce", "Dolore all'alluce", "Possibili correlazioni: alluce valgo, alluce rigido, conflitto con la calzatura.", ["Rigidita in spinta", "Deviazione", "Irritazione laterale"], "Patologie", "patologie-disturbi.html"],
  dita: ["Dita", "Dolore alle dita", "Possibili correlazioni: dita a martello, callosita, sfregamento, deformita digitali.", ["Calli dorsali", "Dita contratte", "Sfregamento"], "FEETTING calzatura", "calzature-feetting.html"],
  achille: ["Tendine d'Achille", "Dolore al tendine d'Achille", "Possibili correlazioni: tendinopatia achillea, retrazione, sovraccarico sportivo.", ["Rigidita posteriore", "Dolore in salita", "Fastidio dopo sport"], "Analisi della corsa", "analisi-della-corsa.html"],
  interno: ["Lato interno", "Dolore lato interno", "Possibili correlazioni: pronazione, tibiale posteriore, collasso dell'arco.", ["Cedimento interno", "Affaticamento", "Dolore dopo cammino"], "Analisi del passo", "analisi-del-passo.html"],
  esterno: ["Lato esterno", "Dolore lato esterno", "Possibili correlazioni: supinazione, instabilita, sovraccarico laterale.", ["Carico laterale", "Instabilita", "Dolore su terreni irregolari"], "Analisi del passo", "analisi-del-passo.html"]
};

const painSeverity = {
  lieve: "Se il fastidio e lieve e intermittente, osserva quando compare: scarpa, durata del cammino, sport o lavoro in piedi.",
  medio: "Se il dolore torna spesso o modifica il modo di camminare, una valutazione del passo aiuta a capire il carico che lo alimenta.",
  acuto: "Se il dolore e acuto, improvviso, associato a gonfiore o impedisce l'appoggio, serve una valutazione clinica rapida prima di forzare."
};

const pages = {
  metodo: {
    title: "Metodo Biodinamica",
    kicker: "Dalla forma al movimento",
    image: CLINIC_PHOTO,
    summary: "Dalla forma del piede al modo in cui ti muovi.",
    intro: "Il Metodo Biodinamica e un percorso di analisi che unisce valutazione del piede, studio del passo, osservazione della calzatura e progettazione personalizzata del plantare.",
    quote: "Non cercare subito un plantare. Cerca prima una valutazione corretta.",
    cta: "Prenota una valutazione Biodinamica"
  },
  analisi: {
    title: "Analisi del piede, del passo e della corsa",
    kicker: "Capire il movimento",
    image: ANALYSIS_PHOTO,
    summary: "Capire il movimento per correggere il sovraccarico.",
    intro: "Ogni passo contiene informazioni importanti. Attraverso strumenti di analisi e osservazione tecnica individuiamo come il piede si comporta nella vita quotidiana, nel lavoro e nello sport.",
    cta: "Prenota una valutazione"
  },
  piede: {
    title: "Analisi del piede",
    kicker: "Appoggio e carichi",
    image: ASSET_PHOTO,
    summary: "Valutiamo struttura, appoggio, carichi, aree di pressione e comportamento del piede in statica.",
    intro: "L'analisi del piede permette di leggere forma, mobilita, zone dolenti e distribuzione delle pressioni. E il primo passo per capire se il dolore nasce da sovraccarico, calzatura, cute, unghie o compensi funzionali.",
    bullets: ["Appoggio statico", "Morfologia del piede", "Aree di pressione", "Cute, unghie e zone sensibili"]
  },
  passo: {
    title: "Analisi del passo",
    kicker: "Movimento quotidiano",
    image: ANALYSIS_PHOTO,
    summary: "Osserviamo come il piede lavora durante il movimento, individuando compensi, sovraccarichi e alterazioni funzionali.",
    intro: "L'analisi del passo mostra come il piede entra in contatto con il suolo, sostiene il peso e accompagna la spinta. Qui spesso emergono compensi invisibili a piede fermo.",
    bullets: ["Contatto iniziale", "Distribuzione del carico", "Simmetrie", "Spinta e stabilita"]
  },
  corsa: {
    title: "Analisi della corsa",
    kicker: "Sport e performance",
    image: RUN_PHOTO,
    summary: "Per runner, sportivi e persone con dolore durante attivita dinamiche.",
    intro: "Analizziamo appoggio, tecnica, calzatura e carichi per ridurre sovraccarichi e costruire un ritorno allo sport piu controllato.",
    bullets: ["Videoanalisi", "Appoggio dinamico", "Valutazione scarpe", "Progressione del carico"]
  },
  plantari: {
    title: "Plantari su misura",
    kicker: "Progettati sui tuoi piedi",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1400&q=82",
    summary: "Progettati sui tuoi piedi. Rifiniti sul tuo passo.",
    intro: "I plantari su misura Podologica nascono dall'analisi del piede, del movimento e della calzatura. Ogni soluzione viene progettata per migliorare distribuzione dei carichi, comfort, stabilita e funzionalita.",
    quote: "Il plantare corretto nasce da una valutazione corretta.",
    cta: "Prenota la tua analisi"
  },
  calzature: {
    title: "Calzature e FEETTING",
    kicker: "La scarpa reale conta",
    image: SHOES_PHOTO,
    summary: "Controlliamo la relazione tra piede, plantare e scarpa per capire se la calzatura aiuta o peggiora il problema.",
    intro: "Una buona soluzione deve funzionare dentro la calzatura reale. FEETTING valuta misura, volume, forma, spazio interno e compatibilita con il plantare.",
    bullets: ["Misura reale del piede", "Volume e forma", "Compatibilita plantare", "Uso quotidiano o sportivo"]
  },
  dolore: {
    title: "Foot Pain Identifier",
    kicker: "Dimmi dove senti dolore",
    image: FOOT_PAIN_HERO_PHOTO,
    summary: "Dimmi dove senti dolore e iniziamo da li.",
    intro: "Il dolore al piede puo comparire in molte zone diverse. Tallone, arco plantare, avampiede, alluce, dita o tendine d'Achille possono indicare problematiche differenti. Questa sezione ti aiuta a orientarti.",
    cta: "Identifica il dolore"
  },
  patologie: {
    title: "Patologie e disturbi",
    kicker: "Dalla causa al trattamento",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=82",
    summary: "Schede chiare per orientarsi tra dolore al tallone, fascite plantare, metatarsalgia, alluce valgo, neuroma di Morton e piede sensibile.",
    intro: "Ogni disturbo viene letto nel rapporto tra dolore, carico, calzatura e movimento. Le schede aiutano a capire da dove partire, poi la valutazione definisce il percorso corretto.",
    bullets: ["Fascite plantare", "Tallonite", "Metatarsalgia", "Alluce valgo", "Neuroma di Morton", "Tendine d'Achille", "Piede diabetico o sensibile"]
  },
  tecnologia: {
    title: "Tecnologia",
    kicker: "Misurare e interpretare",
    image: TECH_PHOTO,
    summary: "Tecnologia al servizio del passo.",
    intro: "La tecnologia permette di raccogliere dati precisi. L'esperienza permette di trasformarli in una soluzione utile.",
    quote: "A.I. per noi significa Intelligenza Artigianale.",
    bullets: ["Baropodometria", "Analisi dinamica", "Scanner e acquisizione digitale", "Progettazione CAD", "Rifinitura manuale"]
  },
  chi: {
    title: "Podologica",
    kicker: "Chi siamo",
    image: CLINIC_PHOTO,
    summary: "Specialisti del piede, del passo e del movimento.",
    intro: "Podologica nasce per offrire un approccio tecnico e personalizzato alla valutazione del piede e alla realizzazione di plantari su misura. Il nostro lavoro parte dall'ascolto: ogni persona arriva con una storia diversa, dolore, fatica, scarpe che non funzionano, sport, lavoro o semplicemente il desiderio di camminare meglio.",
    quote: "I tuoi piedi, nelle mie mani."
  },
  contatti: {
    title: "Contatti",
    kicker: "Prenota una valutazione",
    image: CLINIC_PHOTO,
    summary: "Raccontaci dove senti dolore o quale obiettivo vuoi raggiungere.",
    intro: "Una prima valutazione Biodinamica permette di analizzare appoggio, passo e calzatura per individuare la soluzione piu adatta.",
    bullets: ["Valutazione Biodinamica", "Foot Pain Identifier", "Prima visita tecnica"]
  }
};

function imageWithFallback(src, alt) {
  const current = document.body.dataset.current || "index.html";
  const isLocalAsset = src.startsWith("assets/");
  const actualSrc = isLocalAsset && current.startsWith("pages/") ? `../${src}` : src;
  const fallback = FALLBACK_PHOTO;
  return `<img src="${actualSrc}" alt="${alt}" onerror="this.onerror=null;this.src='${fallback}'">`;
}

function relative(path, current) {
  const inPages = current.startsWith("pages/");
  if (inPages && path === "index.html") return "../index.html";
  if (inPages && path.startsWith("pages/")) return path.replace("pages/", "");
  if (inPages) return `../${path}`;
  return path;
}

function isActivePath(path, current) {
  if (path === "index.html") return current === "index.html";
  if (current === path) return true;
  return current.endsWith(path.replace("pages/", ""));
}

function header(current) {
  const links = navItems.map(([label, href]) => `<a href="${relative(href, current)}" ${isActivePath(href, current) ? 'aria-current="page"' : ""}>${label}</a>`).join("");
  return `
    <header class="site-header">
      <nav class="nav" aria-label="Navigazione principale">
        <a class="brand" href="${relative("index.html", current)}" aria-label="Podologica home">
          <span class="brand-mark">P</span>
          <span><span class="brand-name">Podologica</span><span class="brand-line">Metodo Biodinamica</span></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Apri menu" aria-expanded="false">${icon.menu}</button>
        <div class="nav-links">${links}</div>
        <a class="cta nav-cta" href="${relative("pages/contatti.html", current)}">Prenota ${icon.arrow}</a>
      </nav>
    </header>`;
}

function footer(current) {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <h3>Podologica</h3>
          <p>Centro specializzato in analisi del piede, del passo, della calzatura e plantari su misura con Metodo Biodinamica.</p>
        </div>
        <div>
          <h4>Metodo</h4>
          <a href="${relative("pages/metodo-biodinamica.html", current)}">Metodo Biodinamica</a>
          <a href="${relative("pages/tecnologia.html", current)}">Tecnologia</a>
          <a href="${relative("pages/chi-siamo.html", current)}">Chi siamo</a>
        </div>
        <div>
          <h4>Servizi</h4>
          <a href="${relative("pages/analisi.html", current)}">Analisi</a>
          <a href="${relative("pages/plantari-su-misura.html", current)}">Plantari su misura</a>
          <a href="${relative("pages/foot-pain-identifier.html", current)}">Foot Pain Identifier</a>
        </div>
        <div>
          <h4>Contatti</h4>
          <p>Via dello Studio 12</p>
          <p>info@podologica.it</p>
          <p>+39 000 000 0000</p>
        </div>
      </div>
    </footer>`;
}

function renderHome() {
  const current = "index.html";
  document.title = "Podologica | Metodo Biodinamica";
  document.body.innerHTML = `
    ${header(current)}
    <main>
      <section class="hero home-hero">
        <div class="hero-image">${imageWithFallback(HOME_HERO_PHOTO, "Podologica Metodo Biodinamica analisi del passo")}</div>
        <div class="hero-content">
          <span class="eyebrow">Biodinamica avanzata</span>
          <h1>Non partiamo dal plantare. Partiamo dal tuo passo.</h1>
          <p>Analizziamo il tuo piede, il tuo passo e la tua calzatura per progettare soluzioni piu efficaci per te.</p>
          <div class="hero-actions">
            <a class="cta" href="pages/contatti.html">Prenota la tua analisi ${icon.arrow}</a>
            <a class="cta secondary" href="pages/metodo-biodinamica.html">Scopri il Metodo Biodinamica</a>
          </div>
          <div class="hero-service-strip">
            ${miniFeature("Analisi avanzata", "Tecnologie statiche e dinamiche")}
            ${miniFeature("Plantari su misura", "Progettati con metodo e rifiniti artigianalmente")}
            ${miniFeature("Approccio scientifico", "Evidenza, dati e aggiornamento continuo")}
            ${miniFeature("Intelligenza Artigianale", "Tecnologia e mani esperte al servizio della persona")}
          </div>
        </div>
      </section>
      <section class="section service-showcase">
        <div class="inner">
          <div class="section-head">
            <span class="section-kicker">I nostri servizi</span>
            <h2>Un percorso ordinato: analisi, interpretazione, soluzione.</h2>
          </div>
          <div class="service-grid">
            ${imageService("Analisi del piede", "Valutazione statica e dinamica completa.", "pages/analisi-del-piede.html", ASSET_PHOTO)}
            ${imageService("Analisi del passo", "Studio del tuo modo di camminare.", "pages/analisi-del-passo.html", ANALYSIS_PHOTO)}
            ${imageService("Plantari su misura", "Realizzati su misura per te.", "pages/plantari-su-misura.html", "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=82")}
            ${imageService("FEETTING calzatura", "La calzatura giusta per il tuo benessere.", "pages/calzature-feetting.html", SHOES_PHOTO)}
          </div>
        </div>
      </section>
      <section class="section method-preview">
        <div class="inner">
          <div class="section-head centered">
            <span class="section-kicker">Il Metodo Biodinamica in 6 fasi</span>
            <h2>Prima capiamo la causa. Poi costruiamo la soluzione.</h2>
          </div>
          <div class="phase-line">
            ${methodSteps.map(([title], index) => `<a href="pages/metodo-biodinamica.html" class="phase"><span>${index + 1}</span><strong>${title}</strong></a>`).join("")}
          </div>
          <div class="center-actions">
            <a class="cta" href="pages/metodo-biodinamica.html">Scopri tutte le fasi ${icon.arrow}</a>
          </div>
        </div>
      </section>
      <section class="section pain-feature">
        <div class="inner feature-panel dark-panel">
          <div class="feature-copy">
            <span class="section-kicker">Foot Pain Identifier</span>
            <h2>Dove senti dolore? Troviamo la causa, insieme.</h2>
            <p>Il Foot Pain Identifier ti aiuta a orientarti tra le principali zone di dolore: tallone, arco plantare, avampiede, alluce, dita, tendine d'Achille, lato interno e lato esterno.</p>
            <p>Non sostituisce una valutazione professionale, ma ti aiuta a capire da dove partire.</p>
            <a class="cta" href="pages/foot-pain-identifier.html">Identifica il dolore ${icon.arrow}</a>
          </div>
          <div class="pain-card-grid">
            ${Object.entries(painProfiles).slice(0, 8).map(([key, data]) => `<a href="pages/foot-pain-identifier.html" class="pain-zone-card"><span>${data[0]}</span>${icon.arrow}</a>`).join("")}
          </div>
        </div>
      </section>
      <section class="section split-feature">
        <div class="inner feature-panel">
          <div class="feature-media">${imageWithFallback(TECH_PHOTO, "Tecnologia e laboratorio plantari")}</div>
          <div class="feature-copy">
            <span class="section-kicker">Tecnologia + artigianalita</span>
            <h2>Tecnologia, dati e mani esperte.</h2>
            <p>Utilizziamo strumenti di analisi del passo, baropodometria, scanner e progettazione digitale. Ogni dato viene letto, verificato e trasformato in una soluzione concreta.</p>
            <p class="quote">A.I. per noi significa Intelligenza Artigianale.</p>
            <a class="cta" href="pages/tecnologia.html">Scopri la tecnologia ${icon.arrow}</a>
          </div>
        </div>
      </section>
      <section class="section insights">
        <div class="inner">
          <div class="section-head">
            <span class="section-kicker">News e approfondimenti</span>
            <h2>Piccole guide per capire meglio il tuo piede.</h2>
          </div>
          <div class="article-grid">
            ${articleCard("Fascite plantare", "Cause, sintomi e rimedi", TECH_PHOTO)}
            ${articleCard("Come scegliere la calzatura giusta", "La scarpa non e un dettaglio", SHOES_PHOTO)}
            ${articleCard("Il ruolo del passo", "Quando il piede racconta il corpo", RUN_PHOTO)}
          </div>
        </div>
      </section>
      <section class="section cta-band">
        <div class="inner">
          <div>
            <h2>Vuoi capire se il tuo dolore parte dal piede?</h2>
            <p>Prenota una valutazione Biodinamica presso Podologica. Analizzeremo il tuo appoggio, il tuo passo e la tua calzatura per individuare la soluzione piu adatta.</p>
          </div>
          <a class="cta secondary" href="pages/contatti.html">Prenota ora</a>
        </div>
      </section>
    </main>
    ${footer(current)}`;
  bindMenu();
}

function homeServiceCard(title, text, href, label) {
  return `<article class="card"><span class="icon">${icon.foot}</span><h3>${title}</h3><p>${text}</p><p><a class="cta secondary" href="${href}">${label} ${icon.arrow}</a></p></article>`;
}

function miniFeature(title, text) {
  return `<article><span class="icon">${icon.foot}</span><h3>${title}</h3><p>${text}</p></article>`;
}

function imageService(title, text, href, image) {
  return `<article class="image-service"><a href="${href}">${imageWithFallback(image, title)}<span><strong>${title}</strong><small>${text}</small><em>Scopri di piu ${icon.arrow}</em></span></a></article>`;
}

function articleCard(title, text, image) {
  return `<article class="article-card">${imageWithFallback(image, title)}<div><h3>${title}</h3><p>${text}</p><a href="pages/patologie-disturbi.html">Leggi l'articolo ${icon.arrow}</a></div></article>`;
}

function card(title, text, href = "") {
  const link = href ? `<p><a class="cta secondary" href="${href}">Approfondisci ${icon.arrow}</a></p>` : "";
  return `<article class="card"><span class="icon">${icon.scan}</span><h3>${title}</h3><p>${text}</p>${link}</article>`;
}

function renderPage(slug, current) {
  const page = pages[slug];
  document.title = `${page.title} | Podologica`;
  document.body.classList.add(`page-${slug}`);
  document.body.innerHTML = `
    ${header(current)}
    <main>
      <section class="page-hero refined-hero">
        <div class="page-hero-text">
          <nav class="breadcrumb" aria-label="Percorso"><a href="${relative("index.html", current)}">Home</a><span>/</span><span>${page.title}</span></nav>
          <span class="section-kicker">${page.kicker}</span>
          <h1>${page.title}</h1>
          <p>${page.summary}</p>
          <div class="hero-actions">
            <a class="cta" href="${relative("pages/contatti.html", current)}">Prenota una valutazione ${icon.arrow}</a>
          </div>
        </div>
        <div class="page-hero-media">${imageWithFallback(page.image, page.title)}</div>
      </section>
      ${pageSpecific(slug, page)}
      ${closingCta(page, current)}
    </main>
    ${footer(current)}`;
  bindMenu();
  bindPainTool();
}

function closingCta(page, current) {
  return `<section class="section cta-band"><div class="inner"><div><h2>${page.quote || "Non ignorare il dolore. Ascolta il tuo corpo."}</h2><p>Parla con un esperto e prenota la tua analisi personalizzata.</p></div><a class="cta secondary" href="${relative("pages/contatti.html", current)}">${page.cta || "Prenota la tua visita"}</a></div></section>`;
}

function pageIntro(page) {
  return `
    <section class="section">
      <div class="inner split">
        <div>
          <span class="section-kicker">Approccio</span>
          <h2>Prima capiamo il perche, poi scegliamo la soluzione.</h2>
          <p>${page.intro}</p>
          ${page.bullets ? `<ul class="check-list">${page.bullets.map((item) => `<li>${icon.check}<span>${item}</span></li>`).join("")}</ul>` : ""}
        </div>
        <div class="media-frame">${imageWithFallback(page.image, page.title)}</div>
      </div>
    </section>`;
}

function pageSpecific(slug) {
  if (slug === "metodo") return methodSection();
  if (slug === "analisi") return analysisSection();
  if (slug === "plantari") return plantariSection();
  if (slug === "dolore") return painIdentifierSection();
  if (slug === "tecnologia") return technologySection();
  if (slug === "chi") return identitySection();
  if (slug === "contatti") return contactSection();
  if (slug === "patologie") return pathologySection();
  return genericDetailSection(pages[slug]);
}

function methodSection() {
  return `
    <section class="section narrative">
      <div class="inner split">
        <div>
          <span class="section-kicker">Perche Biodinamica</span>
          <h2>Il dolore non dipende sempre dal punto in cui si manifesta.</h2>
          <p>Un fastidio al tallone puo essere legato all'appoggio, una metatarsalgia alla distribuzione dei carichi, un dolore all'alluce alla calzatura o alla dinamica del passo.</p>
          <p>Per questo non osserviamo solo il piede fermo. Lo analizziamo mentre lavora.</p>
        </div>
        <div class="note-card">
          <span>Metodo</span>
          <strong>Un percorso scientifico, su misura per te.</strong>
          <p>6 fasi per collegare piede, passo, postura e calzatura.</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="inner">
        <div class="section-head">
          <span class="section-kicker">Le 6 fasi</span>
          <h2>Ogni fase aggiunge un pezzo alla diagnosi funzionale.</h2>
        </div>
        <div class="method-cards">${methodSteps.map(([title, text], index) => `<article><span>${index + 1}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join("")}</div>
      </div>
    </section>`;
}

function analysisSection() {
  return `
    <section class="section">
      <div class="inner split">
        <div>
          <span class="section-kicker">Valutazioni</span>
          <h2>Ogni passo contiene informazioni importanti.</h2>
          <p>Attraverso strumenti di analisi e osservazione tecnica individuiamo come il piede si comporta nella vita quotidiana, nel lavoro e nello sport.</p>
        </div>
        <div class="stat-grid">
          <article><strong>01</strong><span>Statica</span></article>
          <article><strong>02</strong><span>Dinamica</span></article>
          <article><strong>03</strong><span>Corsa</span></article>
          <article><strong>04</strong><span>Calzata</span></article>
        </div>
      </div>
    </section>
    <section class="section band">
      <div class="inner">
        <div class="section-head">
          <span class="section-kicker">Analisi</span>
          <h2>Scegli il livello di osservazione piu adatto.</h2>
        </div>
        <div class="grid three">${analysisServices.map(([title, text, href]) => card(title, text, href)).join("")}</div>
      </div>
    </section>`;
}

function plantariSection() {
  return `
    <section class="section narrative">
      <div class="inner split">
        <div>
          <span class="section-kicker">Su misura davvero</span>
          <h2>Un plantare non deve semplicemente riempire una scarpa.</h2>
          <p>Deve dialogare con il piede, accompagnare il movimento e rispettare le esigenze della persona. Per questo ogni plantare viene costruito dopo una valutazione tecnica.</p>
        </div>
        <div class="quote-panel">Il plantare corretto nasce da una valutazione corretta.</div>
      </div>
    </section>
    <section class="section">
      <div class="inner">
        <div class="section-head">
          <span class="section-kicker">Tipologie</span>
          <h2>Ogni plantare nasce da una valutazione specifica.</h2>
        </div>
        <div class="plant-grid">${plantTypes.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
      </div>
    </section>`;
}

function technologySection() {
  const tools = [
    ["Baropodometria", "Per misurare pressioni, carichi e distribuzione dell'appoggio."],
    ["Analisi dinamica", "Per osservare il piede durante il movimento."],
    ["Scanner e acquisizione digitale", "Per rilevare forme e volumi del piede."],
    ["Progettazione CAD", "Per disegnare plantari personalizzati."],
    ["Rifinitura manuale", "Per adattare la soluzione alla persona e alla calzatura reale."]
  ];
  return `<section class="section narrative"><div class="inner split"><div><span class="section-kicker">Tecnologia al servizio del passo</span><h2>Misurare e importante. Interpretare e fondamentale.</h2><p>La tecnologia permette di raccogliere dati precisi. L'esperienza permette di trasformarli in una soluzione utile.</p><p class="quote">A.I. per noi significa Intelligenza Artigianale.</p></div><div class="tool-stack">${tools.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>`;
}

function identitySection() {
  return `<section class="section narrative"><div class="inner split"><div><span class="section-kicker">Il nostro lavoro parte dall'ascolto</span><h2>I tuoi piedi, nelle mie mani.</h2><p>Ogni persona arriva con una storia diversa: dolore, fatica, scarpe che non funzionano, attivita sportiva, esigenze lavorative o semplicemente il desiderio di camminare meglio.</p><p>Uniamo analisi, tecnologia e manualita. Il nostro obiettivo non e vendere un plantare, ma costruire una soluzione realmente adatta.</p></div><div class="values-grid"><article><strong>35+</strong><span>Anni di esperienza</span></article><article><strong>10k+</strong><span>Pazienti trattati</span></article><article><strong>100%</strong><span>Attenzione al paziente</span></article></div></div></section>`;
}

function contactSection() {
  return `<section class="section narrative"><div class="inner contact-layout"><div><span class="section-kicker">Valutazioni</span><h2>Scegli da dove iniziare.</h2><div class="contact-options">${card("Prenota una valutazione Biodinamica", "Per analizzare appoggio, passo, calzatura e soluzione piu adatta.")}${card("Foot Pain Identifier", "Per orientarti se parti da una zona precisa di dolore.")}${card("Prima visita tecnica", "Per chi vuole capire se serve analisi, plantare, FEETTING o trattamento podologico.")}</div></div><aside class="booking-card"><h3>Podologica</h3><p>Via dello Studio 12</p><p>info@podologica.it</p><p class="phone">06 354 04 78</p><a class="cta" href="tel:+39063540478">Chiama ora</a></aside></div></section>`;
}

function pathologySection() {
  const items = ["Fascite plantare", "Tallonite", "Metatarsalgia", "Alluce valgo", "Neuroma di Morton", "Tendine d'Achille", "Dolore al tallone", "Dolore all'avampiede", "Piede diabetico / sensibile"];
  return `<section class="section narrative"><div class="inner"><div class="section-head"><span class="section-kicker">Patologie</span><h2>Dal sintomo alla valutazione corretta.</h2><p>Ogni disturbo viene letto nel rapporto tra dolore, carico, calzatura e movimento.</p></div><div class="pathology-list">${items.map((item) => `<article class="pathology-item"><h3>${item}</h3><p>Cause frequenti, segnali utili e percorso consigliato.</p></article>`).join("")}</div></div></section>`;
}

function genericDetailSection(page) {
  return `<section class="section narrative"><div class="inner split"><div><span class="section-kicker">Valutazione</span><h2>Prima osserviamo il comportamento reale del piede.</h2><p>${page.intro}</p>${page.bullets ? `<ul class="check-list">${page.bullets.map((item) => `<li>${icon.check}<span>${item}</span></li>`).join("")}</ul>` : ""}</div><div class="process-card"><h3>Come si svolge</h3><ol><li>Prima lettura di sintomi, abitudini e calzature.</li><li>Valutazione tecnica coerente con il servizio scelto.</li><li>Piano di intervento e controllo dei risultati.</li></ol></div></div></section>`;
}

function painIdentifierSection() {
  const items = Object.entries(painProfiles);
  const first = painProfileObject("tallone");
  return `
    <section class="section">
      <div class="inner">
        <div class="section-head">
          <span class="section-kicker">Mappa del dolore</span>
          <h2>Scegli la zona, poi approfondisci con la visita.</h2>
          <p>Non sostituisce una valutazione professionale, ma ti aiuta a capire da dove partire.</p>
        </div>
        <div class="pain-tool interactive" data-pain-tool>
          <div class="foot-map">
            <div class="foot-shape" aria-hidden="true">
              <span class="pain-point is-active" data-point="tallone"></span>
              <span class="pain-point" data-point="arco"></span>
              <span class="pain-point" data-point="avampiede"></span>
            </div>
          </div>
          <div>
            <div class="pain-tabs" role="tablist" aria-label="Zone del dolore">
              ${items.map(([key, data], index) => `<button class="pain-tab ${index === 0 ? "is-active" : ""}" type="button" data-pain="${key}" role="tab" aria-selected="${index === 0}">${data[0]}</button>`).join("")}
            </div>
            <article class="pain-result" aria-live="polite">${painResultHtml(first)}</article>
            <aside class="pain-chat" aria-label="Chat guidata dolore">
              <div class="chat-log" data-chat-log>${chatMessages(first)}</div>
              <div class="chat-actions" aria-label="Intensita del dolore">
                <button type="button" data-severity="lieve">Lieve</button>
                <button type="button" data-severity="medio">Ricorrente</button>
                <button type="button" data-severity="acuto">Acuto</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>`;
}

function painProfileObject(key) {
  const [label, title, description, signals, service, href] = painProfiles[key];
  return { key, label, title, description, signals, service, href };
}

function painResultHtml(profile) {
  return `<span class="section-kicker">Risultato orientativo</span><h3>${profile.title}</h3><p>${profile.description}</p><ul class="check-list">${profile.signals.map((signal) => `<li>${icon.check}<span>${signal}</span></li>`).join("")}</ul><a class="cta" href="${profile.href}">Vai a ${profile.service} ${icon.arrow}</a>`;
}

function chatMessages(profile, severity = "") {
  const severityText = severity ? painSeverity[severity] : "Scegli anche quanto e intenso: ti aiuto a capire la priorita del prossimo passo.";
  return `<p class="chat-message assistant"><strong>Assistente</strong><span>Hai selezionato ${profile.label.toLowerCase()}. Ti mostro segnali comuni e percorso consigliato.</span></p><p class="chat-message user"><strong>Zona</strong><span>${profile.title}</span></p><p class="chat-message assistant"><strong>Priorita</strong><span>${severityText}</span></p>`;
}

function bindMenu() {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindPainTool() {
  const tool = document.querySelector("[data-pain-tool]");
  if (!tool) return;
  const result = tool.querySelector(".pain-result");
  const chatLog = tool.querySelector("[data-chat-log]");
  const tabs = [...tool.querySelectorAll("[data-pain]")];
  const points = [...tool.querySelectorAll("[data-point]")];
  const severityButtons = [...tool.querySelectorAll("[data-severity]")];

  const renderPain = (key) => {
    const profile = painProfileObject(key);
    tool.dataset.activePain = key;
    tabs.forEach((tab) => {
      const active = tab.dataset.pain === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    points.forEach((point) => point.classList.toggle("is-active", point.dataset.point === key));
    result.innerHTML = painResultHtml(profile);
    severityButtons.forEach((button) => button.classList.remove("is-active"));
    chatLog.innerHTML = chatMessages(profile);
  };

  tabs.forEach((tab) => tab.addEventListener("click", () => renderPain(tab.dataset.pain)));
  severityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const profile = painProfileObject(tool.dataset.activePain || "tallone");
      severityButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      chatLog.innerHTML = chatMessages(profile, button.dataset.severity);
    });
  });
}

const pageSlug = document.body.dataset.page;
if (pageSlug && pages[pageSlug]) {
  renderPage(pageSlug, document.body.dataset.current);
} else {
  renderHome();
}
