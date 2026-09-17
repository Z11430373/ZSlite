# Contributing to ZSlite

## Before starting

1. Read `PROJECT.md`, `ROADMAP.md`, and `ARCHITECTURE.md`.
2. Select or create a GitHub Issue with a single deliverable.
3. Confirm the issue's scope, non-goals, dependencies, and acceptance criteria.
4. Do not begin a later roadmap phase without updating the roadmap/specification first.

## Branch naming

Use short-lived branches named after the phase and work:

```text
phase-1/camera-contract
phase-1/camera-transforms
phase-2/lexer-foundation
fix/ghost-panel-crash
```

Do not commit directly to `main` for feature work.

## Pull Requests

A PR should be small enough to review and should contain:

- a concise summary of what changed
- the linked Issue
- explicit non-goals
- test and build results
- known limitations
- documentation/status updates when the project state changed

Use the repository PR template. Keep unrelated formatting or dependency changes out of the PR.

## Required checks

Run these before requesting review:

```bash
npm ci
npm run test
npm run build
```

Do not merge when the checks fail. A PR is not complete merely because the development server starts.

## Review questions

Reviewers should verify:

- Does the change preserve `main.zmd` as the source of truth?
- Are source ranges preserved for AST-related work?
- Does malformed content remain visible?
- Does the change introduce undocumented ZMD syntax or dependencies?
- Are animation states independent from React/DOM lifecycle?
- Is the change within the current phase?

## Deployment

After review, merge into `main`. The hosting provider should deploy only the merged `main` branch to production. PRs should use preview deployments for visual verification. See [`docs/deployment.md`](docs/deployment.md).
