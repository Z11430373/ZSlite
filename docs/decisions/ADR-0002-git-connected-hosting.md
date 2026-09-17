# ADR-0002: Git-connected hosting for the first web deployment

- Status: Accepted
- Date: 2026-09-17

## Decision

The first public deployment of the client-side Vite app will use a Git-connected static hosting provider, with Vercel as the recommended provider. `main` is the production source; pull requests use preview deployments.

## Consequences

No server, database, or container is required for the initial product. Backend services, secrets, authentication, and collaboration will be introduced as separate deployment concerns when the roadmap requires them.
