const fs = require('fs');
const https = require('https');
const path = require('path');

const REPO = path.resolve(__dirname);
const IMAGES_DIR = path.join(REPO, 'images');

// New image assignments — all safe, professional, relevant
// Service pages: indoor AC units in modern rooms
// Location pages: Singapore HDB/apartment building exteriors
const pages = [
  {
    folder: 'aircon-servicing',
    pexelsUrl: 'https://images.pexels.com/photos/6588599/pexels-photo-6588599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-aircon-servicing',
    alt: 'Clean wall-mounted air conditioning unit in a modern Singapore living room'
  },
  {
    folder: 'aircon-chemical-wash',
    pexelsUrl: 'https://images.pexels.com/photos/16592625/pexels-photo-16592625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-aircon-chemical-wash',
    alt: 'Wall-mounted air conditioner unit in a Singapore home — ready for chemical wash'
  },
  {
    folder: 'mitsubishi-electric-aircon-servicing',
    pexelsUrl: 'https://images.pexels.com/photos/7195879/pexels-photo-7195879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-mitsubishi',
    alt: 'Modern bedroom with wall-mounted air conditioner in Singapore'
  },
  {
    folder: 'daikin-aircon-servicing',
    pexelsUrl: 'https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-daikin',
    alt: 'Modern Singapore apartment interior with wall-mounted air conditioning unit'
  },
  // Location pages — Singapore residential buildings
  {
    folder: 'aircon-servicing-tampines',
    pexelsUrl: 'https://images.pexels.com/photos/8549288/pexels-photo-8549288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-tampines',
    alt: 'Residential apartment buildings in Tampines Singapore'
  },
  {
    folder: 'aircon-servicing-jurong-west',
    pexelsUrl: 'https://images.pexels.com/photos/5613310/pexels-photo-5613310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-jurong-west',
    alt: 'Modern residential high-rise buildings in Jurong West Singapore'
  },
  {
    folder: 'aircon-servicing-woodlands',
    pexelsUrl: 'https://images.pexels.com/photos/33299109/pexels-photo-33299109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-woodlands',
    alt: 'Residential building in Woodlands Singapore'
  },
  {
    folder: 'aircon-servicing-sengkang',
    pexelsUrl: 'https://images.pexels.com/photos/12578348/pexels-photo-12578348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-sengkang',
    alt: 'Colourful HDB residential block in Sengkang Singapore'
  },
  {
    folder: 'aircon-servicing-punggol',
    pexelsUrl: 'https://images.pexels.com/photos/31790467/pexels-photo-31790467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-punggol',
    alt: 'Modern colourful residential high-rise in Punggol Singapore'
  },
  {
    folder: 'aircon-servicing-hougang',
    pexelsUrl: 'https://images.pexels.com/photos/9426231/pexels-photo-9426231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-hougang',
    alt: 'Contemporary residential building facade in Hougang Singapore'
  },
  {
    folder: 'aircon-servicing-yishun',
    pexelsUrl: 'https://images.pexels.com/photos/8549288/pexels-photo-8549288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-yishun',
    alt: 'Singapore apartment building in Yishun'
  },
  {
    folder: 'aircon-servicing-bedok',
    pexelsUrl: 'https://images.pexels.com/photos/5613310/pexels-photo-5613310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-bedok',
    alt: 'Singapore residential building in Bedok'
  },
  {
    folder: 'aircon-servicing-ang-mo-kio',
    pexelsUrl: 'https://images.pexels.com/photos/12578348/pexels-photo-12578348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-ang-mo-kio',
    alt: 'HDB residential block in Ang Mo Kio Singapore'
  },
  {
    folder: 'aircon-servicing-choa-chu-kang',
    pexelsUrl: 'https://images.pexels.com/photos/9426231/pexels-photo-9426231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    imageName: 'hero-choa-chu-kang',
    alt: 'Modern residential building in Choa Chu Kang Singapore'
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
  console.log('Downloading replacement images...');
  const urlToFile = new Map();

  for (const page of pages) {
    const dest = path.join(IMAGES_DIR, page.imageName + '.jpg');

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

// Fix CSS sizing and update alt text in each page
function updatePage(page) {
  const filePath = path.join(REPO, page.folder, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.log(`  skip ${page.folder} (not found)`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Fix image height: 300px → 360px and ensure object-position is centered
  html = html.replace(
    '.page-hero-img img{width:100%;height:300px;object-fit:cover;display:block}',
    '.page-hero-img img{width:100%;height:360px;object-fit:cover;object-position:center;display:block}'
  );

  // Update alt text on the img tag
  html = html.replace(
    /(<img src="\/images\/[^"]+"\s+alt=")[^"]*(")/,
    `$1${page.alt}$2`
  );

  // Update og:image (keep consistent)
  html = html.replace(
    /<meta property="og:image" content="https:\/\/afix\.sg\/images\/[^"]+\.jpg">/,
    `<meta property="og:image" content="https://afix.sg/images/${page.imageName}.jpg">`
  );

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`  ✓ ${page.folder}`);
}

async function main() {
  console.log('=== Step 1: Download replacement images ===');
  await downloadImages();

  console.log('\n=== Step 2: Update HTML (sizing + alt text) ===');
  for (const page of pages) updatePage(page);

  console.log('\nDone! Commit and push when ready.');
}

main().catch(console.error);
