import type { RussianCharacter } from '@/constants/characters'
import { cn } from '@/lib/cn'
import type { FC } from 'react'

type Props = {
  className?: string
  character: RussianCharacter
  isUpper?: boolean
}

export const RussianKey: FC<Props> = ({ character, isUpper, className }) => {
  const upper = character.toLocaleUpperCase()
  const lower = character.toLocaleLowerCase()
  const display = isUpper ? upper : lower
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-xl bg-[#E4E9F2] border-b-2 border-[#D1D8E7]',
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
