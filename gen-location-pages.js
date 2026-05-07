const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname);

const areas = [
  {
    slug: 'kallang-whampoa',
    name: 'Kallang / Whampoa',
    badge: 'Kallang · Whampoa · Central Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Boon Keng, Kolam Ayer, Towner, Kallang Basin, Whampoa Drive, and Geylang Bahru',
    geoRegion: 'SG-01',
    context1: 'Kallang / Whampoa is one of Singapore\'s most centrally located HDB areas, covering Boon Keng, Kolam Ayer, Towner Road, Whampoa Drive, and the Kallang Basin precincts. It has a dense mix of older HDB blocks, newer BTOs, and private developments. We cover the entire area with no travel surcharge.',
    context2: 'Older Kallang / Whampoa flats — particularly in Boon Keng and Kolam Ayer — often have aircon units that haven\'t been serviced in years. Mould buildup on the coil and blocked drainage are the most common issues we see here. A chemical wash is the right starting point for any unit that smells, isn\'t cold, or has visible water dripping from the indoor unit.',
    faq1q: 'Do you service aircon in Kallang and Whampoa?',
    faq1a: 'Yes — Kallang / Whampoa is a regular service area. We cover Boon Keng, Kolam Ayer, Towner, Whampoa Drive, Kallang Basin, and Geylang Bahru. No travel surcharge applies.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Kallang / Whampoa.',
    faq3q: 'Do you cover Boon Keng and Kolam Ayer HDB blocks?',
    faq3a: 'Yes — including all HDB blocks in Boon Keng, Kolam Ayer, and the surrounding streets. We also service condos near the Kallang Basin and private housing in the area.',
    faq4a: 'We can typically confirm a same-week slot for Kallang / Whampoa. WhatsApp us your block and unit count and we\'ll reply within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Kallang%20Whampoa.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block in Kallang Whampoa Singapore',
  },
  {
    slug: 'clementi',
    name: 'Clementi',
    badge: 'Clementi · West Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Clementi Central, West Coast, Clementi Avenue 1–6, and Commonwealth',
    geoRegion: 'SG-03',
    context1: 'Clementi is a well-established HDB town in the west, home to a mix of older walk-up blocks, modern BTOs, private condos near West Coast Park, and student housing near NUS. We cover all Clementi precincts — no travel surcharge applies.',
    context2: 'Older Clementi HDB units often have ageing split-system aircons that haven\'t been serviced in years. Humidity and dust from the nearby West Coast area also accelerate coil buildup. If your aircon smells, isn\'t cold, or has been more than 12 months since its last service, a chemical wash is the right starting point.',
    faq1q: 'Do you service aircon in Clementi?',
    faq1a: 'Yes — Clementi is a regular service area for us. We cover all precincts including Clementi Central, West Coast, and Clementi Avenues. No travel surcharge applies.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Clementi.',
    faq3q: 'Do you service condos near West Coast Park?',
    faq3a: 'Yes — we service HDB, condo, and private properties throughout Clementi and the West Coast area. All property types, all major brands.',
    faq4a: 'We can typically confirm a same-week slot for Clementi. WhatsApp us your unit count and preferred timing and we\'ll get back within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Clementi.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Clementi Singapore',
  },
  {
    slug: 'toa-payoh',
    name: 'Toa Payoh',
    badge: 'Toa Payoh · Central Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Toa Payoh Central, Braddell, Lorong 1–8, Kim Keat, and Caldecott',
    geoRegion: 'SG-01',
    context1: 'Toa Payoh is one of Singapore\'s oldest HDB towns, with some of the island\'s most established residential blocks and a strong sense of community. We cover all precincts — Toa Payoh Central, Braddell, Lorong 1–8, and beyond. No travel surcharge.',
    context2: 'Many Toa Payoh units have aircons that are 10–20 years old. Older refrigerant types, worn fan bearings, and years of compacted dust on the evaporator coil are common issues here. We service all brands and older systems, and we\'ll advise you honestly on whether a repair or replacement makes more sense.',
    faq1q: 'Do you service aircon in Toa Payoh?',
    faq1a: 'Yes — Toa Payoh is a regular service area. We cover Toa Payoh Central, Braddell, Lorong 1–8, Kim Keat, and the Caldecott area. No travel surcharge.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Toa Payoh.',
    faq3q: 'Can you service older aircon units in Toa Payoh?',
    faq3a: 'Yes — including older non-inverter models and systems using older refrigerants. If it\'s repairable, we\'ll fix it; if it\'s more cost-effective to replace, we\'ll tell you honestly.',
    faq4a: 'We can typically confirm a same-week slot for Toa Payoh. WhatsApp us your unit count and preferred time and we\'ll confirm availability within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Toa%20Payoh.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Toa Payoh Singapore',
  },
  {
    slug: 'queenstown',
    name: 'Queenstown',
    badge: 'Queenstown · Central Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Queenstown Central, Commonwealth, Buona Vista, Dawson, Margaret Drive, and Mei Chin',
    geoRegion: 'SG-03',
    context1: 'Queenstown is Singapore\'s first HDB satellite town and remains one of the most sought-after central areas. It includes a mix of heritage blocks, newer Dawson BTO flats, and private condos near Holland Road and Buona Vista. We cover the entire Queenstown area with no travel surcharge.',
    context2: 'Both old and new Queenstown units benefit from regular servicing. Newer BTO aircons should be serviced from the first year to maintain performance and warranty; older units often have years of buildup that only a chemical wash can clear properly.',
    faq1q: 'Do you service aircon in Queenstown?',
    faq1a: 'Yes — we cover Queenstown Central, Dawson, Commonwealth, Buona Vista, Margaret Drive, and the surrounding streets. No travel surcharge.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Queenstown.',
    faq3q: 'Do you service the newer Dawson BTO flats in Queenstown?',
    faq3a: 'Yes — including Dawson, SkyOasis, and other newer BTOs in Queenstown. We also service the older heritage blocks and private condos in the area.',
    faq4a: 'We can typically confirm a same-week slot for Queenstown. WhatsApp us your unit count and preferred timing and we\'ll reply within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Queenstown.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Queenstown Singapore',
  },
  {
    slug: 'bishan',
    name: 'Bishan',
    badge: 'Bishan · Central Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Bishan Central, Marymount, Sin Ming, and Thomson',
    geoRegion: 'SG-01',
    context1: 'Bishan is a well-planned central town with a mix of HDB flats, executive condominiums, and private developments near Bishan Park. We cover all Bishan precincts — Bishan Central, Marymount, Sin Ming, and the Thomson corridor. No travel surcharge applies.',
    context2: 'Bishan residents typically have Daikin, Mitsubishi Electric, or Panasonic systems. The town\'s relatively newer HDB stock means inverter aircons are common — which require the same routine servicing to maintain efficiency and extend compressor life.',
    faq1q: 'Do you service aircon in Bishan?',
    faq1a: 'Yes — we cover all of Bishan including Bishan Central, Marymount, Sin Ming, and the Thomson area. No travel surcharge applies.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Bishan.',
    faq3q: 'Do you service the condos near Bishan Park?',
    faq3a: 'Yes — including private condos along the Bishan Park and Thomson Road corridor, as well as all HDB estates in Bishan. All major brands serviced.',
    faq4a: 'Same-week slots are usually available for Bishan. WhatsApp us your unit count and we\'ll confirm a time within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Bishan.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Bishan Singapore',
  },
  {
    slug: 'pasir-ris',
    name: 'Pasir Ris',
    badge: 'Pasir Ris · East Singapore · HDB · Condo · EC · No travel surcharge',
    precincts: 'Pasir Ris Central, Elias, Loyang, Pasir Ris Drive 1–12, and Downtown East',
    geoRegion: 'SG-05',
    context1: 'Pasir Ris is a quiet, family-friendly HDB town on the east coast, known for Pasir Ris Park and White Sands mall. It has a mix of older HDB blocks, ECs, and landed housing. We cover all Pasir Ris precincts — Elias, Loyang, Pasir Ris Drive — with no travel surcharge.',
    context2: 'The coastal location means salt-laden sea air accelerates corrosion on condenser fins and causes faster coil fouling than inland estates. We recommend chemical washes every 6–9 months for Pasir Ris units near the seafront, and annual servicing at minimum for all other units.',
    faq1q: 'Do you service aircon in Pasir Ris?',
    faq1a: 'Yes — Pasir Ris is a regular service area. We cover Elias, Loyang, Pasir Ris Drive 1–12, and the Downtown East area. No travel surcharge.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Pasir Ris.',
    faq3q: 'Should I service my aircon more often because I\'m near the Pasir Ris seafront?',
    faq3a: 'Yes — salt air accelerates corrosion on condenser fins and coil fouling. We recommend a chemical wash every 6–9 months for units within 500m of the coast, and annual servicing as a minimum for other Pasir Ris units.',
    faq4a: 'Same-week slots are usually available for Pasir Ris. WhatsApp us your unit count and preferred time and we\'ll confirm within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Pasir%20Ris.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Pasir Ris Singapore',
  },
  {
    slug: 'bukit-batok',
    name: 'Bukit Batok',
    badge: 'Bukit Batok · West Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Bukit Batok Central, Bukit Gombak, Hillview, and Bukit Timah',
    geoRegion: 'SG-03',
    context1: 'Bukit Batok is a hilly, green HDB town in the west with a mix of older HDB estates, newer BTOs, and private condos near Hillview and Bukit Timah. We cover all Bukit Batok precincts — Bukit Batok Central, Bukit Gombak, Hillview — with no travel surcharge.',
    context2: 'The tree-lined streets and parks in Bukit Batok can mean aircons draw in more organic debris — tree pollen, mould spores, and fine particles — than in more open estates. This makes regular filter cleaning and annual chemical washes particularly important.',
    faq1q: 'Do you service aircon in Bukit Batok?',
    faq1a: 'Yes — we cover Bukit Batok Central, Bukit Gombak, Hillview, and the surrounding streets. No travel surcharge applies.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Bukit Batok.',
    faq3q: 'Do you service condos in the Hillview area?',
    faq3a: 'Yes — including Hillview, Bukit Timah, and the surrounding private estates. We service HDB, condo, and landed properties throughout the Bukit Batok area.',
    faq4a: 'Same-week slots are available for Bukit Batok. WhatsApp us your unit count and preferred timing and we\'ll confirm within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Bukit%20Batok.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Bukit Batok Singapore',
  },
  {
    slug: 'jurong-east',
    name: 'Jurong East',
    badge: 'Jurong East · West Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Jurong East Central, Boon Lay, Pioneer, Taman Jurong, and Jurong Gateway',
    geoRegion: 'SG-03',
    context1: 'Jurong East is the commercial and transport hub of the west, with a dense mix of HDB estates, ECs, and the Jurong Gateway commercial district. We cover all Jurong East precincts — Boon Lay, Pioneer, Taman Jurong, and Jurong Gateway — with no travel surcharge.',
    context2: 'Both residential and commercial aircon servicing is common in Jurong East. HDB and condo units near the Jurong Lake area benefit from regular chemical washes given the humidity from the waterfront. We handle all unit types from 1-room studio to multi-split commercial systems.',
    faq1q: 'Do you service aircon in Jurong East?',
    faq1a: 'Yes — we cover Jurong East Central, Boon Lay, Pioneer, Taman Jurong, and the Jurong Gateway area. No travel surcharge applies.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Jurong East.',
    faq3q: 'Do you service commercial premises in Jurong East?',
    faq3a: 'Yes — we service offices, clinics, retail units, and commercial premises throughout Jurong East and the Jurong Gateway area, in addition to residential HDB and condo units.',
    faq4a: 'Same-week slots are available for Jurong East. WhatsApp us your unit count and type and we\'ll confirm timing within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Jurong%20East.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Jurong East Singapore',
  },
  {
    slug: 'serangoon',
    name: 'Serangoon',
    badge: 'Serangoon · North-East Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Serangoon Central, Serangoon North, Kovan, Lorong Ah Soo, and NEX mall area',
    geoRegion: 'SG-02',
    context1: 'Serangoon is a vibrant HDB town anchored by NEX mall and the Serangoon MRT interchange. It includes older HDB estates in Serangoon North, newer developments around Kovan, and private condos along the Upper Serangoon corridor. We cover all areas with no travel surcharge.',
    context2: 'Serangoon\'s mix of older and newer stock means we see everything from ageing non-inverter systems in older blocks to modern multi-split inverter systems in newer condos. We service all brands and advise honestly on whether to service, repair, or replace.',
    faq1q: 'Do you service aircon in Serangoon?',
    faq1a: 'Yes — we cover Serangoon Central, Serangoon North, Kovan, Lorong Ah Soo, and surrounding streets. No travel surcharge applies.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Serangoon.',
    faq3q: 'Do you cover Kovan and Upper Serangoon as well?',
    faq3a: 'Yes — Kovan, Upper Serangoon Road, and the surrounding private estates are all within our service area. No travel surcharge.',
    faq4a: 'Same-week slots are usually available for Serangoon. WhatsApp us your address and unit count and we\'ll confirm timing within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Serangoon.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Serangoon Singapore',
  },
  {
    slug: 'sembawang',
    name: 'Sembawang',
    badge: 'Sembawang · North Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Sembawang Central, Canberra, Wellington, Sun Plaza, and Admiralty',
    geoRegion: 'SG-02',
    context1: 'Sembawang is a growing northern HDB town with a mix of older kampong-era blocks, newer Canberra BTOs, and private housing near the coast. We cover all Sembawang precincts — Canberra, Wellington, Admiralty — with no travel surcharge.',
    context2: 'The coastal proximity and older housing stock in parts of Sembawang mean aircon units here often accumulate salt deposits and mould on the coil. Chemical washes are frequently needed, especially for units facing north toward the Straits of Johor.',
    faq1q: 'Do you service aircon in Sembawang?',
    faq1a: 'Yes — we cover Sembawang Central, Canberra, Wellington, Admiralty, and surrounding areas. No travel surcharge applies to Sembawang.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Sembawang.',
    faq3q: 'Do you cover the newer Canberra BTO estates?',
    faq3a: 'Yes — including all phases of the Canberra BTO developments, as well as older Sembawang blocks and private housing in the area.',
    faq4a: 'Same-week slots are available for Sembawang. WhatsApp us your unit count and preferred time and we\'ll confirm within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Sembawang.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Sembawang Singapore',
  },
  {
    slug: 'bukit-panjang',
    name: 'Bukit Panjang',
    badge: 'Bukit Panjang · West Singapore · HDB · Condo · No travel surcharge',
    precincts: 'Bukit Panjang Central, Fajar, Cashew, Senja, and Pending',
    geoRegion: 'SG-03',
    context1: 'Bukit Panjang is a green, suburban HDB town in the northwest, well-connected by the DTL and LRT. It has a mix of older HDB blocks near Fajar and Pending, and newer BTOs around Senja and Cashew. We cover all areas with no travel surcharge.',
    context2: 'Bukit Panjang\'s leafy environment and high rainfall areas mean aircon filters and coils can accumulate organic debris faster than in more urban estates. We recommend servicing every 3–4 months for units that run frequently, and at least annually for lighter-use units.',
    faq1q: 'Do you service aircon in Bukit Panjang?',
    faq1a: 'Yes — we cover Bukit Panjang Central, Fajar, Cashew, Senja, Pending, and surrounding streets. No travel surcharge applies.',
    faq2a: '$50 for 1 unit, $30/unit for 2 units, $25/unit for 3 or more. Chemical wash: $60 for 1 unit, $50/unit for 2 or more. No travel surcharge for Bukit Panjang.',
    faq3q: 'Do you service the newer Senja and Cashew BTO estates?',
    faq3a: 'Yes — including Senja, Cashew, and all newer BTO developments in Bukit Panjang, as well as the older Fajar and Pending estates.',
    faq4a: 'Same-week slots are available for Bukit Panjang. WhatsApp us your unit count and preferred timing and we\'ll confirm within a few hours.',
    waText: 'Hi%20AFIX!%20I\'d%20like%20to%20book%20an%20aircon%20service%20in%20Bukit%20Panjang.',
    heroImg: 'hero-hdb-block',
    heroAlt: 'HDB residential block with green archway in Bukit Panjang Singapore',
  },
];

