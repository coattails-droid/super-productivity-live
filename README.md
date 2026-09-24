# Super Productivity — Live Static Build

A static production build of [Super Productivity](https://github.com/johannesjo/super-productivity)
by Johannes Millan, served via GitHub Pages at
**https://coattails-droid.github.io/super-productivity-live/**.

## Build provenance

- **Source repo:** [johannesjo/super-productivity](https://github.com/johannesjo/super-productivity)
- **Upstream commit:** `849d3937a68a116878a0aaa99dc701c294cb6fdf`
- **Build command:** `npm run prebuild && npx ng build --configuration productionWeb --base-href /super-productivity-live/ --source-map=false`
  (i.e. the upstream `buildFrontend:prodWeb` script, with base-href for the
  `/super-productivity-live/` subpath and source maps disabled)
- **Build date:** 2026-09-24
- **License:** MIT (see [LICENSE](./LICENSE) — © 2018 Johannes Millan)

This repository is a **static mirror**: it contains only the compiled build
output plus a license copy and this README. No build tooling or `node_modules`
are included. For the source code, bug reports, and contributions, see the
upstream repository.

## Notes

- This is the **web version** of Super Productivity. Per the upstream README,
  the web version has some limitations compared to the desktop app (e.g. no
  global shortcuts, no idle-time detection).
- No account or backend is required. Data is stored locally in the browser
  (IndexedDB). Optional sync integrations (SuperSync, Dropbox, WebDAV) and
  issue-provider imports (Jira, GitHub, GitLab, …) need the user's own tokens.
- A `404.html` copy of `index.html` is included so client-side routes resolve
  correctly on GitHub Pages.
- The app registers an ngsw service worker for offline use; it is scoped to
  the `/super-productivity-live/` subpath.
