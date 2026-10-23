# Maintenance walk-through

[Français](README.fr.md)

A browser-only walk-through with synthetic sample data. Open the site at `/pxmaint-walkthrough/` and follow 19 steps, or explore the real application screens. No account, application server or database is needed. The fictional rural municipality, people, assets, VINs, photographs and locations do not identify real operations. Pictures were drawn locally.

Everything entered stays in this browser. Optional local storage keeps changes for this browser profile and origin. If storage is blocked or full, the current visit uses memory. Use **Reset sample data** to restore the seed. Do not enter personal or operational information in a public sample.

## Run locally

Serve these files with any static file server, mounted at `/pxmaint-walkthrough/`. Use HTTP on loopback, or HTTPS when hosted; opening index.html as a file is unsupported because browser modules require HTTP. No application API is served. For example, place or link this folder under the matching directory inside an empty static-server root, then run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory /path/to/static-root
```

Open `http://127.0.0.1:8000/pxmaint-walkthrough/`. For this build, `/path/to/static-root/pxmaint-walkthrough/index.html` must be this folder's index.html. Any server that serves those paths and JavaScript/CSS/JSON MIME types works. A root-path build can be served directly from its folder.

## Build

Built from pxmaint-fleet commit `904e613786e35975f890af8582470b7a1a19293c` on `2026-10-20T22:08:17.368Z`. Build identity and the working-tree flag are in [build-info.json](build-info.json) and the page footer. In the source checkout, using the existing Node 22 toolchain and installed dependencies:

```sh
nice -n 10 npm run export:walkthrough -- --base /pxmaint-walkthrough/
```

The separate build defaults to repository-relative `dist/walkthrough`; this publication folder defaults to `dist/walkthrough-site`. `--out-dir` or `WALKTHROUGH_OUT` and `--site-dir` or `WALKTHROUGH_DIST` override those separate folders. Existing outputs move into a sibling `discarded/` folder. `WALKTHROUGH_CACHE` selects the build cache; `TMPDIR` selects test scratch storage. The child build inherits the environment. The normal production build is unchanged. For a GitHub Pages project, use the repository URL path as `WALKTHROUGH_BASE` or `--base`. Rebuild for a different base path; a host must serve that path without rewriting assets to index.html. Publish only this generated folder; session reports, source evidence and internal operational documents must stay out of a public copy.

## Boundaries

The local backend reuses validation, transitions, permissions, costs and receipts. Roles are fictional local seats sharing the author's GitHub noreply attribution address, which is not a login or delivery destination. No real authentication, concurrent users, email, webhook delivery, outside token use, scheduled jobs, backups or production operations are demonstrated. JPEG/PNG are decoded and redrawn locally without location metadata. HEIC, original metadata retention and document/spreadsheet conversion require the hosted system and are labelled on screen. CSV sample import and local downloads work here.

The service worker and web manifest are omitted. Offline capture works within a loaded page, using the in-page switch or a disconnected connection. Queued readings and inspections apply locally after reconnecting. Offline reload and installation are not promised. Saved changes can be cleared by browser storage controls.

## Hosting and privacy

Publish this folder as static files at `/pxmaint-walkthrough/`. Add no host analytics, injected scripts or outside resources. No API proxy, account service or environment secret is required. The CSP refuses connections, outside scripts, fonts and images. It permits only own files plus locally generated data/blob images and inline styles used by the real screens. The noindex meta tag discourages indexing. `robots.txt` disallows all crawling; robots discovery happens at the origin root, so the host owner must arrange a root policy if needed. These are crawler instructions, not access control.

## Open by design

Apache-2.0, with no API fee. The hosted application's checked-in [OpenAPI 3.1 description](openapi.json) is included for reading. The static walk-through serves files and has no HTTP API or usable credentials. The code and portable exports can be inspected and adapted under [LICENSE](LICENSE). [NOTICE](NOTICE) retains source and bundled third-party notices, derived from the emitted modules; [bundle-manifest.json](bundle-manifest.json) lists their exact installed versions. Development test tools and server dependencies are not bundled.

Checked by its tests before publication.