// All existing + new areas for footer
const allAreas = [
  { slug: 'tampines', name: 'Tampines' },
  { slug: 'jurong-west', name: 'Jurong West' },
  { slug: 'woodlands', name: 'Woodlands' },
  { slug: 'sengkang', name: 'Sengkang' },
  { slug: 'punggol', name: 'Punggol' },
  { slug: 'hougang', name: 'Hougang' },
  { slug: 'yishun', name: 'Yishun' },
  { slug: 'bedok', name: 'Bedok' },
  { slug: 'ang-mo-kio', name: 'Ang Mo Kio' },
  { slug: 'choa-chu-kang', name: 'Choa Chu Kang' },
  { slug: 'kallang-whampoa', name: 'Kallang / Whampoa' },
  { slug: 'clementi', name: 'Clementi' },
  { slug: 'toa-payoh', name: 'Toa Payoh' },
  { slug: 'queenstown', name: 'Queenstown' },
  { slug: 'bishan', name: 'Bishan' },
  { slug: 'pasir-ris', name: 'Pasir Ris' },
  { slug: 'bukit-batok', name: 'Bukit Batok' },
  { slug: 'jurong-east', name: 'Jurong East' },
  { slug: 'serangoon', name: 'Serangoon' },
  { slug: 'sembawang', name: 'Sembawang' },
  { slug: 'bukit-panjang', name: 'Bukit Panjang' },
];

