/* ============================================================
   BALTON — site behaviour
   Scroll-entrance animations + animated counters.
   Content is visible by default; the entrance only plays when an
   element scrolls INTO view (so static captures show content).
   (chrome.js handles nav.)
   ============================================================ */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = [].slice.call(document.querySelectorAll('.reveal'));
  var counters = [].slice.call(document.querySelectorAll('.count'));
  var first = true;

  function inView(el, ratio) {
    var r = el.getBoundingClientRect();
    var h = window.innerHeight || document.documentElement.clientHeight;
    if (r.height === 0 && r.width === 0) return false;
    return r.top < h * (ratio || 0.9) && r.bottom > 0;
  }
  function setCount(el, val, suffix) {
    el.textContent = Math.round(val) + '';
    if (suffix) el.insertAdjacentHTML('beforeend', '<span class="suffix">' + suffix + '</span>');
  }
  function runCounter(el) {
    var to = parseFloat(el.getAttribute('data-to')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { setCount(el, to, suffix); return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + '';
      if (p < 1) requestAnimationFrame(step);
      else if (suffix) el.insertAdjacentHTML('beforeend', '<span class="suffix">' + suffix + '</span>');
    }
    requestAnimationFrame(step);
  }

  var ticking = false;
  function check() {
    ticking = false;
    for (var i = reveals.length - 1; i >= 0; i--) {
      if (inView(reveals[i])) {
        if (!first && !reduce) reveals[i].classList.add('anim'); // animate only when scrolled in
        reveals.splice(i, 1);
      }
    }
    for (var j = counters.length - 1; j >= 0; j--) {
      if (inView(counters[j], 0.85)) {
        var el = counters[j];
        if (first) setCount(el, parseFloat(el.getAttribute('data-to')) || 0, el.getAttribute('data-suffix') || '');
        else runCounter(el);
        counters.splice(j, 1);
      }
    }
    first = false;
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(check); } }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('load', check);
  check();          // mark above-the-fold as already shown (no animation)
  setTimeout(check, 200);
})();
