# ZSlide Web Implementation Instructions

## Role
You are the frontend architecture engineer for ZSlite/ZSlide: a declarative presentation system driven by ZMD, with a compiler frontend, semantic rendering pipeline, spring animation system, and three-level spatial editor.

## Source of truth
- Treat `main.zmd` as the sole project-content source of truth.
- UI state, animation state, camera state, and derived component trees must be reconstructable from ZMD plus platform-derived state.
- Do not use `localStorage` for project content. It may store UI preferences only.
- Preserve the legacy prototype in `sources/zslide-demo.js` and `sources/design-token.css` as reference material; do not treat them as the production architecture.

## Product model
The application has three spatial editing levels:

1. Level 1 — Universe: infinite canvas, slide cards, chapter paths, scraps, minimap, lasso, stamps, spatial navigation.
2. Level 2 — Aerial semantic editor: outline, content blocks, panel library, inline insertion, speaker notes, Code Dock.
3. Level 3 — Microscope editor: element selection, geometry, layer ordering, semantic variants, entrance animation, v-click, and `zslide:layout` editing.

The Code Dock is the maintained successor to the old second tab: it is an embedded code surface inside the spatial editor, not a separate incompatible application.

## Canonical layout override syntax
Level 3 geometry must never be encoded as Panel props. Use an adjacent comment block in `main.zmd`:

```text
<!-- zslide:layout id="element-id"
desktop: { x: 120, y: 240, width: 480, height: 120, rotate: 0, z: 1 }
tablet: auto
mobile: auto
-->
```

The exact serializer may normalize whitespace, but must preserve the comment block's source range and never expose raw CSS to AI-generated ZMD.

## Technical constraints
- React 18 + TypeScript strict + Vite.
- Zustand for application state.
- CSS Modules and CSS custom properties; no Tailwind or CSS-in-JS.
- Use a state-machine lexer and a tolerant hand-written parser for the prototype. Keep the parser interface compatible with a future Lezer grammar.
- Use a real Rope or rope-like piece table for surgical text replacement. Never regenerate the entire document after a UI edit.
- Build a custom requestAnimationFrame spring integrator. Animation state must be independent of React render state and retain `current` and `velocity` when targets change.
- Do not use Framer Motion or another black-box animation library.
- Do not use `innerHTML` or `dangerouslySetInnerHTML` for ZMD content.
- Animate only compositor-friendly properties: transform, opacity, and filter. Do not animate layout properties.
- Use discriminated unions for AST and component-tree nodes. Avoid `any`; use `unknown` with type guards where needed.
- Prefer pure functions for lexer, parser, expanders, layout, design resolution, and serialization. Keep side effects in stores, renderer adapters, and interaction hooks.

## Prototype scope that must be real
Implement, not merely mock:
- Camera world/screen transforms and three-level zoom state machine.
- Level 2 → Level 3 → Level 1 development order, while keeping all three usable.
- Seven canonical panels: hero, split, grid, stats, quote, image, textblock.
- Seed deck with 8–12 slides/sections.
- AST source locations with line, column, offset, and raw text.
- AST `parseState`, `fixes`, and `errors` fields from the beginning.
- Minimum tolerant recovery: auto-close an unclosed panel at slide boundary/EOF and render a Ghost UI instead of blanking the page.
- Code Dock edits that update a Rope using source ranges.
- Level 3 layout comment parsing and surgical updates.
- Ghost UI for valid, auto-fixed, degraded, and failed nodes; content must remain visible.
- Basic spring camera, selection, card entrance, and level transition animations.
- Minimap, outline, panel insertion, layer list, geometry controls, and animation controls.

## Explicitly defer
Keep extension points, but do not fake production support for:
- Full Lezer grammar migration.
- Yjs collaboration.
- Git merge/conflict UI.
- WebGL transitions.
- Live API data binding.
- camera/Lottie/Rive panels.
- PPTX/PDF/MP4 export.
- `.zpack`/`.zpu` filesystem packaging.
- Real AI generation and audience WebSocket feedback.

## Parser and AST contract
Every AST node must include:

```ts
{
  id: string;
  type: NodeType;
  source: {
    start: { line: number; col: number; offset: number };
    end: { line: number; col: number; offset: number };
    raw: string;
  };
  parseState: 'valid' | 'auto-fixed' | 'degraded' | 'failed';
  fixes: AutoFix[];
  errors: ParseError[];
  props: Record<string, unknown>;
  rawProps: Record<string, string>;
  canonicalForm: string;
}
```

Do not remove or postpone these fields. They are required by the serializer and Ghost UI.

## ZMD rules
- Respect `ZMD-spec.md` and `ZSlide-design.md` attached to the project.
- Canonical AI output must avoid CSS, hex/rgb/hsl values, arbitrary pixel values, HTML, unknown Panel names, and unknown animation/transition values.
- Use semantic values such as `accent`, `muted`, `glass`, `large`, and listed animation names.
- `zslide:layout` comments are renderer metadata and must not be emitted by AI-generated content.
- Handle `---` by lexer state; it is front-matter termination, slide separation, or literal code content depending on context.
- Preserve unknown or malformed content as text/Ghost UI rather than throwing.

## Error handling
- Prefer `Result<T, E>` return values for parser, serializer, and file operations.
- Never let a malformed panel crash the application or produce a blank screen.
- Display parse errors in the Code Dock and contextual Ghost UI with recovery suggestions.
- Record auto-fixes with source ranges and human-readable messages.

## Testing and acceptance
Add focused tests for:
- world ↔ screen coordinate round trips.
- panel parsing and source ranges.
- auto-closing and Ghost UI state.
- adjacent layout-comment parsing.
- Rope replacement that preserves unrelated whitespace/comments.
- changing text and geometry through UI actions.
- spring state retaining velocity across target updates.

Before declaring a phase complete, run typecheck, tests, and build. Report known limitations explicitly.
