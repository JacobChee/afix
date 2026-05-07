const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname);

const brands = [
  {
    slug: 'panasonic-aircon-servicing',
    name: 'Panasonic',
    heroImg: 'hero-aircon-servicing',
    heroAlt: 'Certified technician servicing a Panasonic air conditioner in Singapore',
    badge: 'All Panasonic models · HDB · Condo · Commercial',
    waBook: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Panasonic%20aircon%20service.',
    waStd: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Panasonic%20standard%20aircon%20service.',
    waChem: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Panasonic%20aircon%20chemical%20wash.',
    waFaq: 'Hi%20AFIX!%20I%20have%20a%20question%20about%20Panasonic%20aircon%20servicing.',
    models: [
      { name: 'CS-PU Series', sub: 'Premium inverter' },
      { name: 'CS-MU Series', sub: 'Standard inverter' },
      { name: 'CS-XU Series', sub: 'nanoe-X series' },
      { name: 'CS-VU Series', sub: 'Value inverter' },
      { name: 'CS-SU Series', sub: 'Compact series' },
      { name: 'Multi-Split', sub: 'CU-2Z / 3Z series' },
      { name: 'Cassette units', sub: 'Commercial' },
      { name: 'Older models', sub: 'Non-inverter & legacy' },
    ],
    desc1: 'Panasonic is one of the most widely owned aircon brands in Singapore HDB flats, known for its reliability, energy efficiency, and nanoe-X air purification technology. We service all Panasonic models — from older non-inverter units to the latest CS-PU and nanoe-X series.',
    desc2: 'Singapore\'s humidity means Panasonic units accumulate mould and dust on the evaporator coil faster than most homeowners expect. Panasonic\'s nanoe-X feature helps suppress bacteria in the air, but it can\'t clean the coil itself — that still needs physical servicing. We clean filters, coil, blower wheel, drain tray, and pipes every job.',
    issue1title: 'Panasonic not cold / blowing warm air',
    issue1body: 'Most often a dirty evaporator coil or low refrigerant. A chemical wash resolves coil-related cooling issues. If refrigerant is low, we diagnose the cause before recommending a top-up — a slow leak needs finding first.',
    issue2title: 'Panasonic leaking water',
    issue2body: 'Almost always a blocked drainage line, cleared as part of every standard service. If the drain tray is cracked or pipe disconnected, we show you and quote separately before doing any additional work.',
    issue3title: 'Panasonic smells musty',
    issue3body: 'Mould on the evaporator coil — common in Panasonic units that run frequently in humid rooms. A chemical wash with mould treatment clears this. Units are typically odour-free within 30 minutes of the job.',
    issue4title: 'Panasonic error codes (H or F codes)',
    issue4body: 'Common Panasonic error codes (H97, H98, F91, F99, etc.) point to compressor, sensor, or refrigerant issues. We diagnose on-site and advise clearly on what needs fixing before doing any work.',
    faq: [
      { q: 'How much does Panasonic aircon servicing cost in Singapore?', a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2+. All prices include before-and-after photos, shoe covers, and compressor check — no hidden charges.' },
      { q: 'Which Panasonic models do you service?', a: 'All Panasonic models — CS-PU, CS-MU, CS-XU (nanoe-X), CS-VU, CS-SU, multi-split, ceiling cassette, and older non-inverter units. WhatsApp us your model number if unsure.' },
      { q: 'How often should I service my Panasonic aircon?', a: 'Every 3 months for a standard service, and a chemical wash every 6–12 months. Singapore\'s humidity causes mould and dust to build up on the coil faster than in most climates — regular servicing maintains performance and extends compressor life.' },
      { q: 'Why is my Panasonic aircon not cooling?', a: 'Most common causes: a dirty evaporator coil blocking airflow, or low refrigerant gas. A chemical wash clears coil-related issues. If gas is low, we\'ll find the leak before recommending a top-up.' },
      { q: 'My Panasonic is dripping water — do I need a service or repair?', a: 'Usually a service — blocked drainage is cleared as part of every standard job. If the drain tray or pipe is physically damaged, we quote the repair separately after showing you the issue.' },
    ],
  },
  {
    slug: 'lg-aircon-servicing',
    name: 'LG',
    heroImg: 'hero-aircon-servicing',
    heroAlt: 'Certified technician servicing an LG air conditioner in Singapore',
    badge: 'All LG models · HDB · Condo · Commercial',
    waBook: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20an%20LG%20aircon%20service.',
    waStd: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20an%20LG%20standard%20aircon%20service.',
    waChem: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20an%20LG%20aircon%20chemical%20wash.',
    waFaq: 'Hi%20AFIX!%20I%20have%20a%20question%20about%20LG%20aircon%20servicing.',
    models: [
      { name: 'DUALCOOL Series', sub: 'Dual inverter' },
      { name: 'ARTCOOL Series', sub: 'Premium design' },
      { name: 'Standard Inverter', sub: 'TS / US series' },
      { name: 'Multi-Split', sub: 'MU / MJ series' },
      { name: 'Ceiling Cassette', sub: 'Commercial' },
      { name: 'Older models', sub: 'Non-inverter & legacy' },
    ],
    desc1: 'LG aircons are popular in Singapore condos and newer HDB flats, particularly the DUALCOOL and ARTCOOL inverter series. LG\'s dual inverter compressor is reliable, but like all split-system aircons in Singapore, the indoor unit accumulates dust and mould that needs regular cleaning.',
    desc2: 'We service all LG models including DUALCOOL, ARTCOOL, and older non-inverter units. Our technicians clean air filters, evaporator coil, blower wheel, drainage tray, and drain pipes. If we notice anything unusual — worn capacitors, unusual compressor readings, ice on the pipes — we flag it before doing additional work.',
    issue1title: 'LG aircon not cold',
    issue1body: 'A dirty coil or low refrigerant is the most common cause. A chemical wash resolves coil-related cooling issues. LG DUALCOOL units with low gas often run continuously without reaching the set temperature — a tell-tale sign to watch for.',
    issue2title: 'LG aircon leaking water',
    issue2body: 'Blocked drain line — cleared as part of every standard service. LG units in older condos sometimes have drainage pipes that run longer routes and are more prone to partial blockages.',
    issue3title: 'LG aircon smells bad',
    issue3body: 'Mould on the evaporator coil. A chemical wash with mould treatment clears it. LG\'s Plasmaster ionizer (where fitted) helps with airborne bacteria but can\'t clean the physical coil.',
    issue4title: 'LG error codes (CH codes)',
    issue4body: 'Common LG error codes (CH02, CH05, CH10, etc.) indicate sensor, compressor, or refrigerant issues. We diagnose on-site and advise on next steps before doing any additional work.',
    faq: [
      { q: 'How much does LG aircon servicing cost in Singapore?', a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2+. All prices include before-and-after photos, shoe covers, and compressor check.' },
      { q: 'Which LG models do you service?', a: 'All LG aircon models — DUALCOOL, ARTCOOL, standard inverter TS/US series, multi-split, ceiling cassette, and older non-inverter units. WhatsApp us your model number if unsure.' },
      { q: 'How often should I service my LG aircon?', a: 'Every 3 months for a standard service. A chemical wash every 6–12 months. LG DUALCOOL inverters are efficient but still accumulate mould and dust in Singapore\'s climate — regular servicing prevents cooling loss and early compressor wear.' },
      { q: 'Why is my LG DUALCOOL not cooling properly?', a: 'A dirty evaporator coil is the most likely cause. If the unit runs continuously without reaching the set temperature, refrigerant may also be low. A chemical wash resolves coil issues; gas top-up requires finding the leak source first.' },
      { q: 'My LG aircon is showing a CH error — what does it mean?', a: 'CH codes indicate specific faults: CH02 = indoor temperature sensor, CH05 = fan motor, CH10 = outdoor discharge temperature. We diagnose on-site and advise on repair options and costs before touching anything.' },
    ],
  },
  {
    slug: 'hitachi-aircon-servicing',
    name: 'Hitachi',
    heroImg: 'hero-aircon-servicing',
    heroAlt: 'Certified technician servicing a Hitachi air conditioner in Singapore',
    badge: 'All Hitachi models · HDB · Condo · Commercial',
    waBook: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Hitachi%20aircon%20service.',
    waStd: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Hitachi%20standard%20aircon%20service.',
    waChem: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Hitachi%20aircon%20chemical%20wash.',
    waFaq: 'Hi%20AFIX!%20I%20have%20a%20question%20about%20Hitachi%20aircon%20servicing.',
    models: [
      { name: 'Frost Wash Series', sub: 'Self-cleaning inverter' },
      { name: 'Premium Series', sub: 'RAS-X / S series' },
      { name: 'Standard Inverter', sub: 'RAS-E / EJ series' },
      { name: 'Multi-Split', sub: 'RAM / RAC series' },
      { name: 'Ceiling Cassette', sub: 'Commercial' },
      { name: 'Older models', sub: 'Non-inverter & legacy' },
    ],
    desc1: 'Hitachi aircons are known for quality and durability, and are popular in both HDB flats and private condos across Singapore. Hitachi\'s Frost Wash self-cleaning function is a useful feature, but it cleans only the coil surface — it doesn\'t replace a full professional service of the filters, blower wheel, drainage, and compressor.',
    desc2: 'We service all Hitachi models including Frost Wash, Premium (RAS-X/S), Standard inverter (RAS-E/EJ), multi-split, and older non-inverter units. We take before-and-after photos of every job and flag anything unusual — worn parts, unusual readings — before doing additional work.',
    issue1title: 'Hitachi aircon not cold',
    issue1body: 'Most often a dirty evaporator coil or low refrigerant. Hitachi Frost Wash cleans the coil surface with ice, but deeper mould and compacted dust still need a chemical wash. If the unit is blowing air but not cooling, start with a chemical wash.',
    issue2title: 'Hitachi aircon leaking water',
    issue2body: 'Usually a blocked drainage line — cleared as part of every standard service. Hitachi Frost Wash units may sometimes leave residual water in the drain tray from the self-cleaning cycle; if the drain is partially blocked, this overflows.',
    issue3title: 'Hitachi aircon smells musty after Frost Wash',
    issue3body: 'Frost Wash cleans the coil surface but leaves residual moisture that can encourage mould growth between cycles. A chemical wash fully clears mould from the coil, blower wheel, and tray — recommended once a year even for Frost Wash units.',
    issue4title: 'Hitachi error codes (E or F codes)',
    issue4body: 'Common Hitachi error codes (E01, E03, E07, F01, F03, etc.) indicate sensor, compressor, or fan issues. We diagnose on-site and advise clearly before doing any additional work.',
    faq: [
      { q: 'How much does Hitachi aircon servicing cost in Singapore?', a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2+. Includes before-and-after photos, shoe covers, and compressor check.' },
      { q: 'Which Hitachi models do you service?', a: 'All Hitachi aircon models — Frost Wash, Premium RAS-X/S series, Standard inverter RAS-E/EJ series, multi-split, ceiling cassette, and older non-inverter units.' },
      { q: 'Does Hitachi Frost Wash replace professional servicing?', a: 'No — Frost Wash cleans the coil surface with ice, but it doesn\'t clean the filters, blower wheel, drainage system, or run a compressor check. Professional servicing covers all of these. We recommend a full service every 3 months and a chemical wash every 6–12 months even for Frost Wash units.' },
      { q: 'Why does my Hitachi aircon still smell after a Frost Wash cycle?', a: 'Frost Wash cleans the coil surface but doesn\'t remove deep mould from the blower wheel or the drainage system. A chemical wash reaches these areas and includes a mould treatment — units are typically odour-free within 30 minutes.' },
      { q: 'My Hitachi is leaking water after a Frost Wash — why?', a: 'Frost Wash produces condensate water. If the drainage line is partially blocked, this water overflows the drain tray. A standard service clears the blockage. We\'ll also check the drain tray and pipes while on-site.' },
    ],
  },
  {
    slug: 'samsung-aircon-servicing',
    name: 'Samsung',
    heroImg: 'hero-aircon-servicing',
    heroAlt: 'Certified technician servicing a Samsung air conditioner in Singapore',
    badge: 'All Samsung models · HDB · Condo · Commercial',
    waBook: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Samsung%20aircon%20service.',
    waStd: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Samsung%20standard%20aircon%20service.',
    waChem: 'Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20Samsung%20aircon%20chemical%20wash.',
    waFaq: 'Hi%20AFIX!%20I%20have%20a%20question%20about%20Samsung%20aircon%20servicing.',
    models: [
      { name: 'WindFree Series', sub: 'WindFree Comfort / Elite' },
      { name: 'Digital Inverter', sub: 'AR-TXC / TXHC series' },
      { name: 'Boracay Series', sub: 'Standard inverter' },
      { name: 'Multi-Split', sub: 'MH / MX series' },
      { name: 'Ceiling Cassette', sub: 'Commercial' },
      { name: 'Older models', sub: 'Non-inverter & legacy' },
    ],
    desc1: 'Samsung aircons — particularly the WindFree Comfort and WindFree Elite — are increasingly popular in Singapore condos and newer HDB flats. Samsung\'s WindFree technology circulates cool air gently without a direct cold draught, but the indoor unit still accumulates dust and mould that needs professional cleaning.',
    desc2: 'We service all Samsung models including WindFree Comfort, WindFree Elite, Digital Inverter series, Boracay, multi-split systems, and older non-inverter units. As with all split-system aircons, the coil, blower wheel, and drainage system require physical cleaning that no technology feature can replace.',
    issue1title: 'Samsung aircon not cold',
    issue1body: 'A dirty evaporator coil or low refrigerant is the most common cause. Samsung WindFree units may feel like they\'re "not blowing cold" because of their gentle airflow — but if the room isn\'t reaching the set temperature, start with a chemical wash to rule out coil buildup.',
    issue2title: 'Samsung aircon leaking water',
    issue2body: 'Blocked drainage — cleared as part of every standard service. Samsung units in older buildings sometimes have drainage routes that are more prone to partial blockages from debris and mould growth.',
    issue3title: 'Samsung aircon smells musty',
    issue3body: 'Mould on the evaporator coil or blower wheel. A chemical wash clears this. Samsung\'s Digital Inverter compressor runs frequently at low speed, which can allow condensation to sit on the coil longer and encourage mould growth.',
    issue4title: 'Samsung error codes (E or C codes)',
    issue4body: 'Common Samsung error codes (E1, E2, E3, C4, C5, etc.) indicate sensor, fan, or refrigerant issues. We diagnose on-site and give you a clear picture of what\'s needed before starting any additional work.',
    faq: [
      { q: 'How much does Samsung aircon servicing cost in Singapore?', a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2+. Includes before-and-after photos, shoe covers, and compressor check.' },
      { q: 'Which Samsung models do you service?', a: 'All Samsung aircon models — WindFree Comfort, WindFree Elite, Digital Inverter AR-TXC/TXHC, Boracay, multi-split MH/MX series, ceiling cassette, and older non-inverter units.' },
      { q: 'How often should I service my Samsung WindFree?', a: 'Every 3 months for a standard service, and a chemical wash every 6–12 months. WindFree units run at low speeds for extended periods, which can cause condensate to sit on the coil and encourage mould — regular servicing prevents this.' },
      { q: 'My Samsung aircon doesn\'t feel cold even though it\'s running — why?', a: 'WindFree mode intentionally disperses air gently so it may not feel cold at the unit. If the room genuinely isn\'t cooling to the set temperature, the most likely cause is a dirty evaporator coil or low refrigerant. Start with a chemical wash.' },
      { q: 'My Samsung is showing an E or C error — what does it mean?', a: 'E codes usually indicate indoor sensor or fan issues; C codes relate to outdoor unit faults. We diagnose on-site with the error code and advise on repair options and costs before doing anything.' },
    ],
  },
];

const CSS = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#0f2a4a;--blue:#1a5fa8;--blue-lt:#2e7dd1;--steel:#5b7fa6;--sky:#e8f2fc;--accent:#f0a500;--white:#ffffff;--off:#f7f9fc;--text:#1a1e27;--muted:#6b7a90;--border:#dde5f0;--font-head:'Playfair Display',Georgia,serif;--font-body:'DM Sans',sans-serif}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);color:var(--text);background:var(--white);font-size:16px;line-height:1.7;overflow-x:hidden}
nav{position:sticky;top:0;z-index:200;background:var(--white);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:0 6vw;height:68px}
.nav-brand{display:flex;align-items:center;text-decoration:none}
.nav-links{display:flex;gap:28px;list-style:none}
.nav-links a{font-size:14px;font-weight:500;color:var(--muted);text-decoration:none;transition:color .2s}
.nav-links a:hover,.nav-links a.active{color:var(--blue)}
.nav-cta{background:var(--blue);color:var(--white);font-size:14px;font-weight:500;padding:10px 24px;border-radius:8px;text-decoration:none;transition:background .2s,transform .15s;white-space:nowrap;display:inline-flex;align-items:center;gap:6px}
.nav-cta:hover{background:var(--blue-lt);transform:translateY(-1px)}
.breadcrumb{background:var(--off);border-bottom:1px solid var(--border);padding:12px 6vw;font-size:13px;color:var(--muted)}
.breadcrumb a{color:var(--muted);text-decoration:none}.breadcrumb a:hover{color:var(--blue)}.breadcrumb span{margin:0 6px}
.page-hero{background:var(--navy);position:relative;overflow:hidden}
.hero-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:40px 40px}
.hero-inner{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;align-items:stretch;min-height:480px}.page-hero-text{padding:72px 48px 64px 6vw;display:flex;flex-direction:column;justify-content:center}.page-hero-img{position:relative;overflow:hidden}.page-hero-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;display:block}@media(max-width:900px){.page-hero-img{display:none}.hero-inner{grid-template-columns:1fr;min-height:0}.page-hero-text{padding:56px 6vw 48px}}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);border-radius:100px;padding:6px 16px 6px 8px;font-size:13px;color:rgba(255,255,255,0.8);margin-bottom:28px}
.badge-dot{width:7px;height:7px;background:var(--accent);border-radius:50%}
.page-h1{font-family:var(--font-head);font-size:clamp(34px,4vw,54px);font-weight:700;color:var(--white);line-height:1.15;margin-bottom:18px}
.page-h1 em{color:var(--accent);font-style:normal}
.page-sub{font-size:17px;font-weight:300;color:rgba(255,255,255,0.6);max-width:560px;line-height:1.8;margin-bottom:36px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.btn-primary{display:inline-block;background:var(--accent);color:var(--navy);font-weight:500;font-size:15px;padding:15px 32px;border-radius:8px;text-decoration:none;transition:background .2s,transform .15s}
.btn-primary:hover{background:#f5b730;transform:translateY(-1px)}
.btn-outline{display:inline-block;border:1.5px solid rgba(255,255,255,0.28);color:var(--white);font-weight:400;font-size:15px;padding:15px 32px;border-radius:8px;text-decoration:none}
.hero-trust{margin-top:44px;display:flex;align-items:center;gap:24px;border-top:1px solid rgba(255,255,255,0.1);padding-top:24px;flex-wrap:wrap}
.trust-num{font-family:var(--font-head);font-size:26px;color:var(--white)}
.trust-lbl{font-size:12px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1px;margin-top:2px}
.trust-div{width:1px;height:38px;background:rgba(255,255,255,0.14)}
.strip{background:var(--blue);padding:16px 6vw;display:flex;align-items:center;justify-content:center;gap:40px;flex-wrap:wrap}
.strip-item{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:500;color:rgba(255,255,255,0.9)}
.strip-item svg{width:16px;height:16px;stroke:var(--accent);fill:none;stroke-width:2;flex-shrink:0}
.section-label{font-size:11px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;color:var(--blue);margin-bottom:12px}
.section-heading{font-family:var(--font-head);font-size:clamp(28px,3vw,40px);font-weight:700;color:var(--navy);line-height:1.2;margin-bottom:16px}
.section-sub{font-size:17px;font-weight:300;color:var(--muted);max-width:560px;line-height:1.75;margin-bottom:48px}
.cs{padding:80px 6vw}.cs.alt{background:var(--off)}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
.body-copy p{font-size:16px;font-weight:300;color:var(--muted);line-height:1.85;margin-bottom:18px}
.body-copy p:last-child{margin-bottom:0}
.check-list{list-style:none;display:flex;flex-direction:column;gap:12px}
.check-list li{display:flex;align-items:flex-start;gap:10px;font-size:15px;font-weight:300;color:var(--muted);line-height:1.5}
.check-list li::before{content:'';width:18px;height:18px;background:var(--sky);border-radius:50%;flex-shrink:0;margin-top:2px;background-image:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='1.5,5 4,7.5 8.5,2.5' fill='none' stroke='%231a5fa8' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.models-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:8px}
.model-chip{background:var(--white);border:1px solid var(--border);border-radius:8px;padding:12px 16px;font-size:13px;color:var(--navy);font-weight:500}
.model-series{font-size:11px;color:var(--muted);font-weight:300;margin-top:3px}
.price-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.price-card{border:1px solid var(--border);border-radius:12px;overflow:hidden}
.price-card.featured{border:2px solid var(--blue)}
.pc-head{padding:20px 24px;background:var(--navy)}.pc-head.blue{background:#0C447C}
.pc-badge{display:inline-block;font-size:11px;font-weight:500;padding:3px 10px;border-radius:20px;margin-bottom:8px;background:rgba(255,255,255,0.15);color:#fff}
.pc-badge.pop{background:#378ADD}
.pc-title{font-size:17px;font-weight:500;color:#fff;margin-bottom:2px}
.pc-sub{font-size:12px;color:rgba(255,255,255,0.55)}
.pc-prices{padding:16px 24px;border-bottom:1px solid var(--border)}
.pc-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border);font-size:14px}
.pc-row:last-child{border-bottom:none;padding-bottom:0}.pc-row:first-child{padding-top:0}
.pc-label{color:var(--muted)}.pc-val{font-weight:500;color:var(--navy);font-size:15px}
.pc-cta{padding:16px 24px}
.pc-btn{display:block;width:100%;padding:11px;text-align:center;border-radius:8px;font-size:13px;font-weight:500;text-decoration:none;transition:opacity .2s}
.pc-btn:hover{opacity:.88}.pc-btn.navy{background:var(--navy);color:#fff}.pc-btn.blue{background:#0C447C;color:#fff}
.pc-note{font-size:11px;color:var(--muted);margin-top:8px;text-align:center;line-height:1.4}
.issues-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:0}
.issue-card{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:28px}
.issue-title{font-size:15px;font-weight:500;color:var(--navy);margin-bottom:10px}
.issue-body{font-size:14px;font-weight:300;color:var(--muted);line-height:1.65}
#faq{background:var(--white);padding:80px 6vw}
.faq-layout{display:grid;grid-template-columns:1fr 2fr;gap:80px;align-items:start}
.faq-sticky{position:sticky;top:90px}
.faq-item{border-bottom:1px solid var(--border);padding:22px 0}
.faq-item:first-child{border-top:1px solid var(--border)}
.faq-q{display:flex;justify-content:space-between;align-items:center;gap:16px;font-size:16px;font-weight:500;color:var(--navy);cursor:pointer;user-select:none}
.faq-toggle{width:28px;height:28px;flex-shrink:0;background:var(--sky);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--blue);font-size:20px;font-weight:300;transition:background .2s,transform .25s}
.faq-item.open .faq-toggle{background:var(--blue);color:var(--white);transform:rotate(45deg)}
.faq-a{font-size:15px;font-weight:300;color:var(--muted);line-height:1.8;max-height:0;overflow:hidden;transition:max-height .35s ease,padding-top .2s}
.faq-item.open .faq-a{max-height:300px;padding-top:14px}
.cta-section{background:var(--navy);padding:80px 6vw;text-align:center}
.cta-section h2{font-family:var(--font-head);font-size:clamp(28px,3vw,40px);font-weight:700;color:var(--white);margin-bottom:14px}
.cta-section p{font-size:17px;font-weight:300;color:rgba(255,255,255,0.6);max-width:480px;margin:0 auto 36px;line-height:1.75}
.cta-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.btn-wa{display:inline-flex;align-items:center;gap:10px;background:#25d366;color:#fff;font-size:15px;font-weight:500;padding:15px 32px;border-radius:8px;text-decoration:none;transition:background .2s,transform .15s}
.btn-wa:hover{background:#1ebe5d;transform:translateY(-1px)}
footer{background:var(--navy);padding:52px 6vw 32px;border-top:1px solid rgba(255,255,255,0.08)}
.footer-top{display:flex;justify-content:space-between;align-items:flex-start;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,0.1)}
.footer-tagline{font-size:13px;font-weight:300;color:rgba(255,255,255,0.4);line-height:1.6;margin-top:10px;max-width:240px}
.footer-col-title{font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.38);margin-bottom:16px}
.footer-col a{display:block;font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;margin-bottom:10px;transition:color .2s}
.footer-col a:hover{color:var(--white)}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;padding-top:28px}
.footer-copy,.footer-lic{font-size:13px;color:rgba(255,255,255,0.28)}
.fade-up{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
.fade-up.visible{opacity:1;transform:translateY(0)}
@media(max-width:960px){.two-col{grid-template-columns:1fr}.price-grid{grid-template-columns:1fr}.models-grid{grid-template-columns:repeat(2,1fr)}.issues-grid{grid-template-columns:1fr}.faq-layout{grid-template-columns:1fr}.faq-sticky{position:static}}
@media(max-width:600px){.nav-links{display:none}.strip{gap:20px}}`;

const NAV_SVG = `<svg width="148" height="42" viewBox="0 0 148 42" xmlns="http://www.w3.org/2000/svg"><polygon points="18,3 36,21 31,21 31,38 5,38 5,21 0,21" fill="#5b7fa6"/><rect x="25" y="21" width="6" height="17" fill="#f0a500"/><rect x="10" y="27" width="8" height="11" fill="rgba(255,255,255,0.18)"/><line x1="42" y1="7" x2="42" y2="36" stroke="#dde5f0" stroke-width="1.5"/><text x="51" y="23" font-family="'DM Sans',sans-serif" font-size="16" font-weight="500" letter-spacing="2" fill="#0f2a4a">AFIX</text><text x="51" y="34" font-family="'DM Sans',sans-serif" font-size="8" font-weight="300" letter-spacing="2.5" fill="#8a9ab5">BUILT RIGHT</text></svg>`;
const FOOTER_SVG = `<svg width="120" height="36" viewBox="0 0 148 42" xmlns="http://www.w3.org/2000/svg"><polygon points="18,3 36,21 31,21 31,38 5,38 5,21 0,21" fill="#5b7fa6"/><rect x="25" y="21" width="6" height="17" fill="#f0a500"/><line x1="42" y1="7" x2="42" y2="36" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/><text x="51" y="23" font-family="'DM Sans',sans-serif" font-size="16" font-weight="500" letter-spacing="2" fill="white">AFIX</text><text x="51" y="34" font-family="'DM Sans',sans-serif" font-size="8" font-weight="300" letter-spacing="2.5" fill="rgba(255,255,255,0.4)">BUILT RIGHT</text></svg>`;
const WA_SVG_SM = `<svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
const WA_SVG_LG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

function generateBrandPage(b) {
  const pageUrl = `https://afix.sg/${b.slug}/`;
  const modelsHTML = b.models.map(m => `<div class="model-chip">${m.name}<div class="model-series">${m.sub}</div></div>`).join('');
  const faqHTML = b.faq.map(f => `<div class="faq-item"><div class="faq-q">${f.q}<span class="faq-toggle">+</span></div><div class="faq-a">${f.a}</div></div>`).join('');
  const faqSchema = b.faq.map(f => `{"@type":"Question","name":${JSON.stringify(f.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(f.a)}}}`).join(',');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${b.name} Aircon Servicing Singapore | From $25/unit | AFIX</title>
<meta name="description" content="Professional ${b.name} aircon servicing in Singapore from $25/unit. All ${b.name} models — standard cleaning, chemical wash & annual care plans. Same-week slots. WhatsApp for a quote.">
<meta name="keywords" content="${b.name} aircon servicing Singapore, ${b.name} aircon service Singapore, ${b.name} aircon chemical wash Singapore, ${b.name} aircon maintenance Singapore">
<meta name="author" content="AFIX Services Pte Ltd">
<meta name="robots" content="index, follow">
<link rel="preload" as="image" href="/images/${b.heroImg}.jpg">
<link rel="canonical" href="${pageUrl}">
<meta property="og:type" content="website">
<meta property="og:url" content="${pageUrl}">
<meta property="og:title" content="${b.name} Aircon Servicing Singapore | From $25/unit | AFIX">
<meta property="og:description" content="Professional ${b.name} aircon servicing in Singapore from $25/unit. All models serviced — standard cleaning, chemical wash & annual care plans.">
<meta property="og:image" content="https://afix.sg/images/${b.heroImg}.jpg">
<meta property="og:site_name" content="AFIX Services">
<meta property="og:locale" content="en_SG">
<meta name="geo.region" content="SG">
<meta name="geo.placename" content="Singapore">
<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[{"@type":["HomeAndConstructionBusiness","HVACBusiness"],"name":"AFIX Services Pte Ltd","url":"https://afix.sg","telephone":"+6594513022","address":{"@type":"PostalAddress","addressCountry":"SG","addressLocality":"Singapore"},"areaServed":{"@type":"Country","name":"Singapore"},"priceRange":"$$"},{"@type":"Service","name":"${b.name} Aircon Servicing Singapore","provider":{"@type":"LocalBusiness","name":"AFIX Services Pte Ltd","url":"https://afix.sg"},"areaServed":"Singapore","description":"Professional ${b.name} aircon servicing in Singapore including standard cleaning, chemical wash, and annual maintenance plans for all ${b.name} models.","offers":[{"@type":"Offer","name":"Standard ${b.name} Aircon Servicing","price":"25","priceCurrency":"SGD"},{"@type":"Offer","name":"${b.name} Aircon Chemical Wash","price":"50","priceCurrency":"SGD"}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://afix.sg/"},{"@type":"ListItem","position":2,"name":"Aircon Servicing","item":"https://afix.sg/aircon-servicing/"},{"@type":"ListItem","position":3,"name":"${b.name} Aircon Servicing","item":"${pageUrl}"}]},{"@type":"FAQPage","mainEntity":[${faqSchema}]}]}
</script>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><polygon points='18,2 36,18 30,18 30,34 6,34 6,18 0,18' fill='%235b7fa6'/><rect x='24' y='18' width='6' height='16' fill='%23f0a500'/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
<nav>
  <a class="nav-brand" href="/">${NAV_SVG}</a>
  <ul class="nav-links">
    <li><a href="/#services">Services</a></li>
    <li><a href="/aircon-servicing/" class="active">Aircon Servicing</a></li>
    <li><a href="/aircon-servicing/#pricing">Pricing</a></li>
    <li><a href="/#about">About</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <a class="nav-cta" href="https://wa.me/6594513022?text=${b.waBook}" target="_blank" rel="noopener">${WA_SVG_SM} WhatsApp Us</a>
</nav>
<div class="breadcrumb"><a href="/">Home</a><span>›</span><a href="/aircon-servicing/">Aircon Servicing</a><span>›</span><span>${b.name} Aircon Servicing</span></div>

<section class="page-hero">
  <div class="hero-grid"></div>
  <div class="hero-inner">
  <div class="page-hero-text">
    <div class="hero-badge"><span class="badge-dot"></span>${b.badge}</div>
    <h1 class="page-h1">${b.name} Aircon Servicing<br><em>Singapore</em></h1>
    <p class="page-sub">Professional servicing for all ${b.name} aircon models from <strong style="color:rgba(255,255,255,0.9);font-weight:500;">$25/unit</strong>. Standard cleaning, chemical wash, and annual care plans — done by our own technicians.</p>
    <div class="hero-actions">
      <a class="btn-primary" href="https://wa.me/6594513022?text=${b.waBook}" target="_blank" rel="noopener">Book via WhatsApp</a>
      <a class="btn-outline" href="#pricing">See Pricing</a>
    </div>
    <div class="hero-trust">
      <div><div class="trust-num">$25</div><div class="trust-lbl">From per unit</div></div>
      <div class="trust-div"></div>
      <div><div class="trust-num">All SG</div><div class="trust-lbl">No travel charge</div></div>
      <div class="trust-div"></div>
      <div><div class="trust-num">All models</div><div class="trust-lbl">${b.name} serviced</div></div>
    </div>
  </div>
  <div class="page-hero-img">
    <img src="/images/${b.heroImg}.jpg" alt="${b.heroAlt}" width="440" height="300" loading="eager" fetchpriority="high">
  </div>
  </div>
</section>

<div class="strip">
  <div class="strip-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Before &amp; after photos every job</div>
  <div class="strip-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Workmanship warranty</div>
  <div class="strip-item"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Our own technicians, no subcontractors</div>
</div>

<section class="cs">
  <div class="section-label">${b.name} Models We Service</div>
  <h2 class="section-heading">All ${b.name} aircon models covered</h2>
  <p class="section-sub">We service every ${b.name} model sold in Singapore — from older units to the latest inverter series.</p>
  <div class="models-grid fade-up">${modelsHTML}</div>
  <p style="margin-top:18px;font-size:14px;font-weight:300;color:var(--muted);">Not sure about your model? WhatsApp us the model number and we'll confirm coverage immediately.</p>
</section>

<section class="cs alt">
  <div class="section-label">About ${b.name} servicing</div>
  <h2 class="section-heading">Why ${b.name} owners book us</h2>
  <div class="two-col fade-up">
    <div class="body-copy">
      <p>${b.desc1}</p>
      <p>${b.desc2}</p>
      <p>We take before-and-after photos of every unit and send them to you. If we spot anything — low gas, cracked drain tray, unusual compressor readings — we flag it and quote separately before doing any additional work. <a href="/aircon-servicing/" style="color:var(--blue);font-weight:500;">See all aircon services →</a></p>
    </div>
    <ul class="check-list">
      <li>Shoe covers and floor protection always used</li>
      <li>Air filter wash and disinfection</li>
      <li>Evaporator coil cleaning</li>
      <li>Blower wheel cleaning</li>
      <li>Drainage tray and pipe clearing</li>
      <li>Drainage vacuum and blockage check</li>
      <li>Compressor pressure check</li>
      <li>Before and after photos sent to you</li>
      <li>No hidden charges — quoted upfront</li>
    </ul>
  </div>
</section>

<section class="cs" id="pricing">
  <div class="section-label">Pricing</div>
  <h2 class="section-heading">${b.name} aircon servicing prices</h2>
  <p class="section-sub">Same transparent pricing for all ${b.name} models. No surprise add-ons when we arrive.</p>
  <div class="price-grid fade-up">
    <div class="price-card">
      <div class="pc-head"><div class="pc-badge">Standard</div><div class="pc-title">Normal Servicing</div><div class="pc-sub">Routine ${b.name} aircon cleaning</div></div>
      <div class="pc-prices">
        <div class="pc-row"><span class="pc-label">1 unit</span><span class="pc-val">$50</span></div>
        <div class="pc-row"><span class="pc-label">2 units</span><span class="pc-val">$30 / unit</span></div>
        <div class="pc-row"><span class="pc-label">3 units onwards</span><span class="pc-val">$25 / unit</span></div>
      </div>
      <div class="pc-cta">
        <a href="https://wa.me/6594513022?text=${b.waStd}" target="_blank" rel="noopener" class="pc-btn navy">Book now ↗</a>
        <div class="pc-note">Includes before &amp; after photos, shoe covers, compressor check.</div>
      </div>
    </div>
    <div class="price-card featured">
      <div class="pc-head blue"><div class="pc-badge pop">Most popular</div><div class="pc-title">Chemical Wash</div><div class="pc-sub">Deep clean &amp; restore ${b.name} performance</div></div>
      <div class="pc-prices">
        <div class="pc-row"><span class="pc-label">1 unit</span><span class="pc-val">$60</span></div>
        <div class="pc-row"><span class="pc-label">2 units onwards</span><span class="pc-val">$50 / unit</span></div>
      </div>
      <div class="pc-cta">
        <a href="https://wa.me/6594513022?text=${b.waChem}" target="_blank" rel="noopener" class="pc-btn blue">Book now ↗</a>
        <div class="pc-note">Recommended if your ${b.name} smells, leaks, or isn't cooling well.</div>
      </div>
    </div>
  </div>
  <div style="margin-top:16px;padding:18px 22px;background:var(--off);border:1px solid var(--border);border-radius:10px;font-size:14px;font-weight:300;color:var(--muted);line-height:1.7;" class="fade-up">
    <strong style="font-weight:500;color:var(--navy);">Annual Care Plan:</strong> 4 services/year from $175 (1 unit) · $200 (2 units) · $250 (3 units). We remind you when each service is due. <a href="/aircon-servicing/#pricing" style="color:var(--blue);font-weight:500;">View full plan details →</a>
  </div>
</section>

<section class="cs alt">
  <div class="section-label">Common issues</div>
  <h2 class="section-heading">Common ${b.name} aircon problems we fix</h2>
  <div class="issues-grid fade-up">
    <div class="issue-card"><div class="issue-title">${b.issue1title}</div><p class="issue-body">${b.issue1body}</p></div>
    <div class="issue-card"><div class="issue-title">${b.issue2title}</div><p class="issue-body">${b.issue2body}</p></div>
    <div class="issue-card"><div class="issue-title">${b.issue3title}</div><p class="issue-body">${b.issue3body}</p></div>
    <div class="issue-card"><div class="issue-title">${b.issue4title}</div><p class="issue-body">${b.issue4body}</p></div>
  </div>
</section>

<section id="faq">
  <div class="faq-layout">
    <div class="faq-sticky">
      <div class="section-label">FAQ</div>
      <h2 class="section-heading">${b.name} servicing questions</h2>
      <p style="font-size:17px;font-weight:300;color:var(--muted);line-height:1.75;margin-bottom:28px;">Can't find your answer? Just ask us.</p>
      <a href="https://wa.me/6594513022?text=${b.waFaq}" target="_blank" rel="noopener" style="font-size:14px;font-weight:500;color:var(--blue);text-decoration:none;border-bottom:1px solid var(--blue);padding-bottom:2px;">Ask on WhatsApp →</a>
    </div>
    <div>${faqHTML}</div>
  </div>
</section>

<section class="cta-section">
  <h2>Book your ${b.name} service today</h2>
  <p>WhatsApp us your unit count and location — we'll confirm a same-week slot.</p>
  <div class="cta-actions">
    <a class="btn-wa" href="https://wa.me/6594513022?text=${b.waBook}" target="_blank" rel="noopener">${WA_SVG_LG}WhatsApp us · +65 9451 3022</a>
    <a href="/aircon-servicing/" style="color:rgba(255,255,255,0.8);border:1.5px solid rgba(255,255,255,0.28);padding:15px 32px;border-radius:8px;text-decoration:none;font-size:15px;">All aircon services</a>
  </div>
</section>

<footer>
  <div class="footer-top">
    <div>${FOOTER_SVG}<div class="footer-tagline">Licensed general contractor in Singapore.</div></div>
    <div class="footer-col"><div class="footer-col-title">Aircon Services</div><a href="/aircon-servicing/">Aircon Servicing</a><a href="/aircon-chemical-wash/">Chemical Wash</a><a href="/aircon-not-cold/">Aircon Not Cold</a><a href="/aircon-leaking-water/">Aircon Leaking Water</a><a href="/daikin-aircon-servicing/">Daikin Servicing</a><a href="/mitsubishi-electric-aircon-servicing/">Mitsubishi Electric</a><a href="/panasonic-aircon-servicing/">Panasonic</a><a href="/lg-aircon-servicing/">LG</a><a href="/hitachi-aircon-servicing/">Hitachi</a><a href="/samsung-aircon-servicing/">Samsung</a></div>
    <div class="footer-col"><div class="footer-col-title">Company</div><a href="/#services">All Services</a><a href="/#portfolio">Our Work</a><a href="/#about">About AFIX</a><a href="/#contact">Contact</a></div>
    <div class="footer-col"><div class="footer-col-title">Get in touch</div><a href="https://wa.me/6594513022" target="_blank" rel="noopener">WhatsApp: +65 9451 3022</a></div>
  </div>
  <div class="footer-bottom"><div class="footer-copy">© 2025 AFIX Services Pte Ltd</div><div class="footer-lic">Licensed General Contractor · Singapore</div></div>
</footer>
<script>
document.querySelectorAll('.faq-q').forEach(q=>{q.addEventListener('click',()=>{const i=q.parentElement,o=i.classList.contains('open');document.querySelectorAll('.faq-item').forEach(x=>x.classList.remove('open'));if(!o)i.classList.add('open')})});
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:0.12});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
</script>
</body>
</html>`;
}

const today = new Date().toISOString().split('T')[0];

for (const b of brands) {
  const dir = path.join(REPO, b.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateBrandPage(b), 'utf8');
  console.log(`✓ ${b.slug}/`);
}

// Update sitemap
let sitemap = fs.readFileSync(path.join(REPO, 'sitemap.xml'), 'utf8');
const newEntries = brands.map(b => `  <url>
    <loc>https://www.afix.sg/${b.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>https://www.afix.sg/images/${b.heroImg}.jpg</image:loc>
      <image:title>${b.heroAlt}</image:title>
    </image:image>
  </url>`).join('\n');

sitemap = sitemap.replace('</urlset>', `${newEntries}\n</urlset>`);
fs.writeFileSync(path.join(REPO, 'sitemap.xml'), sitemap, 'utf8');
console.log('✓ sitemap.xml updated');
console.log(`\nDone — ${brands.length} brand pages created.`);
