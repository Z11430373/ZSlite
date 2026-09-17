export interface SourceLocation {
  line: number
  col: number
  offset: number
}

export interface SourceRange {
  start: SourceLocation
  end: SourceLocation
  raw: string
}

export type ParseState = 'valid' | 'auto-fixed' | 'degraded' | 'failed'

export interface AutoFix {
  code: string
  message: string
  range: {
    start: number
    end: number
  }
}

export interface ParseError {
  code: string
  message: string
  severity: 'warning' | 'error'
  range: {
    start: number
    end: number
  } | null
}

export type NodeType =
  | 'deck'
  | 'slide'
  | 'panel'
  | 'hero'
  | 'split'
  | 'grid'
  | 'stats'
  | 'quote'
  | 'image'
  | 'textblock'
  | 'unknown'

export interface DeviceLayoutRect {
  x: number
  y: number
  width: number
  height: number
  rotate: number
  z: number
}

export type DeviceLayout = 'auto' | DeviceLayoutRect

export interface ASTNodeLayout {
  desktop?: DeviceLayout
  tablet?: DeviceLayout
  mobile?: DeviceLayout
  sourceRange: {
    start: number
    end: number
  } | null
}

export interface ASTNode {
  id: string
  type: NodeType
  source: SourceRange
  parseState: ParseState
  fixes: AutoFix[]
  errors: ParseError[]
  props: Record<string, unknown>
  rawProps: Record<string, string>
  canonicalForm: string
  layout: ASTNodeLayout
}

export interface Camera {
  x: number
  y: number
  zoom: number
}

export interface AppState {
  level: 1 | 2 | 3
  camera: Camera
  selectedCardId: string | null
  selectedElementId: string | null
  mainZmd: string
  ast: ASTNode[]
}
