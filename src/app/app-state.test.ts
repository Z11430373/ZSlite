import { beforeEach, describe, expect, it } from 'vitest'

import { initialAppState, useAppStore } from './app-state'

describe('app store', () => {
  beforeEach(() => {
    useAppStore.setState({ ...initialAppState })
  })

  it('initializes with required phase 0 defaults', () => {
    const state = useAppStore.getState()

    expect(state.level).toBe(1)
    expect(state.camera).toEqual({ x: 0, y: 0, zoom: 1 })
    expect(state.selectedCardId).toBeNull()
    expect(state.selectedElementId).toBeNull()
    expect(state.mainZmd).toBe('')
    expect(state.ast).toEqual([])
  })

  it('updates camera and level through typed actions', () => {
    useAppStore.getState().setLevel(2)
    useAppStore.getState().updateCamera({ zoom: 1.5 })

    const state = useAppStore.getState()
    expect(state.level).toBe(2)
    expect(state.camera).toEqual({ x: 0, y: 0, zoom: 1.5 })
  })
})
