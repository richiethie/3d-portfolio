import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

// Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: 'https://richiethie.com' }); // Replace with your actual website URL

// Add your URLs
sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
// sitemapStream.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
// Add more URLs as needed

// End the stream
sitemapStream.end();

// Convert stream to a promise
const sitemapXML = await streamToPromise(sitemapStream).then((data) => data.toString());

// Write the sitemap to a file
fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemapXML);
console.log('Sitemap generated: public/sitemap.xml');
