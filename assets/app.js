/* Lightweight static-site interactions. No external JS dependencies or tracking. */
(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA || { projects: [], posts: [] };
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const image = (file, kind = 'projects') => `assets/${kind}/${encodeURIComponent(String(file))}`;
  const safeLink = (url) => /^https:\/\//i.test(String(url || '')) ? String(url) : null;
  const visible = () => {
    const cards = $$('.reveal:not(.visible)');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px 70px 0px' });
    cards.forEach(el => observer.observe(el));
  };
  const projectCard = p => `<a class="project-card reveal" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="Read case study for ${esc(p.title)}"><div class="project-cover"><img src="${image(p.image)}" loading="lazy" alt="Illustrative ${esc(p.title)} product concept, not an application screenshot"><span class="cover-flag">CONCEPT VISUAL</span></div><div class="project-info"><div><div class="project-meta">${esc(p.num)} &nbsp;/&nbsp; ${esc(p.category)}</div><h3>${esc(p.title)}</h3><p>${esc(p.subtitle)}</p></div><span class="card-arrow" aria-hidden="true">↗</span></div></a>`;
  const postPhoto = p => p.image === 'story.jpg' ? image('story.webp', 'photos') : image(p.image);
  const postCard = p => `<a class="post-card reveal" href="article.html?id=${encodeURIComponent(p.id)}"><div class="post-image"><img src="${postPhoto(p)}" loading="lazy" alt="${p.image === 'story.jpg' ? 'Aswin outdoors, illustrative article cover' : `Concept illustration for ${esc(p.title)}`}"></div><div class="post-meta">${esc(p.category)} / ${esc(p.date_label)}</div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p></a>`;

  const featured = $('#featuredProjects');
  if (featured) featured.innerHTML = data.projects.map(projectCard).join('');
  const allProjects = $('#allProjects');
  if (allProjects) allProjects.innerHTML = data.projects.map(projectCard).join('');
  const homePosts = $('#homePosts');
  if (homePosts) homePosts.innerHTML = data.posts.slice(0, 3).map(postCard).join('');
  const allPosts = $('#allPosts');
  if (allPosts) {
    const renderPosts = filter => { allPosts.innerHTML = data.posts.filter(p => filter === 'all' || p.category === filter).map(postCard).join('') || '<p>No articles in this category yet.</p>'; visible(); };
    renderPosts('all');
    $$('#postFilters .filter').forEach(btn => btn.addEventListener('click', () => {
      $$('#postFilters .filter').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
      renderPosts(btn.dataset.filter || 'all');
    }));
  }
  const projectDetail = $('#projectDetail');
  if (projectDetail) {
    const id = new URLSearchParams(location.search).get('id');
    const p = data.projects.find(proj => proj.id === id);
    if (!p) {
      projectDetail.innerHTML = '<section class="loading-intro container"><p class="eyebrow">NOT FOUND</p><h1>Project not found.</h1><a class="text-link" href="projects.html">Explore projects ↗</a></section>';
    } else {
      document.title = `${p.title} — Case Study | Aswin R Sudhakar`;
      const next = data.projects[(data.projects.indexOf(p) + 1) % data.projects.length];
      const features = p.features.map((item, i) => `<article class="case-feature"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(item[0])}</h3><p>${esc(item[1])}</p></article>`).join('');
      const gallery = (p.gallery || []).filter(g => /^(?:assets\/screenshots\/)?[\w.-]+(?:\/[\w.-]+)*\.(?:png|jpg|jpeg|webp)$/i.test(g.src || '')).map(g => `<figure class="gallery-card"><img loading="lazy" src="${esc(g.src.startsWith('assets/') ? g.src : `assets/screenshots/${g.src}`)}" alt="${esc(g.description || g.title || p.title)}"><figcaption><strong>${esc(g.title)}</strong>${esc(g.description || '')}</figcaption></figure>`).join('');
      const links = [safeLink(p.demo) && `<a class="button button-dark" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>`, safeLink(p.github) && `<a class="button button-dark" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">Source code ↗</a>`].filter(Boolean).join('');
      projectDetail.innerHTML = `<section class="detail-hero"><div class="container"><a class="detail-back" href="projects.html">← ALL PROJECTS</a><p class="eyebrow on-dark">CASE STUDY / ${esc(p.category)}</p><h1>${esc(p.title)}<i>.</i></h1><p class="summary">${esc(p.summary)}</p><div class="detail-hero-tags"><span>${esc(p.status)}</span><span>${esc(p.year)}</span><span>${esc(p.stack[0])}</span></div></div></section>
      <div class="container case-media"><img src="${image(p.image)}" alt="AI-generated conceptual interface for ${esc(p.title)}"><p class="caption">${esc(p.caption)}</p></div>
      <div class="container case-details"><div class="case-meta"><div><span>Category</span><strong>${esc(p.category)}</strong></div><div><span>Stage</span><strong>${esc(p.status)}</strong></div><div><span>Year</span><strong>${esc(p.year)}</strong></div></div><div class="case-layout"><aside class="case-side"><strong>ON THIS PAGE</strong><a href="#overview">Overview</a><a href="#approach">The approach</a><a href="#features">Key capabilities</a><a href="#engineering">Engineering notes</a><a href="#screenshots">Visual walkthrough</a></aside><div class="case-body">
      <section id="overview"><p class="eyebrow">01 / THE CHALLENGE</p><h2>Why this <i>matters.</i></h2><p>${esc(p.problem)}</p></section>
      <section id="approach"><p class="eyebrow">02 / THE APPROACH</p><h2>How I approached <i>the problem.</i></h2><p>${esc(p.solution)}</p><div class="stack-tags">${p.stack.map(x => `<span>${esc(x)}</span>`).join('')}</div></section>
      <section id="features"><p class="eyebrow">03 / CAPABILITIES</p><h2>What's inside <i>the build.</i></h2><div class="case-features">${features}</div></section>
      <section id="engineering"><p class="eyebrow">04 / ENGINEERING NOTES</p><h2>Design decisions & <i>trade-offs.</i></h2><h3>Architecture</h3><p>${esc(p.architecture)}</p><h3>Challenge</h3><p>${esc(p.challenge)}</p><h3>Current outcome</h3><p>${esc(p.outcome)}</p></section>
      <section id="screenshots"><p class="eyebrow">05 / VISUAL WALKTHROUGH</p><h2>Behind <i>the screens.</i></h2>${gallery ? `<div class="case-gallery">${gallery}</div>` : `<div class="gallery-empty"><p>Real project screenshots are not available yet. The image above is a conceptual visual. Add screenshots with titles and explanations to <strong>assets/data/projects.json</strong> when they are ready.</p></div>`}</section>
      <section><p class="eyebrow">EXPLORE FURTHER</p><h2>Want to see <i>more?</i></h2>${links ? `<div class="case-links">${links}</div>` : '<p>Public repository and live-demo links will be added only after they are available and verified. You can still <a class="text-link" href="index.html#contact">ask about the project ↗</a>.</p>'}</section>
      </div></div></div><section class="case-next"><div class="container"><div><small>NEXT CASE STUDY</small><h2>${esc(next.title)}</h2></div><a class="button button-lime" href="project.html?id=${encodeURIComponent(next.id)}">Explore next project ↗</a></div></section>`;
    }
  }
  const articleDetail = $('#articleDetail');
  if (articleDetail) {
    const id = new URLSearchParams(location.search).get('id');
    const a = data.posts.find(post => post.id === id);
    if (!a) {
      articleDetail.innerHTML = '<section class="loading-intro container"><p class="eyebrow">NOT FOUND</p><h1>Article not found.</h1><a class="text-link" href="blog.html">Back to journal ↗</a></section>';
    } else {
      document.title = `${a.title} | Journal — Aswin R Sudhakar`;
      const paragraphs = (a.body || []).map(item => `<section><h2>${esc(item[0])}</h2><p>${esc(item[1])}</p></section>`).join('');
      articleDetail.innerHTML = `<section class="article-hero"><div class="container"><a href="blog.html" class="detail-back">← THE JOURNAL</a><div class="article-meta">${esc(a.category)} / ${esc(a.date_label)} / ${esc(a.reading)}</div><h1>${esc(a.title)}</h1><p class="article-excerpt">${esc(a.excerpt)}</p></div></section><div class="article-photo"><img src="${postPhoto(a)}" alt="${a.image === 'story.jpg' ? 'Aswin outdoors in front of greenery' : 'AI-generated concept artwork relating to the article'}"></div><div class="container article-layout"><aside class="article-side">WORDS BY ASWIN R SUDHAKAR<br><br>${esc(a.date_label)}</aside><article class="article-copy">${paragraphs}<a class="text-link article-exit" href="blog.html">← Back to all stories</a></article></div>`;
    }
  }

  document.body.classList.add('js-ready');
  visible();
  $$('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
  const page = document.body.dataset.page;
  $$('.main-nav a').forEach(a => { if (a.dataset.page === page) a.setAttribute('aria-current', 'page'); });
  const header = $('#siteHeader');
  const progress = $('#readingProgress');
  let frame = false;
  function updateScroll() {
    header?.classList.toggle('is-scrolled', window.scrollY > 30);
    if (progress) { const height = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${height > 0 ? 100*scrollY/height : 0}%`; }
    frame = false;
  }
  window.addEventListener('scroll', () => { if (!frame) { frame = true; requestAnimationFrame(updateScroll); } }, { passive: true });
  updateScroll();
  const toggle = $('#mobileToggle'), menu = $('#mobileMenu');
  function closeMenu() { menu?.classList.remove('open'); toggle?.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open'); toggle?.setAttribute('aria-label','Open menu'); }
  toggle?.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open); toggle.setAttribute('aria-expanded',String(open)); toggle.setAttribute('aria-label',open?'Close menu':'Open menu'); document.body.classList.toggle('menu-open',open);
  });
  menu?.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (innerWidth > 800) closeMenu(); });
  const form = $('#contactForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const name = $('#name').value.trim(), email = $('#email').value.trim(), subject = $('#subject').value, msg = $('#message').value.trim();
    const body = `Hi Aswin,\n\n${msg}\n\nFrom: ${name}\nEmail: ${email}`;
    const mail = `mailto:aswinsudhan0004@gmail.com?subject=${encodeURIComponent(subject + ' — ' + name)}&body=${encodeURIComponent(body)}`;
    const note = $('#formNote');
    if (note) note.textContent = 'Your email application should open with the prepared message. Review it and press Send there.';
    window.location.href = mail;
  });
})();
