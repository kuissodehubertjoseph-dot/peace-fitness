/* ═══════════════════════════════════════
   PEACE FITNESS — JS GLOBAL
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ── Lien actif selon la page ── */
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const page  = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(l => {
    const href = l.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) l.classList.add('active');
  });

  /* ── Burger menu ── */
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── Scroll Reveal ── */
  const revClasses = ['.reveal', '.reveal-left', '.reveal-right'];
  const revEls = document.querySelectorAll(revClasses.join(','));
  if (revEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    revEls.forEach(el => obs.observe(el));
  }

  /* ── Toast notification ── */
  window.showToast = (msg, duration = 3500) => {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
  };

  /* ── Compteurs animés ── */
  const counters = document.querySelectorAll('.compteur-num');
  if (counters.length) {
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target   = parseInt(e.target.dataset.target);
          const duration = 1800;
          const step     = target / (duration / 16);
          let current    = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            e.target.textContent = Math.floor(current).toLocaleString('fr-FR');
          }, 16);
          countObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(c => countObs.observe(c));
  }

  /* ── Toggle tarifs (Mensuel / Annuel) ── */
  const pills = document.querySelectorAll('.toggle-pill');
  if (pills.length) {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const target = pill.dataset.panel;
        document.querySelectorAll('.tarif-panel').forEach(p => p.classList.remove('active'));
        const panel = document.getElementById(target);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* ── Formulaire de contact ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fname = document.getElementById('fname')?.value.trim();
      const phone = document.getElementById('phone')?.value.trim();
      const msg   = document.getElementById('msg')?.value.trim();
      if (!fname || !phone) {
        showToast('⚠️ Veuillez renseigner votre prénom et téléphone.');
        return;
      }
      const text = encodeURIComponent(
        `Bonjour Peace Fitness ! Je suis ${fname}, mon numéro : ${phone}.${msg ? ' Message : ' + msg : ''}`
      );
      window.open(`https://wa.me/22900000000?text=${text}`, '_blank');
      showToast('✅ <strong>Message envoyé !</strong> On vous répond très vite.');
      form.reset();
    });
  }

});
