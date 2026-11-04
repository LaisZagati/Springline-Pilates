# Springline — Cadillac, Mat & Wall Unit Pilates

Plain HTML, CSS and JS. No build step, no backend, no login.

## Files
- `index.html` — app shell, PWA and Apple home-screen tags
- `styles.css` — all styling (light and dark)
- `i18n.js` — interface text and tag labels (EN/ES)
- `figures.js` — animated movement-study illustrations
- `app.js` — routing, library, filters, favourites, class builder, presentation mode, voice
- `cadillac.js`, `mat.js`, `wall.js` — the exercises
- `manifest.webmanifest`, `sw.js` and the icon files — installable app and offline support

## Hosting
Upload the whole folder to any static host (Vercel, Netlify, GitHub Pages). It must be served over HTTPS for the
service worker and "Add to Home Screen" to work. Opening `index.html` directly from disk works too, without offline mode.
After editing any file, change `VERSION` in `sw.js` so installed copies update.

## Adding an exercise
Copy an existing entry in the matching data file and edit it. Text fields are `['English', 'Spanish']`;
lists are `[[English items], [Spanish items]]` with the same number of items. Tags (`eq`, `body`, `obj`, `pos`, `mus`)
must use keys from `i18n.js`. `sec` is the suggested class section; `dur` is minutes; `sup: true` shows the
supervision warning. A new apparatus file only needs a `<script>` line in `index.html` and an entry in `sw.js`.

## Adding real photos or illustrations
Put the image in an `images/` folder and set `image: 'images/your-file.jpg'` on the exercise.
It then shows on the card and above the movement study. Use photos you own or have licensed.

## Notes
- Favourites and class plans are saved in the browser on each device (localStorage).
- Voice guidance uses the device's built-in text-to-speech; voice quality depends on the device (Safari on iPhone and
  Chrome on Android have good English and Spanish voices).
- Spring settings are relative guidance; tensions and attachment heights differ between manufacturers.
