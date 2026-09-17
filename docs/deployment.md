# Deployment workflow

## Intended setup

ZSlite is currently a client-side React/Vite application. The recommended first deployment is a Git-connected static deployment on Vercel:

```text
GitHub main → Vercel build → dist/ → production URL
```

No VPS, database, Docker, or backend is required for the current phase.

## One-time Vercel setup

1. Sign in to Vercel with the GitHub account that can access `Z11430373/ZSlite`.
2. Import the repository.
3. Select Vite if Vercel asks for a framework.
4. Use these settings:
   - Install command: `npm ci`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Production branch: `main`
5. Deploy once and save the generated production URL.
6. Optionally add a custom domain under Vercel Project Settings → Domains.

Vercel automatically creates preview deployments for pull requests. Never use a preview URL as the production URL.

## Daily flow

```text
Issue → feature branch → Pull Request → CI + preview URL → review → merge main → production deploy
```

A deployment is successful only when:

- GitHub CI passes `npm run test` and `npm run build`;
- the preview URL loads the app and has no console-breaking error;
- the PR is reviewed and merged;
- the production deployment reports ready.

## Environment variables

There are no required production secrets in the current Phase 0/1 frontend. Do not commit tokens or `.env` files. When a backend is introduced, document each variable in the deployment configuration and keep secrets in the hosting provider, not in `main.zmd` or the repository.

## Rollback

If a production deployment is broken:

1. Open the Vercel deployment history.
2. Identify the last known-good `main` commit.
3. Revert the offending GitHub PR or commit.
4. Let the reverted `main` commit deploy normally.

The Git commit remains the source of deployment history; do not hot-edit files only in the hosting dashboard.
