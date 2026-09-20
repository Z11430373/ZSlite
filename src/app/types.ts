export interface SourceLocation {
  line: number
  col: number
  offset: number
}

export interface AutoFix {
  kind: 'auto-close' | 'fuzzy-match' | 'alias-resolve' | 'conflict-resolve'
  description: string
  original: string
  corrected: string
}

export interface ParseError {
  code: string
  message: string
  severity: 'error' | 'warning' | 'info'
}

export interface DeviceLayout {
  x?: number | null
  y?: number | null
  w?: number | null
  h?: number | null
  z?: number | null
  rotate?: number | null
}

export interface ASTNode {
  id: string
  node_type: string
  source: {
    start: SourceLocation
    end: SourceLocation
    raw: string
  }
  parse_state: 'valid' | 'auto-fixed' | 'degraded' | 'failed'
  fixes: AutoFix[]
  errors: ParseError[]
  props: Record<string, unknown>
  raw_props: Record<string, string>
  canonical_form: string | null
  animation_plan: {
    entrance: string | null
    easing: string | null
    priority: number
    vclick: { at: number; exit: number | null; auto: boolean } | null
    emphasis: string | null
    loop_anim: string | null
  } | null
  layout: {
    desktop?: DeviceLayout | null
    tablet?: DeviceLayout | null
    mobile?: DeviceLayout | null
    source_range: { start: number; end: number } | null
  }
  parent: string | null
  children: string[]
  slide_index: number
}

export interface ParseResult {
  nodes: ASTNode[]
  slides: number[][]
  node_map: Record<string, number>
  total_clicks: number
  warnings: ParseError[]
  version: string
}

export interface Camera {
  x: number
  y: number
  zoom: number
}

export interface AppState {
  level: 1 | 2 | 3
  camera: Camera
  selected_card_id: string | null
  selected_element_id: string | null
  main_zmd: string
  parse_result: ParseResult | null
}

export const SPRING_PRESETS = {
  camera: { stiffness: 60, damping: 12, mass: 1.0 },
  standard: { stiffness: 100, damping: 10, mass: 1.0 },
  bouncy: { stiffness: 200, damping: 8, mass: 0.8 },
  slow: { stiffness: 60, damping: 12, mass: 1.2 }
} as const
