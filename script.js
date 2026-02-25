:root{
  --bg:#0b1220;
  --card:#0f1a33;
  --text:#eaf0ff;
  --muted:#b6c2e3;
  --line: rgba(255,255,255,.12);
  --accent:#5eead4;
  --accent2:#60a5fa;
  --shadow: 0 18px 50px rgba(0,0,0,.35);
}

*{ box-sizing:border-box; }
html,body{
  margin:0; padding:0;
  font-family: Inter, system-ui, Arial, sans-serif;
  background:
    radial-gradient(1200px 700px at 30% 0%, rgba(96,165,250,.22), transparent 60%),
    radial-gradient(900px 600px at 80% 10%, rgba(94,234,212,.18), transparent 55%),
    var(--bg);
  color:var(--text);
}
a{ color:inherit; text-decoration:none; }
img{ max-width:100%; display:block; }

.container{ width:min(1120px, 92%); margin:0 auto; }

.topbar{
  position:sticky; top:0; z-index:50;
  backdrop-filter: blur(10px);
  background: rgba(11,18,32,.65);
  border-bottom: 1px solid var(--line);
}

.topbar-inner{
  display:flex; align-items:center; justify-content:space-between;
  padding: 14px 0;
  gap: 14px;
}

.brand{ display:flex; align-items:center; gap:12px; min-width: 240px; }
.brand-logo{
  width:44px; height:44px; border-radius: 999px;
  background: rgba(255,255,255,.06);
  border: 1px solid var(--line);
  object-fit: cover;
}
.brand-name{ font-weight:800; letter-spacing:.2px; }
.brand-tag{ color:var(--muted); font-size: 12px; margin-top: 2px; }

.nav{ display:flex; gap: 16px; align-items:center; }
.nav a{ color:var(--muted); font-weight:600; font-size:14px; }
.nav a:hover{ color:var(--text); }

.menu-btn{
  display:none;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.06);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 12px;
  cursor:pointer;
}

.mobile-nav{
  display:none;
  padding: 10px 0 16px;
  border-top: 1px solid var(--line);
}
.mobile-nav a{
  display:block;
  padding: 10px 0;
  color: var(--muted);
  font-weight:600;
}

.hero{ padding: 46px 0 22px; }
.hero-grid{
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 18px;
  align-items: start;
}

.pill{
  display:inline-flex; align-items:center; gap:8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.06);
  color: var(--muted);
  font-weight:600;
  font-size: 13px;
}

h1{
  margin: 14px 0 10px;
  font-size: clamp(28px, 3.6vw, 46px);
  line-height: 1.05;
  letter-spacing: -.6px;
}

.subtitle{
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.6;
}

.hero-cta{ display:flex; gap: 12px; flex-wrap:wrap; }

.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding: 12px 16px;
  border-radius: 14px;
  border: 1px solid rgba(94,234,212,.35);
  background: linear-gradient(135deg, rgba(94,234,212,.22), rgba(96,165,250,.16));
  box-shadow: var(--shadow);
  font-weight:800;
  letter-spacing:.1px;
}
.btn:hover{ transform: translateY(-1px); }

.btn-ghost{
  border: 1px solid var(--line);
  background: rgba(255,255,255,.06);
  box-shadow: none;
  color: var(--text);
}
.btn-small{ padding: 10px 12px; border-radius: 12px; font-weight:800; font-size: 14px; }

.trust{
  margin-top: 18px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.trust-item{
  padding: 12px 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.04);
  border-radius: 16px;
}
.trust-title{ font-weight:800; font-size: 14px; }
.trust-sub{ color:var(--muted); font-size: 12px; margin-top: 2px; }

.section{ padding: 40px 0; }
.section.alt{
  background: rgba(255,255,255,.03);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-head{ margin-bottom: 16px; }
.section-head h2{
  margin: 0 0 6px;
  font-size: 28px;
  letter-spacing: -.3px;
}
.section-head p{ margin:0; color:var(--muted); line-height:1.6; }

.grid-3{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.grid-2{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.card{
  border: 1px solid var(--line);
  background: rgba(255,255,255,.04);
  border-radius: 18px;
  padding: 16px;
}

.hero-card{ box-shadow: var(--shadow); background: rgba(255,255,255,.05); }
.card-header h2{ margin: 0 0 6px; font-size: 20px; }
.card-header p{ margin:0; color: var(--muted); }

.list{ margin: 10px 0 0; padding-left: 18px; color: var(--muted); line-height: 1.7; }

.contact-list{ margin-top: 12px; display:flex; flex-direction:column; gap: 10px; }
.contact-item{
  display:flex; align-items:center; justify-content:space-between;
  gap: 12px;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(0,0,0,.12);
}
.contact-name{ font-weight:800; }
.contact-number{ color: var(--muted); font-size: 13px; margin-top: 2px; }

.contact-actions{ display:flex; gap: 8px; }
.chip{
  padding: 9px 10px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.06);
  font-weight:800;
  font-size: 13px;
}
.chip-dark{
  border-color: rgba(94,234,212,.28);
  background: rgba(94,234,212,.14);
}

.note{
  margin-top: 12px;
  padding: 12px;
  border-radius: 16px;
  border: 1px dashed rgba(255,255,255,.20);
  color: var(--muted);
  background: rgba(255,255,255,.03);
  line-height: 1.6;
}

.price-table{ margin-top: 8px; border-top: 1px solid var(--line); }
.price-table .row{
  display:flex; align-items:center; justify-content:space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
  gap: 10px;
}
.price-table span{ color: var(--muted); }

.img-frame{
  margin-top: 10px;
  border-radius: 16px;
  overflow:hidden;
  border: 1px solid var(--line);
  background: rgba(0,0,0,.12);
}

.small{ color: var(--muted); margin: 0; }
.big{ font-size: 18px; font-weight: 800; margin: 10px 0 0; }

.footer{
  margin-top: 22px;
  padding-top: 12px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  gap: 8px;
}

/* Tabs */
.tabs{
  border: 1px solid var(--line);
  background: rgba(255,255,255,.04);
  border-radius: 18px;
  padding: 12px;
}

.tab-buttons{
  display:flex;
  gap: 10px;
  flex-wrap:wrap;
  border-bottom: 1px solid var(--line);
  padding-bottom: 10px;
  margin-bottom: 12px;
}

.tab-btn{
  cursor:pointer;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.06);
  color: var(--text);
  font-weight: 800;
  border-radius: 999px;
  padding: 10px 12px;
}

.tab-btn.active{
  border-color: rgba(94,234,212,.35);
  background: linear-gradient(135deg, rgba(94,234,212,.22), rgba(96,165,250,.16));
}

.tab-panel{ display:none; }
.tab-panel.show{ display:block; }

/* Session price card */
.price-card h3{ margin: 0 0 6px; }
.price-amt{
  margin: 0 0 10px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: -.5px;
}

/* Responsive */
@media (max-width: 920px){
  .hero-grid{ grid-template-columns: 1fr; }
  .grid-3{ grid-template-columns: 1fr; }
  .grid-2{ grid-template-columns: 1fr; }
  .trust{ grid-template-columns: 1fr; }
  .nav{ display:none; }
  .menu-btn{ display:inline-flex; }
  .mobile-nav.show{ display:block; }
}