const footerAreasHTML = allAreas.map(a =>
  `<a href="/aircon-servicing-${a.slug}/">${a.name}</a>`
).join('');

function generatePage(a) {
  const waBookNow = `https://wa.me/6594513022?text=${a.waText}`;
  const waStd = `https://wa.me/6594513022?text=Hi%20AFIX!%20I%27d%20like%20to%20book%20a%20standard%20aircon%20service%20in%20${a.name.replace(' ', '%20')}.`;
  const waChem = `https://wa.me/6594513022?text=Hi%20AFIX!%20I%27d%20like%20to%20book%20an%20aircon%20chemical%20wash%20in%20${a.name.replace(' ', '%20')}.`;
  const waFaq = `https://wa.me/6594513022?text=Hi%20AFIX!%20I%20have%20a%20question%20about%20aircon%20servicing%20in%20${a.name.replace(' ', '%20')}.`;
  const pageUrl = `https://afix.sg/aircon-servicing-${a.slug}/`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aircon Servicing ${a.name} | From $25/unit | AFIX</title>
<meta name="description" content="Professional aircon servicing in ${a.name} from $25/unit. HDB, condo & EC — standard cleaning, chemical wash & annual plans. No travel surcharge. WhatsApp for a same-week slot.">
<meta name="keywords" content="aircon servicing ${a.name}, aircon servicing ${a.name} Singapore, aircon chemical wash ${a.name}, aircon cleaning ${a.name} HDB">
<meta name="author" content="AFIX Services Pte Ltd">
<meta name="robots" content="index, follow">
<link rel="preload" as="image" href="/images/${a.heroImg}.jpg">
<link rel="canonical" href="${pageUrl}">
<meta property="og:type" content="website">
<meta property="og:url" content="${pageUrl}">
<meta property="og:title" content="Aircon Servicing ${a.name} | From $25/unit | AFIX">
<meta property="og:description" content="Professional aircon servicing in ${a.name} from $25/unit. HDB, condo & EC. No travel surcharge.">
<meta property="og:image" content="https://afix.sg/images/${a.heroImg}.jpg">
<meta property="og:site_name" content="AFIX Services">
<meta property="og:locale" content="en_SG">
<meta name="geo.region" content="${a.geoRegion}">
<meta name="geo.placename" content="${a.name}, Singapore">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HomeAndConstructionBusiness","HVACBusiness"],
      "name": "AFIX Services Pte Ltd",
      "url": "https://afix.sg",
      "telephone": "+6594513022",
      "address": {"@type": "PostalAddress","addressCountry": "SG","addressLocality": "Singapore"},
      "areaServed": {"@type": "Country","name": "Singapore"},
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "name": "Aircon Servicing ${a.name}",
      "provider": {"@type": "LocalBusiness","name": "AFIX Services Pte Ltd","url": "https://afix.sg"},
      "areaServed": {"@type": "Place","name": "${a.name}, Singapore"},
      "description": "Professional aircon servicing in ${a.name}, Singapore. Standard cleaning, chemical wash, and annual maintenance plans for HDB, condo, and EC units.",
      "offers": [
        {"@type": "Offer","name": "Standard Aircon Servicing ${a.name}","price": "25","priceCurrency": "SGD"},
        {"@type": "Offer","name": "Aircon Chemical Wash ${a.name}","price": "50","priceCurrency": "SGD"}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem","position": 1,"name": "Home","item": "https://afix.sg/"},
        {"@type": "ListItem","position": 2,"name": "Aircon Servicing","item": "https://afix.sg/aircon-servicing/"},
        {"@type": "ListItem","position": 3,"name": "Aircon Servicing ${a.name}","item": "${pageUrl}"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question","name": "${a.faq1q}","acceptedAnswer": {"@type": "Answer","text": "${a.faq1a}"}},
        {"@type": "Question","name": "How much does aircon servicing cost in ${a.name}?","acceptedAnswer": {"@type": "Answer","text": "${a.faq2a}"}},
        {"@type": "Question","name": "${a.faq3q}","acceptedAnswer": {"@type": "Answer","text": "${a.faq3a}"}},
        {"@type": "Question","name": "How quickly can you come to ${a.name}?","acceptedAnswer": {"@type": "Answer","text": "${a.faq4a}"}}
      ]
    }
  ]
}
</script>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><polygon points='18,2 36,18 30,18 30,34 6,34 6,18 0,18' fill='%235b7fa6'/><rect x='24' y='18' width='6' height='16' fill='%23f0a500'/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
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
.page-h1{font-family:var(--font-head);font-size:clamp(32px,4vw,52px);font-weight:700;color:var(--white);line-height:1.15;margin-bottom:18px}
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
.section-heading{font-family:var(--font-head);font-size:clamp(26px,3vw,38px);font-weight:700;color:var(--navy);line-height:1.2;margin-bottom:16px}
.section-sub{font-size:17px;font-weight:300;color:var(--muted);max-width:560px;line-height:1.75;margin-bottom:48px}
.cs{padding:80px 6vw}.cs.alt{background:var(--off)}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
.body-copy p{font-size:16px;font-weight:300;color:var(--muted);line-height:1.85;margin-bottom:18px}
.body-copy p:last-child{margin-bottom:0}
.prop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:32px}
.prop-chip{background:var(--white);border:1px solid var(--border);border-radius:8px;padding:12px 16px;font-size:13px;color:var(--navy);font-weight:500}
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
@media(max-width:960px){.two-col{grid-template-columns:1fr}.price-grid{grid-template-columns:1fr}.prop-grid{grid-template-columns:repeat(2,1fr)}.faq-layout{grid-template-columns:1fr}.faq-sticky{position:static}}
@media(max-width:600px){.nav-links{display:none}.strip{gap:20px}}
</style>
</head>
<body>
<nav>
  <a class="nav-brand" href="/"><svg width="148" height="42" viewBox="0 0 148 42" xmlns="http://www.w3.org/2000/svg"><polygon points="18,3 36,21 31,21 31,38 5,38 5,21 0,21" fill="#5b7fa6"/><rect x="25" y="21" width="6" height="17" fill="#f0a500"/><rect x="10" y="27" width="8" height="11" fill="rgba(255,255,255,0.18)"/><line x1="42" y1="7" x2="42" y2="36" stroke="#dde5f0" stroke-width="1.5"/><text x="51" y="23" font-family="'DM Sans',sans-serif" font-size="16" font-weight="500" letter-spacing="2" fill="#0f2a4a">AFIX</text><text x="51" y="34" font-family="'DM Sans',sans-serif" font-size="8" font-weight="300" letter-spacing="2.5" fill="#8a9ab5">BUILT RIGHT</text></svg></a>
  <ul class="nav-links">
    <li><a href="/#services">Services</a></li>
    <li><a href="/aircon-servicing/" class="active">Aircon Servicing</a></li>
    <li><a href="/aircon-servicing/#pricing">Pricing</a></li>
    <li><a href="/#portfolio">Portfolio</a></li>
    <li><a href="/#about">About</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <a class="nav-cta" href="${waBookNow}" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WhatsApp Us</a>
