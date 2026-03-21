// =====================================================================
//  MAIN.JS  —  Srinagar Tourism
//  All site functions. No inline scripts needed in index.html.
// =====================================================================

/* ===== PAGE ROUTING ===== */
var PAGE_MAP = {
  home:'pg-home', about:'pg-about', packages:'pg-packages',
  car:'pg-car', contact:'pg-contact',
  'dest-srinagar':'pg-dest-srinagar',
  'dest-gulmarg':'pg-dest-gulmarg',
  'dest-pahalgam':'pg-dest-pahalgam',
  'dest-sonamarg':'pg-dest-sonamarg',
  'dest-doodhpathri':'pg-dest-doodhpathri',
  'dest-gurez':'pg-dest-gurez'
};

function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  var pg = document.getElementById('pg-' + id);
  if (pg) { pg.classList.add('active'); window.scrollTo({top: 0, behavior: 'smooth'}); }
  history.pushState(null, '', '#' + id);
  updatePageTitle(id);
}

function showDestPage(dest) { showPage('dest-' + dest); }

function showPkgPage(cat) {
  showPage('packages');
  setTimeout(function() { filterPkg(cat, document.getElementById('tab-' + cat)); }, 50);
  var titles = {kashmir:'Kashmir Tour Packages', ladakh:'Ladakh Tour Packages', vaishno:'Vaishno Devi Tour Packages'};
  var tags   = {kashmir:'Kashmir', ladakh:'Leh Ladakh', vaishno:'Jammu Vaishno Devi'};
  var imgs   = {
    kashmir: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85&auto=format&fit=crop',
    ladakh:  'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1400&q=85&auto=format&fit=crop',
    vaishno: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1400&q=85&auto=format&fit=crop'
  };
  document.getElementById('pkg-banner-title').textContent = titles[cat] || 'Tour Packages';
  document.getElementById('pkg-banner-tag').textContent   = tags[cat]   || cat;
  var bimg = document.getElementById('pkg-banner-img');
  if (bimg && imgs[cat]) bimg.src = imgs[cat];
  history.pushState(null, '', '#pkg-' + cat);
}

function updatePageTitle(id) {
  var titles = {
    home:              'Srinagar Tourism — Kashmir Tour Packages | Best Travel Agency Since 1999',
    about:             'About Us — Srinagar Tourism | Kashmir Travel Agency Since 1999',
    packages:          'Kashmir Tour Packages — Srinagar Tourism',
    car:               'Car Rentals Kashmir — Srinagar Tourism',
    contact:           'Contact Srinagar Tourism | Kashmir Travel Agency',
    'dest-srinagar':   'Srinagar Travel Guide — Dal Lake, Mughal Gardens | Srinagar Tourism',
    'dest-gulmarg':    'Gulmarg Travel Guide — Gondola, Skiing | Srinagar Tourism',
    'dest-pahalgam':   'Pahalgam Travel Guide — Aru Valley, Betaab Valley | Srinagar Tourism',
    'dest-sonamarg':   'Sonamarg Travel Guide — Thajiwas Glacier | Srinagar Tourism',
    'dest-doodhpathri':'Doodhpathri Travel Guide — Valley of Milk | Srinagar Tourism',
    'dest-gurez':      'Gurez Valley Travel Guide — Hidden Kashmir | Srinagar Tourism'
  };
  document.title = titles[id] || titles.home;
}

window.addEventListener('DOMContentLoaded', function() {
  var hash = window.location.hash.replace('#', '');
  if (!hash) return;
  if (hash.startsWith('pkg-')) {
    showPkgPage(hash.replace('pkg-', ''));
  } else if (PAGE_MAP[hash]) {
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    var pg = document.getElementById(PAGE_MAP[hash]);
    if (pg) pg.classList.add('active');
    updatePageTitle(hash);
  }
});

window.addEventListener('popstate', function() {
  var hash = window.location.hash.replace('#', '');
  if (!hash) { showPage('home'); return; }
  if (hash.startsWith('pkg-')) {
    showPkgPage(hash.replace('pkg-', ''));
  } else if (PAGE_MAP[hash]) {
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    var pg = document.getElementById(PAGE_MAP[hash]);
    if (pg) { pg.classList.add('active'); window.scrollTo({top: 0, behavior: 'smooth'}); }
  }
});

/* ===== NAVBAR ===== */
window.addEventListener('scroll', function() {
  document.getElementById('nav').classList.toggle('stuck', window.scrollY > 70);
}, {passive: true});

