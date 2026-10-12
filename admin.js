/* Amorelli Realty — staff admin peek + listings store (concept demo).
   Listings persist to localStorage; the public grid renders from the same store. */
(function () {
  "use strict";
  var d = document;

  var SEED_LISTINGS = [
    { id: 'l1', price: 1998000, address: '23-50 31st Drive, Astoria', desc: 'Four-family residence',
      hood: 'astoria-lic', hoodLabel: 'Astoria', types: ['residential', 'multi'], status: 'sale',
      img: 'listing-astoria-4family.jpg' },
    { id: 'l2', price: 2800000, address: 'Whitestone, Queens', desc: 'Single-family home',
      hood: 'whitestone', hoodLabel: 'Whitestone', types: ['residential'], status: 'sold',
      img: 'listing-whitestone.jpg' },
    { id: 'l3', price: 1150000, address: 'Long Island City', desc: '4-bedroom residence',
      hood: 'astoria-lic', hoodLabel: 'LIC', types: ['residential'], status: 'sold',
      img: 'listing-lic.jpg' }
  ];

  var SEED_LEADS = [
    { id: 'q1', name: 'Maria Santos', contact: '(718) 555-0142', address: '31-18 41st Street, Astoria',
      detail: 'Multi-family · 4 bd', range: '$1,450,000 \u2013 $1,700,000', date: '2026-10-11', done: false },
    { id: 'q2', name: 'Chen Wei', contact: 'chen.w@example.com', address: '144-12 38th Avenue, Flushing',
      detail: 'Condo/Co-op · 2 bd', range: '$680,000 \u2013 $790,000', date: '2026-10-10', done: false },
    { id: 'q3', name: 'James Okafor', contact: '(347) 555-0193', address: '25-40 Ditmars Blvd, Astoria',
      detail: 'Single-family · 3 bd', range: '$1,120,000 \u2013 $1,310,000', date: '2026-10-08', done: true }
  ];

  var IMAGES = [
    'listing-astoria-4family.jpg', 'listing-whitestone.jpg', 'listing-lic.jpg',
    'hero.jpg', 'office.jpg', 'thirtieth-avenue.jpg'
  ];

  function load(key, seed) {
    try {
      var raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return JSON.parse(JSON.stringify(seed));
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  var store = {
    get listings() { return load('amorelli_listings', SEED_LISTINGS); },
    set listings(v) { save('amorelli_listings', v); },
    get leads() { return load('amorelli_leads', SEED_LEADS); },
    set leads(v) { save('amorelli_leads', v); }
  };

  function fmt(n) { return '$' + Number(n).toLocaleString('en-US'); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------- public grid ---------- */
  function cardHTML(l) {
    var badge = l.status === 'sale'
      ? '<span class="x-badge x-badge--sale">For Sale</span>'
      : '<span class="x-badge">Sold</span>';
    return '<article class="x-card is-in" data-hood="' + esc(l.hood) + '" data-types="' + esc(l.types.join(' ')) + '">' +
      '<figure class="x-card__media"><img src="' + esc(l.img) + '" alt="' + esc(l.desc + ' at ' + l.address) + '" loading="lazy" />' + badge + '</figure>' +
      '<p class="x-card__price">' + fmt(l.price) + '</p>' +
      '<h3>' + esc(l.address) + '</h3>' +
      '<p class="x-card__meta"><span>' + esc(l.desc) + '</span><span>' + esc(l.hoodLabel) + '</span></p>' +
      '</article>';
  }

  function renderGrid() {
    var grid = d.querySelector('.x-cards');
    if (!grid) return;
    // keep the empty-state div; render cards before it
    var empty = d.getElementById('x-empty');
    var html = store.listings.map(cardHTML).join('');
    grid.querySelectorAll('.x-card').forEach(function (c) { c.remove(); });
    if (empty) empty.insertAdjacentHTML('beforebegin', html);
    else grid.insertAdjacentHTML('beforeend', html);
    if (window.__amorelliCount) window.__amorelliCount();
  }
  window.__amorelliRenderGrid = renderGrid;

  /* ---------- admin ---------- */
  var LOGGED = 'amorelli_admin';

  function isLogged() {
    try { return sessionStorage.getItem(LOGGED) === '1'; } catch (e) { return false; }
  }

  function showView(name) {
    d.querySelectorAll('#adm-dash [data-view]').forEach(function (v) {
      v.hidden = v.getAttribute('data-view') !== name;
    });
    d.querySelectorAll('.adm-nav button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-go') === name);
    });
    if (name === 'overview') renderOverview();
    if (name === 'listings') renderTable();
    if (name === 'leads') renderLeads();
  }

  function renderOverview() {
    var ls = store.listings, leads = store.leads;
    var active = ls.filter(function (l) { return l.status === 'sale'; }).length;
    var fresh = leads.filter(function (l) { return !l.done; }).length;
    var vol = ls.reduce(function (s, l) { return s + (+l.price || 0); }, 0);
    d.getElementById('adm-stat-active').textContent = active;
    d.getElementById('adm-stat-leads').textContent = fresh;
    d.getElementById('adm-stat-vol').textContent = fmt(vol);
    d.getElementById('adm-stat-total').textContent = ls.length;
  }

  function renderTable() {
    var tb = d.getElementById('adm-rows');
    var ls = store.listings;
    tb.innerHTML = ls.map(function (l) {
      return '<tr><td><img src="' + esc(l.img) + '" alt="" /></td>' +
        '<td><b>' + fmt(l.price) + '</b><br /><span class="adm-dim">' + esc(l.address) + '</span></td>' +
        '<td>' + esc(l.desc) + '</td>' +
        '<td>' + esc(l.hoodLabel) + '</td>' +
        '<td><span class="adm-pill ' + (l.status === 'sale' ? 'adm-pill--sale' : '') + '">' +
          (l.status === 'sale' ? 'For Sale' : 'Sold') + '</span></td>' +
        '<td class="adm-actions"><button type="button" data-edit="' + l.id + '">Edit</button>' +
        '<button type="button" data-del="' + l.id + '" class="adm-danger">Delete</button></td></tr>';
    }).join('') || '<tr><td colspan="6" class="adm-dim">No listings yet. Add your first one above.</td></tr>';
  }

  function renderLeads() {
    var tb = d.getElementById('adm-leads');
    var leads = store.leads;
    tb.innerHTML = leads.map(function (l) {
      return '<tr class="' + (l.done ? 'adm-done' : '') + '">' +
        '<td><b>' + esc(l.name) + '</b><br /><span class="adm-dim">' + esc(l.contact) + '</span></td>' +
        '<td>' + esc(l.address) + '<br /><span class="adm-dim">' + esc(l.detail) + '</span></td>' +
        '<td>' + esc(l.range) + '</td><td>' + esc(l.date) + '</td>' +
        '<td><button type="button" data-toggle="' + l.id + '">' + (l.done ? 'Reopen' : 'Mark contacted') + '</button></td></tr>';
    }).join('');
  }

  function openForm(l) {
    var f = d.getElementById('adm-form');
    f.hidden = false;
    d.getElementById('adm-f-id').value = l ? l.id : '';
    d.getElementById('adm-f-price').value = l ? l.price : '';
    d.getElementById('adm-f-address').value = l ? l.address : '';
    d.getElementById('adm-f-desc').value = l ? l.desc : '';
    d.getElementById('adm-f-hood').value = l ? l.hood : 'astoria-lic';
    d.getElementById('adm-f-status').value = l ? l.status : 'sale';
    d.getElementById('adm-f-img').value = l ? l.img : IMAGES[0];
    d.querySelectorAll('#adm-form input[name="types"]').forEach(function (cb) {
      cb.checked = l ? l.types.indexOf(cb.value) >= 0 : false;
    });
    d.getElementById('adm-form-title').textContent = l ? 'Edit listing' : 'Add listing';
    f.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function hoodLabel(v) {
    var sel = d.getElementById('adm-f-hood');
    var opt = sel ? sel.querySelector('option[value="' + v + '"]') : null;
    return opt ? opt.textContent.split(' / ')[0] : v;
  }

  function initAdmin() {
    var login = d.getElementById('adm-login');
    var dash = d.getElementById('adm-dash');
    if (!login || !dash) return;

    function refresh() {
      var on = isLogged();
      login.hidden = on;
      dash.hidden = !on;
      if (on) showView('overview');
    }

    var lf = d.getElementById('adm-loginform');
    if (lf) lf.addEventListener('submit', function (e) {
      e.preventDefault();
      var em = d.getElementById('adm-email').value.trim();
      var pw = d.getElementById('adm-pass').value;
      var err = d.getElementById('adm-err');
      if (em === 'demo@amorellirealty.com' && pw === 'amorelli123') {
        try { sessionStorage.setItem(LOGGED, '1'); } catch (e2) {}
        err.hidden = true;
        refresh();
      } else {
        err.hidden = false;
      }
    });

    d.querySelectorAll('.adm-nav button[data-go]').forEach(function (b) {
      b.addEventListener('click', function () { showView(b.getAttribute('data-go')); });
    });
    var out = d.getElementById('adm-logout');
    if (out) out.addEventListener('click', function () {
      try { sessionStorage.removeItem(LOGGED); } catch (e) {}
      refresh();
    });

    d.getElementById('adm-add').addEventListener('click', function () { openForm(null); });
    d.getElementById('adm-cancel').addEventListener('click', function () {
      d.getElementById('adm-form').hidden = true;
    });

    d.getElementById('adm-rows').addEventListener('click', function (e) {
      var t = e.target;
      var ls = store.listings;
      if (t.hasAttribute('data-del')) {
        if (!confirm('Delete this listing?')) return;
        store.listings = ls.filter(function (l) { return l.id !== t.getAttribute('data-del'); });
        renderTable(); renderGrid();
      } else if (t.hasAttribute('data-edit')) {
        var l = ls.filter(function (x) { return x.id === t.getAttribute('data-edit'); })[0];
        if (l) openForm(l);
      }
    });

    d.getElementById('adm-leads').addEventListener('click', function (e) {
      var t = e.target;
      if (!t.hasAttribute('data-toggle')) return;
      var leads = store.leads;
      leads.forEach(function (l) {
        if (l.id === t.getAttribute('data-toggle')) l.done = !l.done;
      });
      store.leads = leads;
      renderLeads();
    });

    d.getElementById('adm-save').addEventListener('click', function () {
      var id = d.getElementById('adm-f-id').value;
      var types = [];
      d.querySelectorAll('#adm-form input[name="types"]:checked').forEach(function (cb) { types.push(cb.value); });
      var l = {
        id: id || 'l' + Date.now(),
        price: parseInt((d.getElementById('adm-f-price').value || '').replace(/[^0-9]/g, ''), 10) || 0,
        address: d.getElementById('adm-f-address').value.trim(),
        desc: d.getElementById('adm-f-desc').value.trim(),
        hood: d.getElementById('adm-f-hood').value,
        hoodLabel: hoodLabel(d.getElementById('adm-f-hood').value),
        types: types.length ? types : ['residential'],
        status: d.getElementById('adm-f-status').value,
        img: d.getElementById('adm-f-img').value
      };
      if (!l.address || !l.price) { alert('Address and price are required.'); return; }
      var ls = store.listings;
      var ix = -1;
      ls.forEach(function (x, i) { if (x.id === l.id) ix = i; });
      if (ix >= 0) ls[ix] = l; else ls.unshift(l);
      store.listings = ls;
      d.getElementById('adm-form').hidden = true;
      renderTable(); renderGrid();
    });

    // reset demo data
    var rs = d.getElementById('adm-reset');
    if (rs) rs.addEventListener('click', function () {
      try { localStorage.removeItem('amorelli_listings'); localStorage.removeItem('amorelli_leads'); } catch (e) {}
      renderTable(); renderLeads(); renderGrid(); showView('overview');
    });

    refresh();
  }

  // boot: render public grid, init admin when its page exists
  function boot() {
    renderGrid();
    initAdmin();
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
