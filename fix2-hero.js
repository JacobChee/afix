/**
 * fix2-hero.js
 * — Downloads location-specific Singapore photos + indoor AC technician photos
 * — Applies grid layout that mirrors the homepage hero (1fr 1fr, image position:absolute inset:0)
 */
const fs = require('fs');
const https = require('https');
const path = require('path');

const REPO = path.resolve(__dirname);
const IMAGES_DIR = path.join(REPO, 'images');

const pages = [
  // ── Service pages: indoor AC technician, blue uniform, safety gloves ──────
  {
    folder: 'aircon-servicing',
    pexelsId: '32588555',
    imageName: 'hero-aircon-servicing',
    innerClass: 'page-hero-inner',
    alt: 'Professional AFIX technician performing air conditioning maintenance in Singapore'
  },
  {
    folder: 'aircon-chemical-wash',
    pexelsId: '32588555',
    imageName: 'hero-aircon-chemical-wash',
    innerClass: 'page-hero-inner',
    alt: 'AFIX technician performing aircon chemical wash service in Singapore'
  },
  {
    folder: 'mitsubishi-electric-aircon-servicing',
    pexelsId: '32588555',
    imageName: 'hero-mitsubishi',
    innerClass: 'hero-inner',
    alt: 'Certified technician servicing a Mitsubishi Electric aircon in Singapore'
  },
  {
    folder: 'daikin-aircon-servicing',
    pexelsId: '32588555',
    imageName: 'hero-daikin',
    innerClass: 'hero-inner',
    alt: 'Certified technician servicing a Daikin air conditioner in Singapore'
  },

  // ── Location pages: Singapore area-specific landmarks ────────────────────
  {
    folder: 'aircon-servicing-tampines',
    pexelsId: '11122797',           // Tampines Sports Hall aerial view
    imageName: 'hero-tampines',
    innerClass: 'hero-inner',
    alt: 'Tampines Sports Hall aerial view, Tampines Singapore'
  },
  {
    folder: 'aircon-servicing-jurong-west',
    pexelsId: '32554545',           // Chinese Garden pagodas, Jurong West
    imageName: 'hero-jurong-west',
    innerClass: 'hero-inner',
    alt: 'Chinese Garden pagodas reflected in water, Jurong West Singapore'
  },
  {
    folder: 'aircon-servicing-woodlands',
    pexelsId: '32546827',           // Jungle signpost pointing to Woodlands
    imageName: 'hero-woodlands',
    innerClass: 'hero-inner',
    alt: 'Jungle trail signpost to Woodlands, Singapore'
  },
  {
    folder: 'aircon-servicing-sengkang',
    pexelsId: '18611887',           // From Sengkang + Punggol waterway searches
    imageName: 'hero-sengkang',
    innerClass: 'hero-inner',
    alt: 'Waterway park near Sengkang Singapore'
  },
  {
    folder: 'aircon-servicing-punggol',
    pexelsId: '36676991',           // Punggol Waterway — confirmed specific
    imageName: 'hero-punggol',
    innerClass: 'hero-inner',
    alt: 'Punggol Waterway Park with skyline, Punggol Singapore'
  },
  {
    folder: 'aircon-servicing-hougang',
    pexelsId: '7371705',            // Singapore park with bougainvillea path
    imageName: 'hero-hougang',
    innerClass: 'hero-inner',
    alt: 'Park pathway in Hougang Singapore'
  },
  {
    folder: 'aircon-servicing-yishun',
    pexelsId: '31542755',           // Chong Pang Garden entrance, Yishun — confirmed
    imageName: 'hero-yishun',
    innerClass: 'hero-inner',
    alt: 'Chong Pang Garden entrance at dusk, Yishun Singapore'
  },
  {
    folder: 'aircon-servicing-bedok',
    pexelsId: '33018522',           // Upper Seletar Reservoir at sunset
    imageName: 'hero-bedok',
    innerClass: 'hero-inner',
    alt: 'Reservoir at sunset in east Singapore near Bedok'
  },
  {
    folder: 'aircon-servicing-ang-mo-kio',
    pexelsId: '25962088',           // Bishan-AMK Park footbridge — confirmed specific
    imageName: 'hero-ang-mo-kio',
    innerClass: 'hero-inner',
    alt: 'Bishan–Ang Mo Kio Park footbridge over tranquil lake, Singapore'
  },
  {
    folder: 'aircon-servicing-choa-chu-kang',
    pexelsId: '16481398',           // Singapore park path (appeared in CCK searches)
    imageName: 'hero-choa-chu-kang',
    innerClass: 'hero-inner',
    alt: 'Lush green park in Choa Chu Kang Singapore'
  }
];

