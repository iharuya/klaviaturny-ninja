import { Keyboard } from '@/components/keyboard'
import { type FC, useCallback, useEffect } from 'react'
import { useGame } from './hooks/game'
import { useKeyboard } from './hooks/keyboard'
import { isCharacter, usKeyToRuChar } from './lib/characters'
import { cn } from './lib/cn'

export const App: FC = () => {
  const start = useGame((state) => state.start)
  const isPlaying = useGame((state) => state.isPlaying)
  const shift = useKeyboard((state) => state.shift)
  const unshift = useKeyboard((state) => state.unshift)
  const press = useKeyboard((state) => state.press)
  const unpress = useKeyboard((state) => state.unpress)
  const input = useGame((state) => state.input)
  const currentInput = useGame((state) => state.currentInput)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key, code } = event
      console.log(key, code)

      if (key === 'Shift') {
        shift()
        return
      }
      if (code === 'Backspace') {
        input('BACKSPACE')
        return
      }
      if (code === 'Space') {
        input('SPACE')
        return
      }

      // Performance optimization
      if (event.repeat) {
        return
      }

      // ========================
      // Period is in different place on Russian/US keyboard
      // So we need to handle it separately
      // ========================

      // RU Keyboard
      if (code === 'Slash' && key === '.') {
        press('.')
        input('.')
        return
      }

      // RU Keyboard
      if (code === 'Period' && key === 'ю') {
        press('ю')
        input('ю')
        return
      }

      // US Keyboard
      if (code === 'Slash' && key === '/') {
        press('.')
        input('.')
        return
      }

      // US Keyboard
      if (code === 'Period' && key === '.') {
        press('ю')
        input('ю')
        return
      }

      if (isCharacter(key)) {
        press(key)
        input(key)
        return
      }
      if (usKeyToRuChar.has(key)) {
        // biome-ignore lint/style/noNonNullAssertion: it's ok man
        const ruKey = usKeyToRuChar.get(key)!
        press(ruKey)
        input(ruKey)
        return
      }
    },
    [shift, press, input],
  )

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Shift') {
        unshift()
        return
      }
      unpress()
    },
    [unshift, unpress],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return (
    <div className="py-16">
      <div className="flex justify-center mb-2">
        <div className="bg-slate-100 px-8 py-4 rounded-xl w-[750px] min-h-[60px] text-center">
          <pre className="text-xl leading-8 font-bold break-words whitespace-break-spaces">
            {currentInput}
            <div className="inline-block w-[2px] h-5 translate-y-1 ml-[1px] bg-black animate-cursor duration-75" />
          </pre>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <Keyboard />
      </div>
      <div className="text-center">
        <button
          type="button"
          className={cn(
            'bg-[#E4E9F2] border-b-2 border-[#D1D8E7] text-[#546FA4] px-4 py-2 text-xl font-bold rounded-xl',
            'transition-all duration-100',
            'enabled:hover:bg-slate-300',
            'enabled:active:bg-slate-300 enabled:active:translate-y-0.5 enabled:active:shadow-inner',
            'focus-visible:outline-1 outline-blue-500',
            'disabled:bg-slate-100 disabled:text-slate-400 disabled:border-none disabled:shadow-inner disabled:cursor-not-allowed',
          )}
          onClick={() => {
            start({ level: 'medium' })
          }}
          disabled={isPlaying}
        >
          начинать
        </button>
      </div>
    </div>
  )
}
