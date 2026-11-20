# snext-site-assets

Externally hosted custom CSS/JS for samsungnext.com (Webflow). Served through jsDelivr so the code is not counted against Webflow bandwidth and is cached by browsers.

Files
- site-head.css: site-wide head styles (was Site settings > Custom code > Head)
- site-head.js: site-wide head script
- site-footer.css: site-wide footer styles
- site-footer.js: site-wide footer scripts, in original order

How Webflow references them
- Site settings > Custom code > Head:   link to site-head.css + script site-head.js
- Site settings > Custom code > Footer: nav HTML + link to site-footer.css + script site-footer.js
- URLs are pinned to a commit SHA (https://cdn.jsdelivr.net/gh/adelaseo-afk/snext-site-assets@SHA/file). After changing a file here, update the SHA in Webflow and publish.