</nav>
<div class="breadcrumb"><a href="/">Home</a><span>›</span><a href="/aircon-servicing/">Aircon Servicing</a><span>›</span><span>${a.name}</span></div>

<section class="page-hero">
  <div class="hero-grid"></div>
  <div class="hero-inner">
  <div class="page-hero-text">
    <div class="hero-badge"><span class="badge-dot"></span>${a.badge}</div>
    <h1 class="page-h1">Aircon Servicing in<br><em>${a.name}</em></h1>
    <p class="page-sub">Covering ${a.precincts}. Standard cleaning, chemical wash, and annual plans from <strong style="color:rgba(255,255,255,0.9);font-weight:500;">$25/unit</strong>. No travel surcharge, same-week slots available.</p>
    <div class="hero-actions">
      <a class="btn-primary" href="${waBookNow}" target="_blank" rel="noopener">Book via WhatsApp</a>
      <a class="btn-outline" href="#pricing">See Pricing</a>
    </div>
    <div class="hero-trust">
      <div><div class="trust-num">$25</div><div class="trust-lbl">From per unit</div></div>
      <div class="trust-div"></div>
      <div><div class="trust-num">$0</div><div class="trust-lbl">Travel surcharge</div></div>
      <div class="trust-div"></div>
      <div><div class="trust-num">Same week</div><div class="trust-lbl">Slots available</div></div>
    </div>
  </div>
  <div class="page-hero-img">
    <img src="/images/${a.heroImg}.jpg" alt="${a.heroAlt}" width="440" height="300" loading="eager" fetchpriority="high">
  </div>
  </div>
