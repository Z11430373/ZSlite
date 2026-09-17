# Phase 1 — Camera Foundation

## Goal

Create the camera and coordinate foundation shared by Level 1, Level 2, and Level 3.

## In scope

- typed camera contract
- world/screen coordinate conversion
- inverse conversion
- cursor-centered zoom math
- deterministic level derivation
- custom requestAnimationFrame spring integrator
- focused unit tests

## Out of scope

- infinite canvas rendering
- slide cards and minimap
- ZMD parser
- PanelExpander
- Code Dock
- WebGL
- persistence or collaboration

## Required acceptance criteria

- `worldToScreen` and `screenToWorld` round-trip within a documented tolerance
- coordinate logic is independent of React components
- camera zoom around a pointer preserves the world point under that pointer
- level derivation is deterministic and tested at boundaries
- changing a spring target does not reset current value or velocity
- reduced-motion behavior has an explicit test or documented adapter
- `npm run test` passes
- `npm run build` passes

## Expected delivery

Implement the smallest reusable modules under `src/engine/` and connect them to the existing typed store only where needed. Do not build the visual editor in this phase.
