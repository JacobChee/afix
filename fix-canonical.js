const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory() && !f.startsWith('.') && f !== 'node_modules') {
      files.push(...walk(full));
    } else if (f.endsWith('.html') || f === 'sitemap.xml') {
      files.push(full);
    }
  }
  return files;
}

const files = walk('.');
let changed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content;

  if (file.endsWith('sitemap.xml')) {
    // Sitemap: simple global replace
    updated = content.replace(/https:\/\/afix\.sg\//g, 'https://www.afix.sg/');
    if (updated !== content) {
      fs.writeFileSync(file, updated);
      console.log('SITEMAP OK:', file);
      changed++;
    }
    continue;
  }

  // Fix broken canonical tag: <link https://www.afix.sg/..."> → <link rel="canonical" href="https://www.afix.sg/...">
  // (from the botched previous run)
  updated = updated.replace(
    /<link (https:\/\/www\.afix\.sg\/[^"]*)">/g,
    '<link rel="canonical" href="$1">'
  );

  // Fix broken og:url tag: <meta https://www.afix.sg/..."> → <meta property="og:url" content="https://www.afix.sg/...">
  updated = updated.replace(
    /<meta (https:\/\/www\.afix\.sg\/[^"]*)">/g,
    '<meta property="og:url" content="$1">'
  );

  // Also catch any remaining non-www canonical/og:url (not previously touched)
  // Canonical: <link rel="canonical" href="https://afix.sg/...">
  updated = updated.replace(
    /(<link rel="canonical" href=")https:\/\/afix\.sg\//g,
    '$1https://www.afix.sg/'
  );
  updated = updated.replace(
    /(<link href=")https:\/\/afix\.sg\/([^"]*"[^>]*rel="canonical")/g,
    '$1https://www.afix.sg/$2'
  );

  // og:url: <meta property="og:url" content="https://afix.sg/...">
  updated = updated.replace(
    /(<meta property="og:url" content=")https:\/\/afix\.sg\//g,
    '$1https://www.afix.sg/'
  );
  updated = updated.replace(
    /(<meta content=")https:\/\/afix\.sg\/([^"]*"[^>]*property="og:url")/g,
    '$1https://www.afix.sg/$2'
  );

  if (updated !== content) {
    fs.writeFileSync(file, updated);
    console.log('Fixed:', file);
    changed++;
  }
}

console.log('\nDone. Files updated:', changed);