</section>

<div class="strip">
  <div class="strip-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>No travel surcharge to ${a.name}</div>
  <div class="strip-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Before &amp; after photos every job</div>
  <div class="strip-item"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Our own technicians, no subcontractors</div>
</div>

<section class="cs">
  <div class="two-col fade-up">
    <div class="body-copy">
      <div class="section-label">About ${a.name}</div>
      <h2 class="section-heading">Aircon servicing for all ${a.name} property types</h2>
      <p>${a.context1}</p>
      <p>${a.context2}</p>
      <p>We service all major brands found in ${a.name} HDB and condo units, including Daikin, Mitsubishi Electric, Panasonic, LG, and Samsung. <a href="/aircon-servicing/" style="color:var(--blue);font-weight:500;">See all aircon services →</a></p>
    </div>
    <div>
      <p style="font-size:13px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:var(--blue);margin-bottom:16px;">Property types we service</p>
      <div class="prop-grid">
        <div class="prop-chip">3-Room HDB</div>
        <div class="prop-chip">4-Room HDB</div>
        <div class="prop-chip">5-Room HDB</div>
        <div class="prop-chip">Executive Flat</div>
        <div class="prop-chip">Maisonette</div>
        <div class="prop-chip">EC / Condo</div>
      </div>
    </div>
  </div>
