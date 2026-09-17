# ZSlite Roadmap

## Delivery model

A phase is complete only when its acceptance criteria, focused tests, `npm run test`, and `npm run build` pass. The long-term design documents describe the product direction; they do not automatically expand the current phase.

## Phase 0 — Project foundation ✅

Delivered:

- React + TypeScript + Vite skeleton
- Strict typing baseline
- Zustand state contract
- Initial AST/source contracts
- Minimal tests

## Phase 1 — Camera Foundation ⏳ next

Goal: create the shared camera and coordinate foundation required by all three editing levels.

In scope:

- Camera state contract
- World/screen coordinate transforms
- Cursor-centered zoom
- Deterministic Level 1/2/3 derivation
- Custom requestAnimationFrame spring integrator
- Focused unit tests

Out of scope:

- Infinite canvas UI
- Minimap
- Parser
- Panel rendering
- WebGL
- Collaboration

Acceptance gate:

- Coordinate round trips are stable
- Camera behavior is implemented as reusable pure functions/hooks
- Spring state preserves `current` and `velocity` when the target changes
- All existing and new tests pass
- Production build passes

## Phase 2 — ZMD parsing foundation

- State-machine lexer
- Tolerant hand-written parser
- AST nodes with complete source ranges
- Slide boundaries and panel auto-close
- Parse errors, fixes, and degraded states
- Initial seed `main.zmd`

## Phase 3 — Semantic panel expansion

- hero
- split
- grid
- stats
- quote
- image
- textblock

## Phase 4 — Layout and rendering

- 12×8 layout engine
- Density analysis and dynamic retreat
- Design token resolution
- React component tree renderer
- Ghost UI

## Phase 5 — Editor interaction

- Level 2 outline and content editing
- Panel library and inline insertion
- Code Dock
- Level 3 geometry and animation controls
- Level 1 canvas, cards, paths, and minimap

## Phase 6 — Bidirectional editing

- Rope/piece-table surgical replacement
- Layout comment parsing and updates
- Source-preserving serialization
- UI ↔ ZMD synchronization

## Later roadmap

These remain intentionally deferred until the core editor is stable:

- Full Lezer grammar migration
- v-click and 2D transitions
- WebGL transitions
- Presentation mode
- Yjs collaboration
- API data binding
- AI generation
- `.zpack` / `.zpu`
- PPTX/PDF/MP4 export
- audience feedback services

## Scope rule

Do not start a later phase because a feature is mentioned in `ZMD-spec.md` or `ZSlide-design.md`. Create or update a phase specification and issue first.
