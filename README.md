# Springline — Cadillac, Mat & Wall Unit Pilates

Plain HTML, CSS and JavaScript. No build step, no backend, no login.

## The files (keep them all in ONE folder)
- `index.html` — open this to start the app
- `styles.css` — all the styling
- `app.js` — all the app code (labels, illustrations, logic)
- `data.js` — all the content: exercises, prop exercises, ready-made classes, step-by-step guides and glossary
- `manifest.webmanifest`, `sw.js` and the icon files — make it installable and work offline

If a file is missing or an old copy is mixed in, the app shows a message saying what is wrong instead of a blank page.

## Updating
Delete the old folder completely and replace it with the new one. Never mix files from different versions.

## Hosting
Upload the whole folder to Vercel, Netlify or any static host (HTTPS needed for offline use and Add to Home Screen).
After any change, update `VERSION` in `sw.js` so installed copies refresh.

## Editing content
Everything is in `data.js`, in clearly marked blocks (===== cadillac.js =====, ===== classes.js =====, and so on).
Text is written as ['English', 'Spanish']. To add a photo to an exercise, add image: 'your-photo.jpg' and put the photo in the same folder.

Favourites are saved in the browser on each device. Voice guidance uses the device's built-in voices.
