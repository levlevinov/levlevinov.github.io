const DATA = window.PORTFOLIO_DATA;
const main = document.querySelector("#main");
const nav = document.querySelector("[data-site-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const brandLink = document.querySelector("[data-brand-link]");
const metaDescription = document.querySelector("#meta-description");

const ROUTE_PATTERN = /^\/(fr|en)(?:\/(projects|experience)\/([^/]+))?\/?$/;

function parseRoute() {
  if (window.location.pathname === "/") {
    return { lang: "en", type: "home", slug: null, notFound: false };
  }

  const match = window.location.pathname.match(ROUTE_PATTERN);
  if (!match) {
    return { lang: "en", type: "home", slug: null, notFound: true };
  }

  return {
    lang: match[1],
    type: match[2] || "home",
    slug: match[3] || null,
    notFound: false,
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function list(items, className = "compact-list") {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function tags(items, className = "tag-list") {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function paragraphs(items) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function educationValue(value) {
  return String(value || "").replace(/^(Institution|Location|Period|Date|Status|Skills|Description|Établissement|Localisation|Période|Statut|Compétences|Date|Description)\s*:\s*/i, "");
}

function hasEducationValue(value, content) {
  const cleaned = educationValue(value).trim();
  return cleaned && cleaned !== content.translations.toBeCompleted;
}

function routeFor(lang, suffix = "") {
  return `/${lang}/${suffix}`.replace(/\/{2,}/g, "/");
}

function equivalentRoute(lang, route) {
  if (route.type === "projects" && route.slug) {
    const currentProject = DATA[route.lang].projects.items.find((item) => item.slug === route.slug);
    const index = DATA[route.lang].projects.items.indexOf(currentProject);
    const target = DATA[lang].projects.items[index];
    return target ? routeFor(lang, `projects/${target.slug}`) : routeFor(lang);
  }

  if (route.type === "experience" && route.slug) {
    const currentExperience = DATA[route.lang].experience.items.find((item) => item.slug === route.slug);
    const index = DATA[route.lang].experience.items.indexOf(currentExperience);
    const target = DATA[lang].experience.items[index];
    return target ? routeFor(lang, `experience/${target.slug}`) : routeFor(lang);
  }

  return routeFor(lang);
}

function setDocumentMeta(lang, route) {
  const content = DATA[lang];
  document.documentElement.lang = lang;
  document.title = content.meta.title;
  metaDescription.setAttribute("content", content.meta.description);

  if (route.type === "projects") {
    const project = content.projects.items.find((item) => item.slug === route.slug);
    if (project) {
      document.title = `${project.title} | Lev Levinov`;
      metaDescription.setAttribute("content", project.summary);
    }
  }

  if (route.type === "experience") {
    const experience = content.experience.items.find((item) => item.slug === route.slug);
    if (experience) {
      document.title = `${experience.title} | Lev Levinov`;
      metaDescription.setAttribute("content", experience.summary);
    }
  }
}

function renderNavigation(lang, route) {
  const content = DATA[lang];
  const home = routeFor(lang);
  brandLink.href = home;

  const links = [
    ["profile", content.navigation.profile],
    ["experience", content.navigation.experience],
    ["skills", content.navigation.skills],
    ["projects", content.navigation.projects],
    ["education", content.navigation.education],
    ["contact", content.navigation.contact],
  ];

  const targetLang = lang === "fr" ? "en" : "fr";
  const targetRoute = equivalentRoute(targetLang, route);

  nav.innerHTML = `
    ${links.map(([id, label]) => `<a href="${home}#${id}">${escapeHtml(label)}</a>`).join("")}
    <div class="language-group language-toggle ${lang === "fr" ? "is-fr" : "is-en"}" role="link" tabindex="0" data-language-toggle data-href="${targetRoute}" data-lang="${lang}" aria-label="Switch language to ${targetLang.toUpperCase()}">
      <span class="language-link language-toggle-option ${lang === "fr" ? "is-current active" : "inactive"}">FR</span>
      <span class="language-link language-toggle-option ${lang === "en" ? "is-current active" : "inactive"}">EN</span>
    </div>
  `;
}

function renderHero(content) {
  const photoMarkup = content.hero.photoSrc
    ? `<div class="hero-photo"><img class="hero-photo-image" src="${escapeHtml(content.hero.photoSrc)}" alt="${escapeHtml(content.hero.photoAlt)}" /></div>`
    : `<div class="hero-photo-placeholder" aria-label="${escapeHtml(content.hero.photoAlt)}"><span>LL</span></div>`;

  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.profile.eyebrow)}</p>
          <h1 id="hero-title">${escapeHtml(content.hero.title)}</h1>
          <p class="lead">${escapeHtml(content.hero.subtitle)}</p>
          <p class="lead">${escapeHtml(content.hero.positioning)}</p>
          ${content.hero.description ? `<p class="lead">${escapeHtml(content.hero.description)}</p>` : ""}
          <div class="hero-actions">
            <a class="button primary" href="#projects">${escapeHtml(content.translations.viewProjects)}</a>
            <a class="button secondary" href="#contact">${escapeHtml(content.translations.contact)}</a>
            <a class="button secondary" href="${escapeHtml(content.hero.cvHref)}">${escapeHtml(content.translations.downloadCv)}</a>
          </div>
        </div>
        <figure class="hero-photo-frame">
          ${photoMarkup}
        </figure>
        <aside class="hero-panel" aria-label="${escapeHtml(content.translations.current)}">
          <div class="hero-info-card">
            <div class="hero-info-item">
              <span class="hero-info-label">${escapeHtml(content.hero.locationLabel)}</span>
              <strong class="hero-info-value">${escapeHtml(content.hero.location)}</strong>
            </div>
            <div class="hero-info-item">
              <span class="hero-info-label">${escapeHtml(content.hero.availabilityLabel)}</span>
              <strong class="hero-info-value">${escapeHtml(content.hero.availability)}</strong>
            </div>
            <div class="hero-info-item">
              <span class="hero-info-label">${escapeHtml(content.translations.current)}</span>
              <strong class="hero-info-value">${escapeHtml(content.currentPosition.status)}</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderProfile(content) {
  return `
    <section class="section" id="profile" aria-labelledby="profile-title">
      <div class="container profile-layout">
        <div>
          <p class="eyebrow">${escapeHtml(content.profile.eyebrow)}</p>
          <h2 id="profile-title">${escapeHtml(content.profile.title)}</h2>
          <div class="profile-copy">
            ${content.profile.description.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </div>
        </div>
        <div class="card">
          <h3>${escapeHtml(content.navigation.profile)}</h3>
          ${tags(content.profile.qualities, "quality-list")}
        </div>
      </div>
    </section>
  `;
}

function renderCurrent(content) {
  return `
    <section class="section" aria-labelledby="current-title">
      <div class="container current-grid">
        <div class="section-header">
          <p class="eyebrow">${escapeHtml(content.currentPosition.eyebrow)}</p>
          <h2 id="current-title">${escapeHtml(content.currentPosition.title)}</h2>
          ${content.currentPosition.description ? `<p>${escapeHtml(content.currentPosition.description)}</p>` : ""}
          <p>${escapeHtml(content.currentPosition.status)}</p>
        </div>
        <div class="card">
          ${tags(content.currentPosition.areas)}
        </div>
      </div>
    </section>
  `;
}

function renderSkills(content) {
  return `
    <section class="section" id="skills" aria-labelledby="skills-title">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">${escapeHtml(content.skills.eyebrow)}</p>
          <h2 id="skills-title">${escapeHtml(content.skills.title)}</h2>
        </div>
        <div class="skills-grid">
          ${content.skills.categories
            .map(
              (category) => `
                <article class="card">
                  <h3>${escapeHtml(category.title)}</h3>
                  ${list(category.items)}
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderExperience(content, lang) {
  return `
    <section class="section" id="experience" aria-labelledby="experience-title">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">${escapeHtml(content.experience.eyebrow)}</p>
          <h2 id="experience-title">${escapeHtml(content.experience.title)}</h2>
        </div>
        <div class="experience-grid">
          ${content.experience.items
            .map(
              (item) => `
                <article class="card" id="experience-${escapeHtml(item.slug)}">
                  <h3>${escapeHtml(item.title)}</h3>
                  <div class="card-meta experience-meta">
                    <span><span class="meta-label">${escapeHtml(content.translations.contextLabel)}</span>${escapeHtml(item.company)}</span>
                    <span><span class="meta-label">${escapeHtml(content.translations.periodLabel)}</span>${escapeHtml(item.period)}</span>
                    <span><span class="meta-label">${escapeHtml(content.translations.locationLabel)}</span>${escapeHtml(item.location)}</span>
                  </div>
                  <p class="card-summary">${escapeHtml(item.summary)}</p>
                  <p class="meta-label">${escapeHtml(content.translations.responsibilities)}</p>
                  ${list(item.responsibilities)}
                  <p class="meta-label">${escapeHtml(content.translations.skillsUsed)}</p>
                  ${tags(item.skills)}
                  <div class="button-row">
                    <a class="button secondary" href="${escapeHtml(item.detailHref || routeFor(lang, `experience/${item.slug}`))}" target="_blank" rel="noopener noreferrer">
                      ${escapeHtml(content.translations.viewDetails)}
                    </a>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProjects(content, lang) {
  return `
    <section class="section" id="projects" aria-labelledby="projects-title">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">${escapeHtml(content.projects.eyebrow)}</p>
          <h2 id="projects-title">${escapeHtml(content.projects.title)}</h2>
          ${content.projects.note ? `<p>${escapeHtml(content.projects.note)}</p>` : ""}
        </div>
        <div class="filter-row" role="group" aria-label="Project filters">
          ${content.projects.filters
            .map(
              (filter, index) => `
                <button class="filter-button ${index === 0 ? "is-active" : ""}" type="button" data-project-filter="${escapeHtml(filter.key)}">
                  ${escapeHtml(filter.label)}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="projects-grid" data-project-grid>
          ${content.projects.items
            .map(
              (project) => `
                <article class="card project-card" id="project-${escapeHtml(project.slug)}" data-project-category="${escapeHtml(project.filter)}">
                  <span class="category-pill">${escapeHtml(project.category)}</span>
                  <h3>${escapeHtml(project.title)}</h3>
                  <p class="card-summary">${escapeHtml(project.summary)}</p>
                  <p class="meta-label">${escapeHtml(content.translations.tools)}</p>
                  ${tags(project.tools)}
                  <p class="meta-label">${escapeHtml(content.translations.status)}</p>
                  <p class="project-status">${escapeHtml(project.status)}</p>
                  <div class="button-row">
                    <a class="button secondary" href="${routeFor(lang, `projects/${project.slug}`)}" target="_blank" rel="noopener noreferrer">
                      ${escapeHtml(content.translations.learnMore)}
                    </a>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderEducation(content) {
  const labels = content.education.labels || {};
  const educationRow = (label, value) =>
    hasEducationValue(value, content)
      ? `
        <div>
          <dt>${escapeHtml(label)}</dt>
          <dd>${escapeHtml(educationValue(value))}</dd>
        </div>
      `
      : "";
  return `
    <section class="section" id="education" aria-labelledby="education-title">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">${escapeHtml(content.education.eyebrow)}</p>
          <h2 id="education-title">${escapeHtml(content.education.title)}</h2>
        </div>
        <div class="education-grid">
          ${content.education.groups
            .map(
              (group) => `
                <article class="card education-column">
                  <h3>${escapeHtml(group.title)}</h3>
                  ${group.items
                    .map(
                      (item) => `
                        <div class="education-item">
                          <h4>${escapeHtml(item.name)}</h4>
                          ${item.description ? `<p class="education-description">${escapeHtml(item.description)}</p>` : ""}
                          <dl class="education-details">
                            ${educationRow(labels.organization || "Organization", item.organization)}
                            ${educationRow(item.year.trim().toLowerCase().startsWith("date") ? labels.date || "Date" : labels.period || "Period", item.year)}
                            ${educationRow(labels.location || "Location", item.location)}
                            ${educationRow(labels.status || "Status", item.status)}
                            ${educationRow(labels.competencies || "Skills", item.competencies)}
                          </dl>
                        </div>
                      `,
                    )
                    .join("")}
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderContact(content) {
  const isEmail = content.contact.email.includes("@");
  const isPhone = /\d/.test(content.contact.phone);
  const labels = content.contact.labels || {};
  const links = [
    [labels.location || "Location", content.contact.location, null],
    [labels.email || "Email", content.contact.email, isEmail ? `mailto:${content.contact.email}` : null],
    [labels.phone || "Phone", content.contact.phone, isPhone ? `tel:${content.contact.phone.replace(/\s/g, "")}` : null],
    [labels.linkedin || "LinkedIn", content.contact.linkedin, content.contact.linkedin.startsWith("http") ? content.contact.linkedin : null],
    [labels.github || "GitHub", content.contact.github, content.contact.github],
  ].filter(([, value]) => value);
  const websiteLabel = labels.website || "Website";

  return `
    <section class="section" id="contact" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.contact.eyebrow)}</p>
          <h2 id="contact-title">${escapeHtml(content.contact.title)}</h2>
          ${content.contact.availability ? `<p>${escapeHtml(content.contact.availability)}</p>` : ""}
        </div>
        <address class="card contact-links">
          ${links
            .map(([label, value, href]) =>
              href
                ? `<a href="${escapeHtml(href)}" target="${href.startsWith("http") ? "_blank" : "_self"}" rel="noopener noreferrer"><span class="meta-label">${escapeHtml(label)}</span>${escapeHtml(value)}</a>`
                : `<span><span class="meta-label">${escapeHtml(label)}</span>${escapeHtml(value)}</span>`,
            )
            .join("")}
          ${content.contact.websites.map((site) => `<span><span class="meta-label">${escapeHtml(websiteLabel)}</span>${escapeHtml(site)}</span>`).join("")}
        </address>
      </div>
    </section>
  `;
}

function renderFooter(content, lang) {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <div class="footer-brand">Lev Levinov</div>
          <div>${escapeHtml(content.footer.label)}</div>
          <div>${escapeHtml(content.footer.copyright)}</div>
        </div>
        <div class="footer-links">
          <a class="language-link ${lang === "fr" ? "is-current" : ""}" href="/fr/">FR</a>
          <a class="language-link ${lang === "en" ? "is-current" : ""}" href="/en/">EN</a>
        </div>
      </div>
    </footer>
  `;
}

function renderHome(lang) {
  const content = DATA[lang];
  main.innerHTML = [
    renderHero(content),
    renderProfile(content),
    renderCurrent(content),
    renderSkills(content),
    renderExperience(content, lang),
    renderProjects(content, lang),
    renderEducation(content),
    renderContact(content),
    renderFooter(content, lang),
  ].join("");

  bindProjectFilters();
}

function detailSection(title, body) {
  return `
    <article class="detail-card">
      <h3>${escapeHtml(title)}</h3>
      ${Array.isArray(body) ? list(body, "detail-list") : `<p>${escapeHtml(body)}</p>`}
    </article>
  `;
}

function projectImageCard(image) {
  return `
    <figure class="project-image-card ${escapeHtml(image.layout || "is-standard")}">
      <div class="project-image-media">
        <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" />
        <span class="project-image-number">${escapeHtml(image.number)}</span>
      </div>
      <figcaption class="project-image-caption">
        ${image.phase ? `<span>${escapeHtml(image.phase)}</span>` : ""}
        <strong>${escapeHtml(image.caption)}</strong>
      </figcaption>
    </figure>
  `;
}

function missionCarouselCaption(lang, image) {
  const captions = {
    fr: {
      "Photo 01": "Installation d’essai avec antennes",
      "Photo 02": "Mât final avec antennes",
      "Photo 03": "Rotor avant fixation rigide",
      "Photo 04": "Fixation installée",
      "Photo 05": "Pièces de fixation imprimées en 3D",
      "Photo 06": "Cheminement des câbles",
      "Photo 07": "Préparation des éléments d’antenne",
      "Photo 08": "Préparation en salle",
      "Photo 09": "Installation extérieure des antennes",
      "Photo 10": "Installation du mât",
      "Photo 11": "Supports pour microphones PTT",
      "Photo 12": "Boîtier audio, vue extérieure",
      "Photo 13": "Boîtier audio, vue intérieure",
    },
    en: {
      "Photo 01": "Antenna test setup",
      "Photo 02": "Final mast with antennas",
      "Photo 03": "Rotor before rigid fixation",
      "Photo 04": "Installed fixation",
      "Photo 05": "3D printed fixation parts",
      "Photo 06": "Cable routing",
      "Photo 07": "Antenna element preparation",
      "Photo 08": "Indoor preparation",
      "Photo 09": "Outdoor antenna setup",
      "Photo 10": "Mast installation",
      "Photo 11": "PTT microphone stands",
      "Photo 12": "Audio router, exterior view",
      "Photo 13": "Audio router, interior view",
    },
  };

  return captions[lang]?.[image.number] || image.caption;
}

function missionCarouselImages(detail, lang) {
  return detail.galleryGroups
    .flatMap((group) => group.images)
    .sort((a, b) => Number(a.number.replace(/\D/g, "")) - Number(b.number.replace(/\D/g, "")))
    .map((image) => ({ ...image, caption: missionCarouselCaption(lang, image) }));
}

function renderMissionCarousel(content, lang, detail) {
  const images = missionCarouselImages(detail, lang);
  const previousLabel = lang === "fr" ? "Photo précédente" : "Previous photo";
  const nextLabel = lang === "fr" ? "Photo suivante" : "Next photo";

  return `
    <section class="section mission-section mission-carousel-section" aria-labelledby="mission-gallery-title">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">${escapeHtml(content.translations.gallery)}</p>
          <h2 id="mission-gallery-title">${escapeHtml(detail.galleryTitle)}</h2>
        </div>
        <div class="mission-carousel" data-mission-carousel tabindex="0" aria-label="${escapeHtml(detail.galleryTitle)}">
          <div class="mission-carousel-viewport">
            ${images
              .map(
                (image, index) => `
                  <figure class="mission-carousel-slide ${index === 0 ? "is-active" : ""}" data-carousel-slide data-photo-number="${escapeHtml(image.number)}">
                    <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="${index === 0 ? "eager" : "lazy"}" />
                    <figcaption class="mission-carousel-caption">
                      <span>${escapeHtml(image.number)}</span>
                      <strong>${escapeHtml(image.caption)}</strong>
                    </figcaption>
                  </figure>
                `,
              )
              .join("")}
            <button class="mission-carousel-control is-prev" type="button" data-carousel-prev aria-label="${escapeHtml(previousLabel)}">‹</button>
            <button class="mission-carousel-control is-next" type="button" data-carousel-next aria-label="${escapeHtml(nextLabel)}">›</button>
          </div>
          <div class="mission-carousel-footer">
            <span class="mission-carousel-counter" data-carousel-counter>Photo 01 / 13</span>
            <div class="mission-carousel-dots" aria-label="${escapeHtml(detail.galleryTitle)}">
              ${images
                .map(
                  (image, index) => `
                    <button class="mission-carousel-dot ${index === 0 ? "is-active" : ""}" type="button" data-carousel-dot="${index}" aria-label="${escapeHtml(image.number)}"></button>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function bindMissionCarousel() {
  const carousel = main.querySelector("[data-mission-carousel]");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
  const counter = carousel.querySelector("[data-carousel-counter]");
  const total = String(slides.length).padStart(2, "0");
  let activeIndex = 0;

  const setActive = (nextIndex) => {
    activeIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle("is-active", index === activeIndex));
    dots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));
    const number = slides[activeIndex].dataset.photoNumber || `Photo ${String(activeIndex + 1).padStart(2, "0")}`;
    counter.textContent = `${number} / ${total}`;
  };

  carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => setActive(activeIndex - 1));
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => setActive(activeIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => setActive(index)));
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") setActive(activeIndex - 1);
    if (event.key === "ArrowRight") setActive(activeIndex + 1);
  });
}

function renderMissionSophieProjectDetail(content, lang, project) {
  const detail = project.missionDetail;

  main.innerHTML = `
    <article class="mission-detail-shell">
      <section class="mission-hero">
        <div class="container mission-hero-grid">
          <div>
            <p class="eyebrow">${escapeHtml(detail.eyebrow)}</p>
            <h1>${escapeHtml(project.title)}</h1>
            <p class="detail-lead">${escapeHtml(project.subtitle)}</p>
            <div class="detail-meta mission-meta">
              ${detail.meta.map((item) => `<span class="category-pill"><span>${escapeHtml(item.label)}</span>${escapeHtml(item.value)}</span>`).join("")}
            </div>
            <p>${escapeHtml(detail.summary)}</p>
          </div>
          <figure class="mission-hero-image">
            <img src="${escapeHtml(detail.heroImage.src)}" alt="${escapeHtml(detail.heroImage.alt)}" />
          </figure>
        </div>
      </section>

      <section class="section mission-section">
        <div class="container">
          <div class="section-header">
            <p class="eyebrow">${escapeHtml(detail.overview.eyebrow)}</p>
            <h2>${escapeHtml(detail.overview.title)}</h2>
            ${paragraphs(detail.overview.paragraphs)}
          </div>
        </div>
      </section>

      ${renderMissionCarousel(content, lang, detail)}

      <section class="section mission-section mission-section-navy">
        <div class="container">
          <div class="section-header">
            <p class="eyebrow">${escapeHtml(detail.contributionsEyebrow)}</p>
            <h2>${escapeHtml(detail.contributionsTitle)}</h2>
          </div>
          <div class="mission-contribution-grid">
            ${detail.contributions
              .map(
                (item) => `
                  <article class="detail-card mission-contribution-card">
                    <h3>${escapeHtml(item.title)}</h3>
                    ${paragraphs(item.paragraphs)}
                    ${tags(item.images, "tag-list")}
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section mission-section mission-section-navy">
        <div class="container mission-final-grid">
          <article class="detail-card">
            <h2>${escapeHtml(detail.skillsTitle)}</h2>
            ${tags(detail.skills)}
          </article>
          <article class="detail-card">
            <h2>${escapeHtml(detail.resultTitle)}</h2>
            ${paragraphs(detail.resultParagraphs)}
          </article>
        </div>
      </section>

      <section class="mission-detail-actions">
        <div class="container">
          <a class="button secondary" href="${escapeHtml(detail.backHref)}">${escapeHtml(detail.backLabel)}</a>
        </div>
      </section>
    </article>
    ${renderFooter(content, lang)}
  `;

  bindMissionCarousel();
}

function renderProjectDetail(lang, slug) {
  const content = DATA[lang];
  const project = content.projects.items.find((item) => item.slug === slug);
  if (!project) return renderNotFound(lang);
  if (project.detailType === "mission-sophie") return renderMissionSophieProjectDetail(content, lang, project);

  main.innerHTML = `
    <article class="detail-shell">
      <div class="container">
        <header class="detail-header">
          <p class="eyebrow">${escapeHtml(project.category)}</p>
          <h1>${escapeHtml(project.title)}</h1>
          <p class="detail-lead">${escapeHtml(project.subtitle)}</p>
          <div class="detail-meta">
            ${project.tools.map((tool) => `<span class="category-pill">${escapeHtml(tool)}</span>`).join("")}
          </div>
        </header>
        <div class="detail-grid">
          ${detailSection(content.translations.context, project.details.context)}
          ${detailSection(content.translations.objective, project.details.objective)}
          ${detailSection(content.translations.technicalApproach, project.details.approach)}
          ${detailSection(content.translations.tools, project.tools)}
          ${detailSection(content.translations.result, project.details.result)}
          ${detailSection(content.translations.skillsDemonstrated, project.details.skills)}
        </div>
        <section class="detail-gallery-section" aria-labelledby="gallery-title">
          <h2 id="gallery-title">${escapeHtml(content.translations.gallery)}</h2>
          <div class="gallery-grid">
            <div class="gallery-item">${escapeHtml(content.translations.toBeCompleted)}</div>
            <div class="gallery-item">${escapeHtml(content.translations.toBeCompleted)}</div>
            <div class="gallery-item">${escapeHtml(content.translations.toBeCompleted)}</div>
          </div>
        </section>
        <a class="button secondary" href="/${lang}/#project-${escapeHtml(project.slug)}">${escapeHtml(content.translations.backToProjects)}</a>
      </div>
    </article>
    ${renderFooter(content, lang)}
  `;
}

function renderExperienceDetail(lang, slug) {
  const content = DATA[lang];
  const item = content.experience.items.find((experience) => experience.slug === slug);
  if (!item) return renderNotFound(lang);

  main.innerHTML = `
    <article class="detail-shell">
      <div class="container">
        <header class="detail-header">
          <p class="eyebrow">${escapeHtml(content.experience.eyebrow)}</p>
          <h1>${escapeHtml(item.title)}</h1>
          <p class="detail-lead">${escapeHtml(item.summary)}</p>
          <div class="detail-meta">
            <span class="category-pill">${escapeHtml(item.company)}</span>
            <span class="category-pill">${escapeHtml(item.period)}</span>
            <span class="category-pill">${escapeHtml(item.location)}</span>
          </div>
        </header>
        <div class="detail-grid">
          ${detailSection(content.translations.contextCompany, item.details.context)}
          ${detailSection(content.translations.responsibilities, item.responsibilities)}
          ${detailSection(content.translations.technicalTasks, item.details.technicalTasks)}
          ${detailSection(content.translations.resultsImpact, item.details.results)}
          ${detailSection(content.translations.skillsDemonstrated, item.skills)}
        </div>
        <div class="detail-actions">
          <a class="button secondary" href="/${lang}/#experience-${escapeHtml(item.slug)}">${escapeHtml(content.translations.backToExperience)}</a>
        </div>
      </div>
    </article>
    ${renderFooter(content, lang)}
  `;
}

function renderNotFound(lang) {
  const content = DATA[lang] || DATA.en;
  main.innerHTML = `
    <section class="not-found">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>${escapeHtml(content.translations.toBeCompleted)}</h1>
        <a class="button primary" href="/${lang}/">Lev Levinov</a>
      </div>
    </section>
  `;
}

function bindProjectFilters() {
  const filterButtons = document.querySelectorAll("[data-project-filter]");
  const projectCards = document.querySelectorAll("[data-project-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.projectFilter;
      filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      projectCards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.projectCategory !== filter;
      });
    });
  });
}

function bindNavigation() {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    const lang = document.documentElement.lang || "en";
    menuToggle.setAttribute("aria-label", DATA[lang].translations[isOpen ? "menuClose" : "menuOpen"]);
  });

  nav.addEventListener("click", (event) => {
    const languageToggle = event.target.closest("[data-language-toggle]");
    if (languageToggle) {
      window.location.href = languageToggle.dataset.href;
      return;
    }

    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });

  nav.addEventListener("keydown", (event) => {
    const languageToggle = event.target.closest("[data-language-toggle]");
    if (!languageToggle || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    window.location.href = languageToggle.dataset.href;
  });
}

function render() {
  const route = parseRoute();
  const lang = DATA[route.lang] ? route.lang : "en";

  setDocumentMeta(lang, route);
  renderNavigation(lang, route);
  menuToggle.setAttribute("aria-label", DATA[lang].translations.menuOpen);

  if (route.notFound) {
    renderNotFound(lang);
    return;
  }

  if (route.type === "home") {
    renderHome(lang);
    return;
  }

  if (route.type === "projects") {
    renderProjectDetail(lang, route.slug);
    return;
  }

  if (route.type === "experience") {
    renderExperienceDetail(lang, route.slug);
  }
}

bindNavigation();
render();
