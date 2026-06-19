/* ============================================================
   BALTON — site chrome (header + footer)
   Injects the shared Header and Footer into every page so the
   navigation/footer stay in one place (reusable components).
   Markup is rendered into <div data-chrome="header"> and
   <div data-chrome="footer"> placeholders.
   ============================================================ */
(function () {
  var B = window.BALTON;
  if (!B) return;

  var path = location.pathname.split('/').pop() || 'Anasayfa.html';
  // Category detail page should highlight "Ürünlerimiz"
  var activeHref = path;
  if (path === 'Urun-Kategori.html' || path === '') activeHref = 'Urunlerimiz.html';
  if (path === 'index.html') activeHref = 'Anasayfa.html';

  function ico(name) { return '<i data-lucide="' + name + '"></i>'; }

  /* ---------- Logo ---------- */
  function logo(href) {
    return '<a class="logo" href="' + (href || 'Anasayfa.html') + '" aria-label="Balton anasayfa">' +
      '<img class="logo-img" src="assets/img/balton-logo.svg" alt="Balton" width="239" height="50">' +
      '</a>';
  }

  /* ---------- HEADER ---------- */
  function header() {
    var links = B.nav.map(function (n) {
      var cls = (n.href === activeHref) ? ' class="active"' : '';
      var current = (n.href === activeHref) ? ' aria-current="page"' : '';
      return '<a href="' + n.href + '"' + cls + current + '>' + n.label + '</a>';
    }).join('');

    return '' +
    '<div class="topbar"><div class="wrap-wide">' +
      '<div class="t-left">' + ico('shield-check') + '<span>1992’den beri üretim · ' + B.company.exportCountries + '’dan fazla ülkeye ihracat</span></div>' +
      '<div class="t-right">' +
        '<a href="tel:' + B.company.phoneHref + '">' + ico('phone') + B.company.phone + '</a>' +
        '<a href="mailto:' + B.company.email + '">' + ico('mail') + B.company.email + '</a>' +
      '</div>' +
    '</div></div>' +
    '<header class="site-header"><div class="wrap-wide"><nav class="nav" aria-label="Ana menü">' +
      logo() +
      '<div class="nav-scrim" data-nav-scrim></div>' +
      '<div class="nav-links" id="navLinks">' + links +
        '<a class="btn btn-primary m-cta" href="Iletisim.html">İletişime Geçin</a>' +
      '</div>' +
      '<div class="nav-right">' +
        '<a class="btn btn-primary btn-sm" href="Iletisim.html">' + ico('mail') + 'İletişime Geçin</a>' +
        '<button class="nav-toggle" id="navToggle" aria-label="Menüyü aç" aria-expanded="false" aria-controls="navLinks">' + ico('menu') + '</button>' +
      '</div>' +
    '</nav></div></header>';
  }

  /* ---------- FOOTER ---------- */
  function footer() {
    var quick = B.nav.map(function (n) { return '<a href="' + n.href + '">' + n.label + '</a>'; }).join('');
    var cats = B.categoryOrder.map(function (slug) {
      var c = B.categories[slug];
      return '<a href="Urun-Kategori.html?kategori=' + slug + '">' + c.tr + '</a>';
    }).join('');
    var addr = B.company.address.replace(/\n/g, '<br>');

    return '' +
    '<footer class="site-footer"><div class="wrap-wide">' +
      '<div class="f-top">' +
        '<div class="f-brand">' + logo() +
          '<p class="f-about">Anestezi, kardiyoloji, diyaliz, jinekoloji, cerrahi ve üroloji alanlarında tek kullanımlık tıbbi malzeme ve stent teknolojileri üreticisi.</p>' +
          '<div class="f-social">' +
            '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a>' +
            '<a href="mailto:' + B.company.email + '" aria-label="E-posta">' + ico('mail') + '</a>' +
            '<a href="tel:' + B.company.phoneHref + '" aria-label="Telefon">' + ico('phone') + '</a>' +
          '</div>' +
        '</div>' +
        '<div><h4>Hızlı Erişim</h4><nav class="f-links" aria-label="Alt menü">' + quick + '</nav></div>' +
        '<div><h4>Ürün Grupları</h4><nav class="f-links" aria-label="Ürün grupları">' + cats + '</nav></div>' +
        '<div><h4>İletişim</h4><ul class="f-contact">' +
          '<li>' + ico('map-pin') + '<span>' + addr + '</span></li>' +
          '<li>' + ico('phone') + '<a href="tel:' + B.company.phoneHref + '">' + B.company.phone + '</a></li>' +
          '<li>' + ico('mail') + '<a href="mailto:' + B.company.email + '">' + B.company.email + '</a></li>' +
          '<li>' + ico('clock') + '<span>' + B.company.hours + '</span></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="f-bottom">' +
        '<span>© ' + new Date().getFullYear() + ' ' + B.company.legal + '. Tüm hakları saklıdır.</span>' +
        '<div class="f-legal">' +
          '<a href="#">KVKK Aydınlatma Metni</a>' +
          '<a href="#">Gizlilik Politikası</a>' +
          '<a href="#">Çerez Politikası</a>' +
        '</div>' +
      '</div>' +
    '</div></footer>';
  }

  /* ---------- Inject ---------- */
  function inject(sel, html) {
    var el = document.querySelector('[data-chrome="' + sel + '"]');
    if (el) el.innerHTML = html;
  }
  inject('header', header());
  inject('footer', footer());

  /* Mobile nav behaviour */
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var scrim = document.querySelector('[data-nav-scrim]');
  function setNav(open) {
    if (!navLinks) return;
    navLinks.classList.toggle('open', open);
    if (scrim) scrim.classList.toggle('open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) toggle.addEventListener('click', function () { setNav(!navLinks.classList.contains('open')); });
  if (scrim) scrim.addEventListener('click', function () { setNav(false); });
  if (navLinks) navLinks.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });

  /* Sticky header shadow on scroll */
  var head = document.querySelector('.site-header');
  function onScroll() { if (head) head.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Render Lucide icons after injection */
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
})();
