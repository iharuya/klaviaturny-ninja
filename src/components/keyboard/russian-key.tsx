import { useKeyboard } from '@/hooks/keyboard'
import type { RussianLowerCharacter } from '@/lib/characters'
import { cn } from '@/lib/cn'
import { type FC, useMemo } from 'react'

type Props = {
  className?: string
  character: RussianLowerCharacter
}

export const RussianKey: FC<Props> = ({ character, className }) => {
  const pressedCharacter = useKeyboard((state) => state.pressedCharacter)
  const isPressed = useMemo(
    () => pressedCharacter?.toLocaleLowerCase() === character,
    [pressedCharacter, character],
  )
  const isShiftPressed = useKeyboard((state) => state.isShiftPressed)
  const upper = useMemo(() => character.toLocaleUpperCase(), [character])
  const lower = useMemo(() => character.toLocaleLowerCase(), [character])
  const display = useMemo(
    () => (isShiftPressed ? upper : lower),
    [isShiftPressed, upper, lower],
  )

  return (
    <div
      className={cn(
        'w-12 h-12 rounded-xl bg-[#E4E9F2] border-b-2 border-[#D1D8E7]',
        'transition-all duration-0',
        isPressed && 'bg-slate-300 translate-y-0.5 shadow-inner',
        className,
      )}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <span className="text-[#546FA4] font-extrabold text-lg leading-5">
          {display}
        </span>
      </div>
    </div>
  )
}
