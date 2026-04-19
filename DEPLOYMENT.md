# Deployment

This project deploys automatically to GitHub Pages on every push to `main`.

**Live URL:** `https://ashokkota251.github.io/leanrevolution4earth.github.io/`

## How it works

1. You push to `main`.
2. GitHub Actions runs `.github/workflows/deploy.yml`:
   - Installs dependencies with `yarn install --frozen-lockfile`
   - Runs `yarn build` (Next.js static export — `output: 'export'`)
   - Uploads the generated `out/` directory as a Pages artifact
   - Deploys it via `actions/deploy-pages`
3. The site is live in ~1–3 minutes.

## Deploying

```bash
git push origin main
```

That's it. There's also a convenience script:

```bash
yarn deploy
```

which runs `git add . && git commit -m "Deploy" && git push origin main`.

## Checking deployment status

- **Actions tab:** https://github.com/ashokkota251/leanrevolution4earth.github.io/actions
- Look for the latest "Deploy to GitHub Pages" run. Green check = live.
- The deploy job output shows the final Pages URL.

## Manual deploy (no commit)

Actions tab → **Deploy to GitHub Pages** → **Run workflow** → select `main`.

## Rollback

Revert the bad commit and push:

```bash
git revert <bad-commit-sha>
git push origin main
```

The workflow runs again on the revert commit and re-publishes the previous state.

For an emergency rollback without waiting on a fresh build, re-run a previous successful deploy from the Actions tab (**…** menu → Re-run all jobs).

## Local preview

```bash
yarn build          # outputs to out/
npx serve out       # preview at http://localhost:3000
```

Because `basePath` is set to `/leanrevolution4earth.github.io` in `next.config.mjs`, local previews served at `/` will have broken asset/link paths. Preview at `http://localhost:3000/leanrevolution4earth.github.io/` instead, or temporarily comment out `basePath` for local dev.

## Troubleshooting

**404 on assets / blank page after deploy**
- Confirm `basePath` in `next.config.mjs` matches the repo name exactly.
- Confirm `out/.nojekyll` exists (the workflow creates it; `public/.nojekyll` also propagates).

**Workflow fails at "Get Pages site failed"**
- GitHub repo → **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.

**Workflow fails on `yarn install --frozen-lockfile`**
- `yarn.lock` is out of sync with `package.json`. Run `yarn install` locally, commit the updated lockfile, and push.

**Pages shows old content after deploy**
- Hard refresh (Ctrl+Shift+R). GitHub's CDN can also take a minute.

**Images don't load**
- `next/image` paths are auto-prefixed by `basePath`. Static assets in `public/` referenced directly (e.g. `<img src="/foo.png">`) are NOT prefixed — use `next/image` or manually prefix.

## One-time GitHub repo setup

These must be done in the GitHub web UI (can't be set from code):

- **Settings → Pages → Build and deployment → Source:** `GitHub Actions`
- **Settings → Actions → General → Workflow permissions:** `Read and write permissions`
- **Settings → Environments:** an environment named `github-pages` will be created automatically on first deploy; no manual setup needed.

## Changing to a custom domain later

1. Create `public/CNAME` containing the domain (e.g. `leanrevolution4earth.org`).
2. Remove `basePath` (and `assetPrefix` if set) from `next.config.mjs`.
3. Configure DNS at your registrar:
   - **Apex domain (`example.com`):** 4 A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - **Subdomain (`www.example.com`):** CNAME to `ashokkota251.github.io`.
4. **Settings → Pages → Custom domain:** enter the domain.
5. After DNS propagates, check **Enforce HTTPS**.