</section>

<section class="cs alt" id="pricing">
  <div class="section-label">Pricing</div>
  <h2 class="section-heading">Aircon servicing prices in ${a.name}</h2>
  <p class="section-sub">Same pricing as anywhere in Singapore. No travel surcharge, no hidden charges on arrival.</p>
  <div class="price-grid fade-up">
    <div class="price-card">
      <div class="pc-head"><div class="pc-badge">Standard</div><div class="pc-title">Normal Servicing</div><div class="pc-sub">Routine aircon cleaning</div></div>
      <div class="pc-prices">
        <div class="pc-row"><span class="pc-label">1 unit</span><span class="pc-val">$50</span></div>
        <div class="pc-row"><span class="pc-label">2 units</span><span class="pc-val">$30 / unit</span></div>
        <div class="pc-row"><span class="pc-label">3 units onwards</span><span class="pc-val">$25 / unit</span></div>
      </div>
      <div class="pc-cta">
        <a href="${waStd}" target="_blank" rel="noopener" class="pc-btn navy">Book now ↗</a>
        <div class="pc-note">Includes before &amp; after photos, shoe covers, compressor check.</div>
      </div>
    </div>
    <div class="price-card featured">
      <div class="pc-head blue"><div class="pc-badge pop">Most popular</div><div class="pc-title">Chemical Wash</div><div class="pc-sub">Deep clean &amp; restore performance</div></div>
      <div class="pc-prices">
        <div class="pc-row"><span class="pc-label">1 unit</span><span class="pc-val">$60</span></div>
        <div class="pc-row"><span class="pc-label">2 units onwards</span><span class="pc-val">$50 / unit</span></div>
      </div>
      <div class="pc-cta">
        <a href="${waChem}" target="_blank" rel="noopener" class="pc-btn blue">Book now ↗</a>
        <div class="pc-note">Recommended if your aircon smells, leaks, or isn't cooling well.</div>
      </div>
    </div>
  </div>
  <div style="margin-top:16px;padding:18px 22px;background:var(--white);border:1px solid var(--border);border-radius:10px;font-size:14px;font-weight:300;color:var(--muted);line-height:1.7;" class="fade-up">
    <strong style="font-weight:500;color:var(--navy);">Annual Care Plan:</strong> 4 services/year from $175 (1 unit) · $200 (2 units) · $250 (3 units). We remind you when each service is due. <a href="/aircon-servicing/#pricing" style="color:var(--blue);font-weight:500;">View full plan details →</a>
  </div>
