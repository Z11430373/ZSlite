import { create } from 'zustand'

import type { AppState, Camera, ParseResult } from './types'

interface AppActions {
  setLevel: (level: AppState['level']) => void
  setCamera: (camera: Camera) => void
  updateCamera: (partial: Partial<Camera>) => void
  setSelectedCardId: (selected_card_id: string | null) => void
  setSelectedElementId: (selected_element_id: string | null) => void
  setMainZmd: (main_zmd: string) => void
  setParseResult: (result: ParseResult | null) => void
}

export const initialAppState: AppState = {
  level: 1,
  camera: { x: 0, y: 0, zoom: 1 },
  selected_card_id: null,
  selected_element_id: null,
  main_zmd: '',
  parse_result: null
}

export const useAppStore = create<AppState & AppActions>((set) => ({
  ...initialAppState,
  setLevel: (level) => set({ level }),
  setCamera: (camera) => set({ camera }),
  updateCamera: (partial) =>
    set((state) => ({
      camera: {
        ...state.camera,
        ...partial
      }
    })),
  setSelectedCardId: (selected_card_id) => set({ selected_card_id }),
  setSelectedElementId: (selected_element_id) => set({ selected_element_id }),
  setMainZmd: (main_zmd) => set({ main_zmd }),
  setParseResult: (parse_result) => set({ parse_result })
}))
