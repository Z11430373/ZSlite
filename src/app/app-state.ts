import { create } from 'zustand'

import type { ASTNode, AppState, Camera } from './types'

interface AppActions {
  setLevel: (level: AppState['level']) => void
  setCamera: (camera: Camera) => void
  updateCamera: (partial: Partial<Camera>) => void
  setSelectedCardId: (selectedCardId: string | null) => void
  setSelectedElementId: (selectedElementId: string | null) => void
  setMainZmd: (mainZmd: string) => void
  setAst: (ast: ASTNode[]) => void
}

export const initialAppState: AppState = {
  level: 1,
  camera: { x: 0, y: 0, zoom: 1 },
  selectedCardId: null,
  selectedElementId: null,
  mainZmd: '',
  ast: []
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
  setSelectedCardId: (selectedCardId) => set({ selectedCardId }),
  setSelectedElementId: (selectedElementId) => set({ selectedElementId }),
  setMainZmd: (mainZmd) => set({ mainZmd }),
  setAst: (ast) => set({ ast })
}))
