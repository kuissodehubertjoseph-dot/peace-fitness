/* ═══════════════════════════════════════
   PEACE FITNESS — COMPOSANTS (nav + footer)
   Injectés dynamiquement sur toutes les pages
═══════════════════════════════════════ */

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">
    <div class="nav-logo-icon"><i class="fa-solid fa-bolt"></i></div>
    <div class="nav-logo-text">PEACE <span>FITNESS</span></div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Accueil</a></li>
    <li><a href="programmes.html">Programmes</a></li>
    <li><a href="equipe.html">Coachs</a></li>
    <li><a href="tarifs.html">Tarifs</a></li>
    <li><a href="galerie.html">Galerie</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="https://wa.me/22901909030" class="nav-cta" target="_blank">Essai Gratuit</a>
  <button class="burger" id="burger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Accueil</a>
  <a href="programmes.html">Programmes</a>
  <a href="equipe.html">Coachs</a>
  <a href="tarifs.html">Tarifs</a>
  <a href="galerie.html">Galerie</a>
  <a href="contact.html">Contact</a>
  <a href="https://wa.me/22901909030" class="mob-cta" target="_blank"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-logo">PEACE <span>FITNESS</span></div>
      <p class="footer-tagline">Forge ton corps. Libère ton âme.<br>La salle de gym premium d'Atrokpocodji, Cotonou.</p>
      <div class="footer-social">
        <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" title="Facebook"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://wa.me/22901909030" title="WhatsApp" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Navigation</div>
      <ul class="footer-links">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="programmes.html">Programmes</a></li>
        <li><a href="equipe.html">Nos coachs</a></li>
        <li><a href="tarifs.html">Tarifs</a></li>
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Nos activités</div>
      <ul class="footer-links">
        <li><a href="programmes.html">Musculation</a></li>
        <li><a href="programmes.html">CrossFit</a></li>
        <li><a href="programmes.html">Yoga & Pilates</a></li>
        <li><a href="programmes.html">Boxe & Arts Martiaux</a></li>
        <li><a href="programmes.html">Cours Collectifs</a></li>
        <li><a href="programmes.html">Coaching Personnalisé</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Nous trouver</div>
      <div class="footer-contact-item">
        <span class="icon"><i class="fa-solid fa-location-dot"></i></span>
        <span>Atrokpocodji, Cotonou<br>République du Bénin</span>
      </div>
      <div class="footer-contact-item">
        <span class="icon"><i class="fa-solid fa-phone"></i></span>
        <span>+229 01 90 90 30 30</span>
      </div>
      <div class="footer-contact-item">
        <span class="icon"><i class="fa-solid fa-clock"></i></span>
        <span>Lun – Dim · 6h00 – 22h00</span>
      </div>
      <div class="footer-contact-item">
        <span class="icon"><i class="fa-solid fa-envelope"></i></span>
        <span>contact@peacefitness.bj</span>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2025 Peace Fitness — Tous droits réservés.</div>
    <div class="footer-hours">Ouvert <span>7j/7</span> · <span>6h00 – 22h00</span></div>
  </div>
</footer>`;

/* Injection automatique */
document.addEventListener('DOMContentLoaded', () => {
  const navTarget    = document.getElementById('nav-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget)    navTarget.outerHTML    = NAV_HTML;
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
});
