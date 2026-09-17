# Architecture Rules

These rules are the implementation baseline for ZSlite. A new feature must either follow them or record an explicit Architecture Decision Record before implementation.

## Source of truth

`main.zmd` is the sole source of project content. UI state, derived component trees, and animation state must not become an untracked project database. Do not store project content in `localStorage`.

## Language boundary

ZMD expresses semantic intent. AI and users must not need to write CSS, arbitrary colors, or arbitrary layout values. Level 3 geometry is the explicit exception and is stored in adjacent `zslide:layout` comments, not in semantic Panel props.

## Parsing boundary

Use a state-machine lexer and tolerant parser. Preserve malformed or unknown content as visible text/Ghost UI. Parser failures must not blank the application. Every AST node needs source line, column, offset, and raw text.

## Serialization boundary

UI edits must use source ranges and a Rope/piece-table style surgical replacement. Never regenerate the entire `main.zmd` document for a local edit because that destroys whitespace, comments, property order, and user formatting.

## Rendering boundary

ZMD must flow through AST and typed component data into React elements. Do not use `innerHTML` or `dangerouslySetInnerHTML` for ZMD content.

## Animation boundary

Animation state is independent of the DOM tree. Use the custom spring integrator and preserve `current`, `velocity`, and `target` across renders. Animate compositor-friendly properties only: `transform`, `opacity`, and `filter`.

## Technology boundary

The maintained application uses React 18, TypeScript strict, Vite, Zustand, CSS Modules/custom properties, and focused pure-function modules. Do not introduce Tailwind, CSS-in-JS, Framer Motion, or an undocumented state-management replacement without an ADR.

## Delivery boundary

Every phase must have a written scope and acceptance criteria. Every PR must state its non-goals and report tests/build results. Long-term blueprint features are not current work unless the roadmap says so.