/* ===== MOBILE MENU ===== */
var mobOpen = false;
function toggleMob() {
  mobOpen = !mobOpen;
  document.getElementById('mob').classList.toggle('open', mobOpen);
  var ov = document.getElementById('mob-overlay');
  if (ov) ov.classList.toggle('open', mobOpen);
  document.getElementById('bi').className = mobOpen ? 'fas fa-xmark' : 'fas fa-bars';
  document.body.style.overflow = mobOpen ? 'hidden' : '';
}
function closeMob() {
  mobOpen = false;
  document.getElementById('mob').classList.remove('open');
  var ov = document.getElementById('mob-overlay');
  if (ov) ov.classList.remove('open');
  var bi = document.getElementById('bi');
  if (bi) bi.className = 'fas fa-bars';
  document.body.style.overflow = '';
}

/* ===== COUNTER ANIMATION ===== */
(function() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('[data-to]').forEach(function(el) {
        var target = parseFloat(el.getAttribute('data-to'));
        var dec    = el.getAttribute('data-dec') ? +el.getAttribute('data-dec') : 0;
        var suf    = el.getAttribute('data-suf') || '';
        var dur = 1800, step = 14;
        var inc = target / (dur / step);
        var cur = 0;
        var t = setInterval(function() {
          cur += inc;
          if (cur >= target) { cur = target; clearInterval(t); }
          el.textContent = (dec ? cur.toFixed(dec) : Math.floor(cur).toLocaleString()) + suf;
        }, step);
      });
      obs.unobserve(entry.target);
    });
  }, {threshold: 0.4});
  document.querySelectorAll('.stats').forEach(function(el) { obs.observe(el); });
})();

/* ===== PACKAGE FILTER ===== */
function filterPkg(cat, btn) {
  document.querySelectorAll('.ft').forEach(function(t) { t.classList.remove('on'); });
  if (btn) btn.classList.add('on');
  document.querySelectorAll('#pkg-grid .pc').forEach(function(c) {
    c.style.display = c.getAttribute('data-cat') === cat ? 'flex' : 'none';
  });
}

/* ===== CAR RENTAL VEHICLE SELECTOR ===== */
function selectVehicle(type, el) {
  document.querySelectorAll('.vs-card').forEach(function(c) { c.classList.remove('active'); });
  el.classList.add('active');
  var p = PRICES[type];
  p.forEach(function(price, i) {
    var el2 = document.getElementById('p' + i);
    if (el2) el2.textContent = '\u20B9' + price.toLocaleString('en-IN');
  });
}

/* ===== REVIEWS CAROUSEL ===== */
(function() {
  var track = document.getElementById('rev-track');
  if (!track) return;
  var all = REVIEWS.concat(REVIEWS);
  all.forEach(function(r) {
    var div = document.createElement('div');
    div.className = 'rc';
    div.innerHTML =
      '<div class="rs3">' + '<i class="fas fa-star"></i>'.repeat(5) + '</div>' +
      '<p class="rt">' + r.text + '</p>' +
      '<div style="display:flex;justify-content:space-between;align-items:center">' +
        '<span class="rau">' + r.name + '</span>' +
        '<span class="rd"><i class="fab fa-google" style="color:#4285F4;margin-right:3px"></i>' + r.date + '</span>' +
      '</div>';
    track.appendChild(div);
  });
})();

/* ===== WHATSAPP & CALL ===== */
var WA = '919419055668';

function waPkg(name, price) {
  var m = '*Package Enquiry — Srinagar Tourism*%0A%0AHello, I am interested in: *' + name + '*' +
          (price ? '%0AStarting Price: ' + price : '') + '%0A%0APlease share itinerary and availability.';
  window.open('https://wa.me/' + WA + '?text=' + m, '_blank');
}

function waCar(route) {
  var m = '*Car Rental Enquiry — Srinagar Tourism*%0A%0AHello, I need a car for: *' + route +
          '*%0A%0APlease confirm availability and vehicle options.';
  window.open('https://wa.me/' + WA + '?text=' + m, '_blank');
}

function callUs() { window.open('tel:+919419055668'); }