</section>

<section id="faq">
  <div class="faq-layout">
    <div class="faq-sticky">
      <div class="section-label">FAQ</div>
      <h2 class="section-heading">${a.name} aircon servicing questions</h2>
      <p style="font-size:17px;font-weight:300;color:var(--muted);line-height:1.75;margin-bottom:28px;">Can't find your answer? Just ask us directly.</p>
      <a href="${waFaq}" target="_blank" rel="noopener" style="font-size:14px;font-weight:500;color:var(--blue);text-decoration:none;border-bottom:1px solid var(--blue);padding-bottom:2px;">Ask on WhatsApp →</a>
    </div>
    <div>
      <div class="faq-item"><div class="faq-q">${a.faq1q}<span class="faq-toggle">+</span></div><div class="faq-a">${a.faq1a}</div></div>
      <div class="faq-item"><div class="faq-q">How much does aircon servicing cost in ${a.name}?<span class="faq-toggle">+</span></div><div class="faq-a">${a.faq2a}</div></div>
      <div class="faq-item"><div class="faq-q">${a.faq3q}<span class="faq-toggle">+</span></div><div class="faq-a">${a.faq3a}</div></div>
      <div class="faq-item"><div class="faq-q">How quickly can you come to ${a.name}?<span class="faq-toggle">+</span></div><div class="faq-a">${a.faq4a}</div></div>
    </div>
  </div>
