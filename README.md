# BEPLOER

Premium presentation website for the X-native token launch project. Browser tab title: BEPLOYER.

Run `npm ci --ignore-scripts`, `npm run build`, then `npm start` and visit http://127.0.0.1:4178. After edits, rebuild and refresh.

The presentation uses Three.js, GSAP, Lucide, Manrope and esbuild. Fonts and libraries are bundled locally. The 3D medallion respects reduced motion, pauses offscreen and falls back to a static image if WebGL is unavailable.

Source: `public/index.html`, `src/style.css`, `src/main.js`. Build script: `build.mjs`. Output: `dist/`. Branding uses the user-selected dragon and user-supplied Flap logo.

Marketing only: no wallet, account, token feed, launch forms, trading controls, fake metrics or localStorage. The launch flow is described as starting on X and landing directly on Flap on BNB Chain, as specified by the project owner. This frontend does not execute launches or assert an official partnership.

X: https://x.com/beploer_fun

Launch destination: https://flap.sh/board?lang=en
