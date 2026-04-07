import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

const BASE = 'https://cdn.prod.website-files.com/636d57e3656d6741fd88d2f3';
const BLOG_BASE = 'https://cdn.prod.website-files.com/636d57e4656d6708b188d2f7';

const assets = [
  // Logo
  { url: `${BASE}/661e8ae818106475a9229591_LABReNew_v4%20(1).jpg`, path: 'public/images/logo.jpg' },
  // Favicon
  { url: `${BASE}/66213ae16d24b442736ddd63_favicon-3%2032x32.jpg`, path: 'public/seo/favicon.jpg' },
  { url: `${BASE}/66213b1c1eb484807d32b0d1_favicon-3%20256.jpg`, path: 'public/seo/apple-touch-icon.jpg' },
  // Hero image
  { url: `${BASE}/688a8b30bc2ffe6bf0ec2ac2_reduced_size_drew-hays-tGYrlchfObE-unsplash-p-1600.jpg`, path: 'public/images/hero-lab.jpg' },
  // Service icons
  { url: `${BASE}/65de3d64634d927e77a7b042_energy-efficient-practices.svg`, path: 'public/images/energy-efficient.svg' },
  { url: `${BASE}/65e40b47008b7ba278f658ef_water-conservation.svg`, path: 'public/images/water-conservation.svg' },
  { url: `${BASE}/65e40b5ecd2f1bebcd4cdf0d_green-chemistry.svg`, path: 'public/images/green-chemistry.svg' },
  { url: `${BASE}/65e40b72b4468c7eb183c580_recycling-waste-reduction.svg`, path: 'public/images/recycling.svg' },
  { url: `${BASE}/65e40bc6d7c64851ec9c7b03_green-behavior.svg`, path: 'public/images/green-behavior.svg' },
  // Check circle icon
  { url: `${BASE}/65d7b3866fd14a36f2ba0589_Check%20Circle.svg`, path: 'public/images/check-circle.svg' },
  // Play button
  { url: `${BASE}/65e40c4cd486d28f68402d5f_Play%20Button.svg`, path: 'public/images/play-button.svg' },
  // Lab photos
  { url: `${BASE}/688a8d86a9ae3263178b1b38_reduced_size_65c801cc669083b01c7b75e7_trnava-university-Lr_MKzNGhUU-unsplash-p-1600.jpg`, path: 'public/images/lab-petri-dish.jpg' },
  { url: `${BASE}/688a91b43964a243bf034282_reduced_size_65c801ca83ef5f12756d3f27_testalize-me-KWb_41kG0GE-unsplash-p-1600.jpg`, path: 'public/images/lab-tubes.jpg' },
  { url: `${BASE}/688a9fc20b290402989cf6f5_reduced_size_65c801cc1e88038bd801f015_national-cancer-institute-2fyeLhUeYpg-unsplash-p-1600.jpg`, path: 'public/images/lab-pipetting.jpg' },
  { url: `${BASE}/688aa1999a212a61e42d2d66_reduced_size_66030dc44e71f7f891353501_full-shot-girls-posing-outdoors%201.jpg`, path: 'public/images/lab-woman.jpg' },
  { url: `${BASE}/688ac389fdeec5bb377712a3_reduced_size_65c800c5b7937545577b13da_louis-reed-pwcKF7L4-no-unsplash-p-1600.jpg`, path: 'public/images/lab-pipette-pink.jpg' },
  // Blob decorations
  { url: `${BASE}/636d57e4656d67a70e88d380_cta-blob-charity-webflow-ecommerce-template.svg`, path: 'public/images/blob-decoration.svg' },
  { url: `${BASE}/636d57e4656d675ebf88d383_cta-footer-blob-1-charity-webflow-ecommerce-template.svg`, path: 'public/images/footer-blob-1.svg' },
  { url: `${BASE}/636d57e4656d677e5588d382_cta-footer-blob-2-charity-webflow-ecommerce-template.svg`, path: 'public/images/footer-blob-2.svg' },
  // Shopping bag icon
  { url: `${BASE}/636d57e4656d67680088d358_shopping-bag-icon-webflow-ecommerce-template.svg`, path: 'public/images/shopping-bag.svg' },
  // Blog images
  { url: `${BLOG_BASE}/69654611a3115a38c50b8b9a_ChatGPT%20Image%20Jan%2012%2C%202026%2C%2002_05_45%20PM.png`, path: 'public/images/blog-carbon.png' },
  { url: `${BLOG_BASE}/68f804cadfd17168b6c9a104_IBLog2.png`, path: 'public/images/blog-procurement.png' },
];

async function download(url, path) {
  try {
    await mkdir(dirname(path), { recursive: true });
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path, buf);
    console.log(`✓ ${path} (${(buf.length / 1024).toFixed(0)}KB)`);
  } catch (e) {
    console.error(`✗ ${path}: ${e.message}`);
  }
}

// Download 4 at a time
const batch = 4;
for (let i = 0; i < assets.length; i += batch) {
  await Promise.all(assets.slice(i, i + batch).map(a => download(a.url, a.path)));
}
console.log('\nDone!');
