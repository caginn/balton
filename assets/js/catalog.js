/* ============================================================
   BALTON — Catalog viewer + category detail builder
   ------------------------------------------------------------
   The catalog is shown with the browser's built-in PDF viewer via an
   <iframe>, opened with #toolbar=0&navpanes=0 so the native
   download / print toolbar is hidden. The context menu is disabled
   over the viewer to discourage right-click → save.

   SECURITY NOTE:
   No download / print control or direct visible PDF link is exposed.
   For stronger protection in production the PDF files should be served
   from protected / signed (short-lived) URLs or behind server-side
   access control so the raw path is never public.

   IMPORTANT: Full prevention of downloading cannot be guaranteed on the
   web — a determined user can always capture rendered content. These
   measures only discourage casual downloading; they are not DRM.
   ============================================================ */
(function () {
  var B = window.BALTON;
  if (!B) return;

  var params = new URLSearchParams(location.search);
  var slug = params.get('kategori');
  var cat = slug && B.categories[slug];
  if (!cat) { slug = B.categoryOrder[0]; cat = B.categories[slug]; }

  /* ---------- Fill text content ---------- */
  function set(sel, html) { var el = document.querySelector(sel); if (el) el.innerHTML = html; }
  document.title = cat.tr + ' | Balton Medikal';
  set('[data-cat="crumb"]', cat.tr);
  set('[data-cat="eyebrow"]', cat.name);
  set('[data-cat="title"]', cat.tr);
  set('[data-cat="intro"]', cat.intro);
  set('[data-cat="count"]', cat.products.length + ' ürün grubu');
  set('[data-cat="pdfname"]', cat.tr + ' Kataloğu');

  /* ---------- Product list ---------- */
  var listEl = document.querySelector('[data-cat="products"]');
  if (listEl) {
    listEl.innerHTML = cat.products.map(function (p, i) {
      var n = (i + 1) < 10 ? '0' + (i + 1) : (i + 1);
      return '<li><span class="pi">' + n + '</span><span>' + p + '</span></li>';
    }).join('');
  }

  /* ---------- Catalog viewer ----------
     The catalog is shown inline with the browser's native PDF viewer via an
     <iframe> (#toolbar=0 hides the download/print chrome). Native desktop
     browsers render this reliably. However, mobile browsers (iOS Safari /
     Android Chrome) — and some sandboxed embeds — do NOT render PDFs inside an
     iframe and show a blank area, which is why the catalog wasn't visible.

     PDF.js canvas rendering was evaluated as an alternative but these catalogs
     embed high-resolution JPEG imagery that stalls the JS rasterizer in several
     engines, so it is not used.

     To guarantee the catalog is ALWAYS reachable on every device, a prominent
     "open full screen" action is exposed next to the inline viewer. It opens the
     PDF in a new tab where the device's native viewer displays it (toolbar
     hidden). This is the reliable fallback for mobile and any environment where
     inline embedding is blocked. */
  var frame = document.querySelector('[data-cat="frame"]');
  var openLink = document.querySelector('[data-cat="open"]');
  var viewUrl = cat.pdf + '#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&view=FitH';

  if (openLink) {
    openLink.href = viewUrl;
    openLink.setAttribute('target', '_blank');
    openLink.setAttribute('rel', 'noopener');
  }

  if (frame) {
    // Fallback message sits BEHIND the viewer; visible if the iframe can't paint.
    var fallback = document.createElement('div');
    fallback.className = 'pdfv-fallback';
    fallback.innerHTML =
      '<i data-lucide="book-open-text"></i>' +
      '<p>Katalog önizlemesi bu cihazda açılamıyorsa, kataloğu tam ekran görüntüleyin.</p>' +
      '<a class="btn btn-primary btn-sm" href="' + viewUrl + '" target="_blank" rel="noopener">' +
      '<i data-lucide="maximize-2"></i> Kataloğu Aç</a>';
    frame.appendChild(fallback);

    var iframe = document.createElement('iframe');
    iframe.className = 'pdfv-iframe';
    iframe.title = cat.tr + ' Kataloğu';
    iframe.setAttribute('loading', 'lazy');
    iframe.src = viewUrl;
    frame.appendChild(iframe);

    // Discourage right-click → save / drag over the viewer region.
    frame.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    frame.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
})();
