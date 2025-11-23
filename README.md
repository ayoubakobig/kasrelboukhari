# Ksar El Boukhari Info Hub

Interactive single-page experience that highlights the administrative structure, key investment data, and regional map for Ksar El Boukhari. Built with React 19 and Vite for fast iteration and easy static deployment.

## Prerequisites
- Node.js 20+
- npm 10+

Install dependencies once after cloning:

```powershell
npm install
```

## Local Development
```powershell
npm run dev
```

The dev server binds to `http://localhost:3000/ksarpanel1/` (or the next available port) and hot-reloads on file changes.

## Production Build
```powershell
npm run build
```

Vite outputs an optimized static bundle to `dist/`. Preview it locally before deploying:

```powershell
npm run preview
```

## Deploying to GitHub Pages
1. Initialize a Git repository and push to GitHub (see `GITHUB_SETUP.md` for copy/paste-ready commands).
2. The workflow now auto-detects the repository name and exports `VITE_BASE_PATH` before building. If you need to override it manually, set `VITE_BASE_PATH` locally (for example `VITE_BASE_PATH=/custom/ npm run build`) or edit the workflow.
3. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` installs dependencies, sets the base path, runs `npm run build`, and publishes `dist/` to GitHub Pages automatically.
4. Monitor the **Actions** tab for status, then visit `https://YOUR_USERNAME.github.io/ksarpanel1/` once the `Deploy to GitHub Pages` job succeeds.

## Troubleshooting Checklist
- Install Git if `git` is not recognized (`https://git-scm.com/download/win`).
- Run `npm install` after pulling new dependencies.
- Confirm the Pages build finished by checking the Action logs.
- Adjust `VITE_BASE_PATH` or the `base` value in `vite.config.ts` if you are hosting somewhere other than GitHub Pages or need a custom sub-path.

For the full Git/GitHub walk-through, open `GITHUB_SETUP.md`.