</section>

<section class="cta-section">
  <h2>Book your ${a.name} aircon service today</h2>
  <p>WhatsApp us your unit count and block — we'll confirm a same-week slot.</p>
  <div class="cta-actions">
    <a class="btn-wa" href="${waBookNow}" target="_blank" rel="noopener"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp us · +65 9451 3022</a>
    <a href="/aircon-servicing/" style="color:rgba(255,255,255,0.8);border:1.5px solid rgba(255,255,255,0.28);padding:15px 32px;border-radius:8px;text-decoration:none;font-size:15px;">All aircon services</a>
  </div>
</section>

<footer>
  <div class="footer-top">
    <div><svg width="120" height="36" viewBox="0 0 148 42" xmlns="http://www.w3.org/2000/svg"><polygon points="18,3 36,21 31,21 31,38 5,38 5,21 0,21" fill="#5b7fa6"/><rect x="25" y="21" width="6" height="17" fill="#f0a500"/><line x1="42" y1="7" x2="42" y2="36" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/><text x="51" y="23" font-family="'DM Sans',sans-serif" font-size="16" font-weight="500" letter-spacing="2" fill="white">AFIX</text><text x="51" y="34" font-family="'DM Sans',sans-serif" font-size="8" font-weight="300" letter-spacing="2.5" fill="rgba(255,255,255,0.4)">BUILT RIGHT</text></svg><div class="footer-tagline">Licensed general contractor in Singapore.</div></div>
    <div class="footer-col"><div class="footer-col-title">Aircon Services</div><a href="/aircon-servicing/">Aircon Servicing</a><a href="/aircon-chemical-wash/">Chemical Wash</a><a href="/aircon-not-cold/">Aircon Not Cold</a><a href="/aircon-leaking-water/">Aircon Leaking Water</a><a href="/daikin-aircon-servicing/">Daikin Servicing</a><a href="/mitsubishi-electric-aircon-servicing/">Mitsubishi Electric</a></div>
    <div class="footer-col"><div class="footer-col-title">Areas We Cover</div>${footerAreasHTML}</div>
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

// Copy HDB block image for shared use
const src = path.join(REPO, 'images', 'hero-bedok.jpg');
const dest = path.join(REPO, 'images', 'hero-hdb-block.jpg');
if (!fs.existsSync(dest)) {
  fs.copyFileSync(src, dest);
  console.log('Copied hero-hdb-block.jpg');
}

// Generate pages
for (const a of areas) {
  const dir = path.join(REPO, `aircon-servicing-${a.slug}`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generatePage(a), 'utf8');
  console.log(`✓ aircon-servicing-${a.slug}/`);
}

// Update sitemap
let sitemap = fs.readFileSync(path.join(REPO, 'sitemap.xml'), 'utf8');
const today = new Date().toISOString().split('T')[0];
const newEntries = areas.map(a => `  <url>
    <loc>https://afix.sg/aircon-servicing-${a.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>https://afix.sg/images/hero-hdb-block.jpg</image:loc>
      <image:title>${a.heroAlt}</image:title>
    </image:image>
  </url>`).join('\n');

sitemap = sitemap.replace('</urlset>', `${newEntries}\n</urlset>`);
fs.writeFileSync(path.join(REPO, 'sitemap.xml'), sitemap, 'utf8');
console.log('✓ sitemap.xml updated');
console.log(`\nDone — ${areas.length} new pages created.`);
