# ZSlite Project Status

## Baseline

- Repository: `Z11430373/ZSlite`
- Default branch: `main`
- Current status: Phase 0 scaffold merged
- Product status: pre-alpha
- Deployment status: not configured yet

## Completed

- React 18 + TypeScript + Vite root application
- TypeScript strict baseline
- Zustand application store
- Initial AST/source-location contracts
- Vitest store tests
- Legacy prototype preserved under `sources/` as reference material
- GitHub Copilot repository instructions

## Current behavior

The production React surface is still a minimal loading screen. The app is buildable, but it is not yet a functioning ZMD editor or spatial presentation application.

## Not implemented

- Camera transforms and spring camera behavior
- Three-level spatial interaction
- State-machine ZMD lexer and tolerant parser
- Seed `main.zmd` document and AST pipeline
- Panel expanders and 12×8 layout engine
- Design resolver and DOM renderer
- Code Dock and Rope serializer
- Ghost UI and layout-comment editing
- Presentation mode, export, collaboration, AI, and backend services

## Next approved work

Phase 1 — Camera Foundation. The first implementation should define the camera contract, coordinate transforms, level derivation, and a reusable spring integrator before building the spatial UI.

## Handoff checklist

Before taking over work:

1. Read `.github/copilot-instructions.agent.md`.
2. Read `ARCHITECTURE.md` and `ROADMAP.md`.
3. Check open GitHub Issues and the active milestone.
4. Run `npm ci`, `npm run test`, and `npm run build`.
5. Confirm the target issue's non-goals before changing code.
6. Do not treat `sources/zslide-demo.js` as production architecture.

## Update rule

This file records actual repository state, not aspirations. Update it whenever a phase is completed, the current baseline changes, or a major limitation is removed.
