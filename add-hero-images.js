const fs = require('fs');
const https = require('https');
const path = require('path');

const REPO = path.resolve(__dirname);
const IMAGES_DIR = path.join(REPO, 'images');

const pages = [
  {
    folder: 'aircon-servicing',
    pexelsUrl: 'https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-aircon-servicing',
    innerClass: 'page-hero-inner',
    alt: 'AFIX technician servicing a wall-mounted air conditioning unit in Singapore'
  },
  {
    folder: 'aircon-chemical-wash',
    pexelsUrl: 'https://images.pexels.com/photos/31694545/pexels-photo-31694545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-aircon-chemical-wash',
    innerClass: 'page-hero-inner',
    alt: 'Aircon chemical wash — technician deep-cleaning an indoor unit in Singapore'
  },
  {
    folder: 'mitsubishi-electric-aircon-servicing',
    pexelsUrl: 'https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-mitsubishi',
    innerClass: 'hero-inner',
    alt: 'Mitsubishi Electric aircon serviced by a certified AFIX technician in Singapore'
  },
  {
    folder: 'daikin-aircon-servicing',
    pexelsUrl: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161/free-photo-of-technician-inspecting-outdoor-hvac-unit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-daikin',
    innerClass: 'hero-inner',
    alt: 'Daikin aircon outdoor unit inspection by AFIX technician in Singapore'
  },
  {
    folder: 'aircon-servicing-tampines',
    pexelsUrl: 'https://images.pexels.com/photos/35228664/pexels-photo-35228664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-tampines',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Tampines HDB flats by AFIX'
  },
  {
    folder: 'aircon-servicing-jurong-west',
    pexelsUrl: 'https://images.pexels.com/photos/13124535/pexels-photo-13124535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-jurong-west',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Jurong West Singapore by AFIX'
  },
  {
    folder: 'aircon-servicing-woodlands',
    pexelsUrl: 'https://images.pexels.com/photos/32674391/pexels-photo-32674391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-woodlands',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Woodlands HDB flats by AFIX Singapore'
  },
  {
    folder: 'aircon-servicing-sengkang',
    pexelsUrl: 'https://images.pexels.com/photos/13948383/pexels-photo-13948383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-sengkang',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Sengkang HDB estate by AFIX Singapore'
  },
  {
    folder: 'aircon-servicing-punggol',
    pexelsUrl: 'https://images.pexels.com/photos/33795692/pexels-photo-33795692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-punggol',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Punggol HDB by AFIX Singapore'
  },
  {
    folder: 'aircon-servicing-hougang',
    pexelsUrl: 'https://images.pexels.com/photos/6588597/pexels-photo-6588597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-hougang',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Hougang HDB by AFIX Singapore'
  },
  {
    folder: 'aircon-servicing-yishun',
    pexelsUrl: 'https://images.pexels.com/photos/13931103/pexels-photo-13931103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-yishun',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Yishun HDB flats by AFIX Singapore'
  },
  {
    folder: 'aircon-servicing-bedok',
    pexelsUrl: 'https://images.pexels.com/photos/35228664/pexels-photo-35228664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-bedok',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Bedok HDB and private property by AFIX Singapore'
  },
  {
    folder: 'aircon-servicing-ang-mo-kio',
    pexelsUrl: 'https://images.pexels.com/photos/13124535/pexels-photo-13124535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-ang-mo-kio',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Ang Mo Kio HDB estates by AFIX Singapore'
  },
  {
    folder: 'aircon-servicing-choa-chu-kang',
    pexelsUrl: 'https://images.pexels.com/photos/32674391/pexels-photo-32674391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-choa-chu-kang',
    innerClass: 'hero-inner',
    alt: 'Aircon servicing in Choa Chu Kang HDB by AFIX Singapore'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    function request(url, depth = 0) {
      if (depth > 5) return reject(new Error('Too many redirects'));
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' } }, (res) => {
        if ([301, 302, 307, 308].includes(res.statusCode)) {
          res.resume();
          const loc = res.headers.location;
          return request(loc.startsWith('http') ? loc : `https://images.pexels.com${loc}`, depth + 1);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
        file.on('error', reject);
      }).on('error', reject);
    }
    request(url);
  });
}

