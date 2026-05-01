# Matnlar Olami

Single-page static React app for Uzbek primary school reading lessons.

## Deploy on Netlify

- Publish directory: `.`
- Build command: none
- The app entrypoint is `index.html`
- `netlify.toml` rewrites all routes to `/index.html` so client-side routing works on refresh

## Local preview

- Open `index.html` directly in your browser
- Or run a local server:
  - `python -m http.server 4173`
  - `npx serve .`

## Notes

- The app persists data in browser `localStorage` under key `matnlar-olami-data-v1`.
- Original source file remains available as `Matnlar-Olami.html`.
