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

  nav.innerHTML = `
    ${links.map(([id, label]) => `<a href="${home}#${id}">${escapeHtml(label)}</a>`).join("")}
    <div class="language-group" aria-label="Language selector">
      <a class="language-link ${lang === "fr" ? "is-current" : ""}" href="${equivalentRoute("fr", route)}">FR</a>
      <span aria-hidden="true">/</span>
      <a class="language-link ${lang === "en" ? "is-current" : ""}" href="${equivalentRoute("en", route)}">EN</a>
    </div>
  `;
}

function renderHero(content) {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.profile.eyebrow)}</p>
          <h1 id="hero-title">${escapeHtml(content.hero.title)}</h1>
          <p class="lead">${escapeHtml(content.hero.subtitle)}</p>
          <p class="lead">${escapeHtml(content.hero.positioning)}</p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">${escapeHtml(content.translations.viewProjects)}</a>
            <a class="button secondary" href="#contact">${escapeHtml(content.translations.contact)}</a>
            <a class="button secondary" href="${escapeHtml(content.hero.cvHref)}">${escapeHtml(content.translations.downloadCv)}</a>
          </div>
        </div>
        <aside class="hero-panel" aria-label="${escapeHtml(content.translations.current)}">
          <dl>
            <div>
              <dt>${escapeHtml(content.hero.locationLabel)}</dt>
              <dd>${escapeHtml(content.hero.location)}</dd>
            </div>
            <div>
              <dt>${escapeHtml(content.hero.availabilityLabel)}</dt>
              <dd>${escapeHtml(content.hero.availability)}</dd>
            </div>
            <div>
              <dt>${escapeHtml(content.translations.current)}</dt>
              <dd>${escapeHtml(content.currentPosition.status)}</dd>
            </div>
          </dl>
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
                  <div class="card-meta">
                    <span>${escapeHtml(item.company)}</span>
                    <span>${escapeHtml(item.period)}</span>
                    <span>${escapeHtml(item.location)}</span>
                  </div>
                  <p class="card-summary">${escapeHtml(item.summary)}</p>
                  <p class="meta-label">${escapeHtml(content.translations.responsibilities)}</p>
                  ${list(item.responsibilities)}
                  <p class="meta-label">${escapeHtml(content.translations.skillsUsed)}</p>
                  ${tags(item.skills)}
                  <div class="button-row">
                    <a class="button secondary" href="${routeFor(lang, `experience/${item.slug}`)}" target="_blank" rel="noopener noreferrer">
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
                          <p><strong>${escapeHtml(item.name)}</strong></p>
                          <p>${escapeHtml(item.organization)}</p>
                          <p>${escapeHtml(item.year)}</p>
                          <p>${escapeHtml(item.location)}</p>
                          <p>${escapeHtml(item.competencies)}</p>
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
  const links = [
    ["Location", content.contact.location, null],
    ["Email", content.contact.email, isEmail ? `mailto:${content.contact.email}` : null],
    ["Phone", content.contact.phone, isPhone ? `tel:${content.contact.phone.replace(/\s/g, "")}` : null],
    ["LinkedIn", content.contact.linkedin, content.contact.linkedin.startsWith("http") ? content.contact.linkedin : null],
    ["GitHub", content.contact.github, content.contact.github],
  ];

  return `
    <section class="section" id="contact" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div>
          <p class="eyebrow">${escapeHtml(content.contact.eyebrow)}</p>
          <h2 id="contact-title">${escapeHtml(content.contact.title)}</h2>
        </div>
        <address class="card contact-links">
          ${links
            .map(([label, value, href]) =>
              href
                ? `<a href="${escapeHtml(href)}" target="${href.startsWith("http") ? "_blank" : "_self"}" rel="noopener noreferrer"><span class="meta-label">${escapeHtml(label)}</span>${escapeHtml(value)}</a>`
                : `<span><span class="meta-label">${escapeHtml(label)}</span>${escapeHtml(value)}</span>`,
            )
            .join("")}
          ${content.contact.websites.map((site) => `<span><span class="meta-label">Website</span>${escapeHtml(site)}</span>`).join("")}
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

function renderProjectDetail(lang, slug) {
  const content = DATA[lang];
  const project = content.projects.items.find((item) => item.slug === slug);
  if (!project) return renderNotFound(lang);

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
        <section class="section" aria-labelledby="gallery-title">
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
        <div class="section">
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
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
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