/* ===== CONTACT FORM ===== */
function submitForm() {
  var name    = document.getElementById('f-name').value.trim();
  var phone   = document.getElementById('f-phone').value.trim();
  if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
  var tour    = document.getElementById('f-tour').value;
  var arrival = document.getElementById('f-arrival').value;
  var persons = document.getElementById('f-persons').value;
  var msg     = document.getElementById('f-msg').value.trim();
  var m = '*New Tour Enquiry — Srinagar Tourism*%0A%0A*Name:* ' + name + '%0A*Phone:* ' + phone + '%0A';
  if (tour)    m += '*Package:* ' + tour    + '%0A';
  if (arrival) m += '*Arrival:* ' + arrival + '%0A';
  if (persons) m += '*Persons:* ' + persons + '%0A';
  if (msg)     m += '%0A*Message:* ' + msg;
  window.open('https://wa.me/' + WA + '?text=' + m, '_blank');
}

/* ===== ENQUIRE MODAL ===== */
function openModal(pkg) {
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  if (pkg) {
    var sel = document.getElementById('m-tour');
    for (var i = 0; i < sel.options.length; i++) {
      if (sel.options[i].text.toLowerCase().includes(pkg.toLowerCase())) {
        sel.selectedIndex = i; break;
      }
    }
  }
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalBg(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

function submitModal() {
  var name    = document.getElementById('m-name').value.trim();
  var phone   = document.getElementById('m-phone').value.trim();
  if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
  var tour    = document.getElementById('m-tour').value;
  var dates   = document.getElementById('m-dates').value.trim();
  var persons = document.getElementById('m-persons').value;
  var msg     = document.getElementById('m-msg').value.trim();
  var m = '*Tour Enquiry — Srinagar Tourism*%0A%0A*Name:* ' + name + '%0A*Phone:* ' + phone + '%0A';
  if (tour)    m += '*Package:* ' + tour    + '%0A';
  if (dates)   m += '*Dates:* '   + dates   + '%0A';
  if (persons) m += '*Persons:* ' + persons + '%0A';
  if (msg)     m += '%0A*Message:* ' + msg;
  window.open('https://wa.me/' + WA + '?text=' + m, '_blank');
}

/* ===== FAQ ACCORDION ===== */
function toggleFaq(el) {
  var item   = el.parentElement;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i) { i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
}

/* ===== DESTINATION ABOUT MODAL ===== */
function openDestAbout(key) {
  var d = DEST_DATA[key];
  if (!d) return;

  document.getElementById('dam-img').src = d.img;
  document.getElementById('dam-img').alt = d.title + ' - Kashmir Tourism';
  document.getElementById('dam-tag').textContent   = d.tag;
  document.getElementById('dam-title').textContent = d.title;

  document.getElementById('dam-text').innerHTML =
    d.about.map(function(p) { return '<p>' + p + '</p>'; }).join('');

  document.getElementById('dam-facts').innerHTML =
    d.facts.map(function(f) {
      return '<div class="dam-fact"><i class="fas ' + f.icon + '"></i>' +
             '<span><strong>' + f.label + ':</strong> ' + f.val + '</span></div>';
    }).join('');

  var btnsEl = document.getElementById('dam-btns');
  btnsEl.innerHTML = '';

  var b1 = document.createElement('button');
  b1.className = 'btn-g';
  b1.innerHTML = '<i class="fas fa-paper-plane"></i>&nbsp;Enquire Now';
  (function(t) { b1.onclick = function() { closeDestAbout(); openModal(t); }; })(d.title);
  btnsEl.appendChild(b1);

  var b2 = document.createElement('button');
  b2.className = 'btn-wa';
  b2.innerHTML = '<i class="fab fa-whatsapp"></i>&nbsp;WhatsApp Us';
  (function(k, p) { b2.onclick = function() { waPkg(k, p); }; })(d.waKey, d.waPrice);
  btnsEl.appendChild(b2);

  var b3 = document.createElement('button');
  b3.className = 'btn-gh';
  b3.innerHTML = '<i class="fas fa-compass"></i>&nbsp;Full Guide';
  (function(dk) { b3.onclick = function() { closeDestAbout(); showDestPage(dk); }; })(d.destKey);
  btnsEl.appendChild(b3);

  document.getElementById('dest-about-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDestAbout() {
  document.getElementById('dest-about-modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeDestAbout(); closeModal(); }
});

function toggleMobSub(el) {
  var sub = el.nextElementSibling;
  var arrow = el.querySelector('.ml-arrow');
  var isOpen = sub.classList.contains('open');
  sub.classList.toggle('open', !isOpen);
  if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
}