// ── Download helper (follows redirects) ─────────────────────────────────────
function download(id, dest) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=840`;
  return new Promise((resolve, reject) => {
    function req(u, depth = 0) {
      if (depth > 5) return reject(new Error('Too many redirects'));
      https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        if ([301, 302, 307, 308].includes(res.statusCode)) {
          res.resume();
          const loc = res.headers.location;
          return req(loc.startsWith('http') ? loc : `https://images.pexels.com${loc}`, depth + 1);
        }
        if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
        const f = fs.createWriteStream(dest);
        res.pipe(f);
        f.on('finish', () => f.close(resolve));
        f.on('error', reject);
      }).on('error', reject);
    }
    req(url);
  });
}

async function downloadImages() {
  console.log('Downloading images...');
  const seen = new Map(); // pexelsId → dest path (for copy optimisation)
  for (const p of pages) {
    const dest = path.join(IMAGES_DIR, p.imageName + '.jpg');
    if (seen.has(p.pexelsId)) {
      fs.copyFileSync(seen.get(p.pexelsId), dest);
      console.log(`  copy  ${p.imageName}.jpg`);
      continue;
    }
    try {
      process.stdout.write(`  fetch ${p.imageName}.jpg (pexels ${p.pexelsId})... `);
      await download(p.pexelsId, dest);
      seen.set(p.pexelsId, dest);
      console.log(`✓ ${(fs.statSync(dest).size / 1024).toFixed(0)}KB`);
    } catch (e) {
      console.log(`✗ ${e.message}`);
    }
  }
}

// ── CSS / HTML patching ──────────────────────────────────────────────────────
function updatePage(p) {
  const file = path.join(REPO, p.folder, 'index.html');
  if (!fs.existsSync(file)) { console.log(`  skip  ${p.folder}`); return; }
  let html = fs.readFileSync(file, 'utf8');

  // 1. Remove padding from .page-hero section — image will handle its own height
  html = html.replace(
    'background:var(--navy);padding:72px 6vw 64px;position:relative;overflow:hidden',
    'background:var(--navy);position:relative;overflow:hidden'
  );

  // 2. Inner container: CSS grid matching homepage (1fr 1fr, stretch)
  const ic = p.innerClass;
  html = html.replace(
    `.${ic}{position:relative;z-index:1;max-width:1200px;display:flex;align-items:center;gap:64px}`,
    `.${ic}{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;align-items:stretch;min-height:480px}`
  );

  // 3. Text column: restore padding (was on section before)
  html = html.replace(
    '.page-hero-text{flex:1;min-width:0}',
    '.page-hero-text{padding:72px 48px 64px 6vw;display:flex;flex-direction:column;justify-content:center}'
  );

  // 4. Image column: relative container (child img will be absolute inset:0)
  html = html.replace(
    '.page-hero-img{flex-shrink:0;width:440px;border-radius:12px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,0.35)}',
    '.page-hero-img{position:relative;overflow:hidden}'
  );

  // 5. Image: position:absolute inset:0 — fills right column edge-to-edge
  html = html.replace(
    '.page-hero-img img{width:100%;height:360px;object-fit:cover;object-position:center;display:block}',
    '.page-hero-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;display:block}'
  );

  // 6. Responsive: collapse to 1 col on mobile
  html = html.replace(
    '@media(max-width:900px){.page-hero-img{display:none}}',
    `@media(max-width:900px){.page-hero-img{display:none}.${ic}{grid-template-columns:1fr;min-height:0}.page-hero-text{padding:56px 6vw 48px}}`
  );

  // 7. Swap img src + alt
  html = html.replace(
    /(<img\s+src="\/images\/)[^"]+("\s+alt=")[^"]*(")/,
    `$1${p.imageName}.jpg$2${p.alt}$3`
  );

  // 8. og:image
  html = html.replace(
    /<meta property="og:image" content="https:\/\/afix\.sg\/images\/[^"]+\.jpg">/,
    `<meta property="og:image" content="https://afix.sg/images/${p.imageName}.jpg">`
  );

  // 9. preload hint
  html = html.replace(
    /<link rel="preload" as="image" href="\/images\/[^"]+">/,
    `<link rel="preload" as="image" href="/images/${p.imageName}.jpg">`
  );

  fs.writeFileSync(file, html, 'utf8');
  console.log(`  ✓     ${p.folder}`);
}

async function main() {
  console.log('=== Step 1: Download images ===');
  await downloadImages();

  console.log('\n=== Step 2: Patch HTML ===');
  for (const p of pages) updatePage(p);

  console.log('\nDone.');
}

main().catch(console.error);
