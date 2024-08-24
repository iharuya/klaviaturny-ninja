import { Dojo, type DojoConfig } from '@/dojo'
import type { Character } from '@/lib/characters'
import { create } from 'zustand'

type BaseState = {
  isPlaying: boolean
  currentInput: string
}

type ActiveState = BaseState & {
  isPlaying: true
  dojo: Dojo
}

type InactiveState = BaseState & {
  isPlaying: false
  dojo: null
}

type State = ActiveState | InactiveState

const initialState: State = {
  currentInput: '',
  isPlaying: false,
  dojo: null,
}

type Input = Character | 'SPACE' | 'BACKSPACE'

type Actions = {
  start(config: DojoConfig): void
  stop(): void
  input(code: Input): void
}

export const useGame = create<State & Actions>((set, get) => ({
  ...initialState,
  start: (config) => {
    const { isPlaying } = get()
    if (isPlaying) return
    set({
      isPlaying: true,
      dojo: new Dojo(config),
    })
  },
  stop: () => {
    const { isPlaying } = get()
    if (!isPlaying) return
    set({
      isPlaying: false,
      dojo: null,
    })
  },
  input: (code) => {
    const { dojo, isPlaying, currentInput } = get()
    if (!isPlaying) return
    const trial = dojo.currentTrial
    if (!trial) dojo.requestTrial()
    const newInput =
      code === 'BACKSPACE'
        ? currentInput.slice(0, -1)
        : code === 'SPACE'
          ? `${currentInput} `
          : currentInput + code
    if (dojo.submitTrial(newInput)) {
      dojo.requestTrial()
      set({
        currentInput: '',
      })
    } else {
      set({
        currentInput: newInput,
      })
    }
  },
}))
