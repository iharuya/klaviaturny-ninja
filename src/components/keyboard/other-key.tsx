import { cn } from '@/lib/cn'
import type { FC } from 'react'

type Props = {
  className?: string
  character: string
}

export const OtherKey: FC<Props> = ({ className, character }) => {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-xl bg-[#E4E9F2] border-b-2 border-[#D1D8E7]',
        className,
      )}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <span className="text-[#546FA4] font-extrabold text-lg leading-5">
          {character}
        </span>
      </div>
    </div>
  )
}