async function downloadImages() {
  console.log('Downloading hero images...');
  const urlToFile = new Map();

  for (const page of pages) {
    const dest = path.join(IMAGES_DIR, page.imageName + '.jpg');

    if (fs.existsSync(dest)) {
      console.log(`  skip ${page.imageName}.jpg (exists)`);
      urlToFile.set(page.pexelsUrl, dest);
      continue;
    }

    if (urlToFile.has(page.pexelsUrl)) {
      fs.copyFileSync(urlToFile.get(page.pexelsUrl), dest);
      console.log(`  copy ${page.imageName}.jpg`);
      continue;
    }

    try {
      process.stdout.write(`  downloading ${page.imageName}.jpg... `);
      await download(page.pexelsUrl, dest);
      urlToFile.set(page.pexelsUrl, dest);
      const size = (fs.statSync(dest).size / 1024).toFixed(0);
      console.log(`✓ (${size}KB)`);
    } catch (err) {
      console.log(`✗ ${err.message}`);
    }
  }
}

function updatePage(page) {
  const filePath = path.join(REPO, page.folder, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.log(`  skip ${page.folder} (not found)`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  if (html.includes('page-hero-text')) {
    console.log(`  skip ${page.folder} (already updated)`);
    return;
  }

  // 1. Update CSS: hero inner div → flex split layout
  const cssOld = `.${page.innerClass}{position:relative;z-index:1;max-width:760px}`;
  const cssNew =
    `.${page.innerClass}{position:relative;z-index:1;max-width:1200px;display:flex;align-items:center;gap:64px}` +
    `.page-hero-text{flex:1;min-width:0}` +
    `.page-hero-img{flex-shrink:0;width:440px;border-radius:12px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,0.35)}` +
    `.page-hero-img img{width:100%;height:300px;object-fit:cover;display:block}` +
    `@media(max-width:900px){.page-hero-img{display:none}}`;
  if (!html.includes(cssOld)) {
    console.log(`  warn: CSS pattern not found in ${page.folder}`);
  }
  html = html.replace(cssOld, cssNew);

  // 2. Open page-hero-text wrapper after the inner div opening tag
  const innerOpen = `<div class="${page.innerClass}">`;
  html = html.replace(innerOpen, `${innerOpen}\n  <div class="page-hero-text">`);

  // 3. Close page-hero-text, insert image div, then close the inner wrapper
  //    Pattern in all pages: "    </div>\n  </div>\n</section>"
  //    (hero-trust close)   (inner close)  (section)
  const imgSrc = `/images/${page.imageName}.jpg`;
  const imgDiv =
    `  <div class="page-hero-img">\n` +
    `    <img src="${imgSrc}" alt="${page.alt}" width="440" height="300" loading="eager" fetchpriority="high">\n` +
    `  </div>`;

  const closePattern = '    </div>\n  </div>\n</section>';
  const closeReplacement =
    `    </div>\n` +   // hero-trust close
    `  </div>\n` +     // page-hero-text close
    `${imgDiv}\n` +    // image div
    `  </div>\n` +     // inner wrapper close
    `</section>`;

  if (!html.includes(closePattern)) {
    console.log(`  warn: close pattern not found in ${page.folder}`);
  }
  html = html.replace(closePattern, closeReplacement);

  // 4. Update og:image to page-specific image
  html = html
    .replace(
      '<meta property="og:image" content="https://afix.sg/og-image.png">',
      `<meta property="og:image" content="https://afix.sg/images/${page.imageName}.jpg">`
    )
    .replace(
      '<meta property="og:image" content="https://www.afix.sg/og-image.png">',
      `<meta property="og:image" content="https://afix.sg/images/${page.imageName}.jpg">`
    );

  // 5. Add <link rel="preload"> for the LCP hero image
  html = html.replace(
    '<link rel="canonical"',
    `<link rel="preload" as="image" href="/images/${page.imageName}.jpg">\n<link rel="canonical"`
  );

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`  ✓ ${page.folder}`);
}

function updateSitemap() {
  const sitemapPath = path.join(REPO, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');

  sitemap = sitemap.replace(
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
  );

  for (const page of pages) {
    const imageUrl = `https://afix.sg/images/${page.imageName}.jpg`;
    const imageTag =
      `\n    <image:image>\n` +
      `      <image:loc>${imageUrl}</image:loc>\n` +
      `      <image:title>${page.alt}</image:title>\n` +
      `    </image:image>`;

    sitemap = sitemap.replace(
      new RegExp(`(<loc>https://afix\\.sg/${page.folder}/</loc>[\\s\\S]*?)\\s*</url>`),
      `$1${imageTag}\n  </url>`
    );
  }

  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('  ✓ sitemap.xml');
}

async function main() {
  console.log('=== Step 1: Download images ===');
  await downloadImages();

  console.log('\n=== Step 2: Update HTML pages ===');
  for (const page of pages) updatePage(page);

  console.log('\n=== Step 3: Update sitemap ===');
  updateSitemap();

  console.log('\nAll done!');
}

main().catch(console.error);
