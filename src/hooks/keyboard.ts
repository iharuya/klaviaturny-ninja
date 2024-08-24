import type { Character } from '@/lib/characters'
import { create } from 'zustand'

type State = {
  isShiftPressed: boolean
  pressedCharacter: Character | null
}

const initialState: State = {
  isShiftPressed: false,
  pressedCharacter: null,
}

type Actions = {
  shift(): void
  unshift(): void
  press(character: Character): void
  unpress(): void
}

export const useKeyboard = create<State & Actions>((set) => ({
  ...initialState,
  shift: () => {
    set({ isShiftPressed: true })
  },
  unshift: () => {
    set({ isShiftPressed: false })
  },
  press: (character) => {
    set({ pressedCharacter: character })
  },
  unpress: () => {
    set({ pressedCharacter: null })
  },
}))
