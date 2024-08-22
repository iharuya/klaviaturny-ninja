import { Keyboard } from '@/components/keyboard'
import type { FC } from 'react'
import { cn } from './lib/cn'

export const App: FC = () => {
  return (
    <div className="py-16">
      <div className="flex justify-center mb-8">
        <Keyboard />
      </div>
      <div className="text-center">
        <button
          type="button"
          className={cn(
            'bg-[#E4E9F2] border-b-2 border-[#D1D8E7] text-[#546FA4] px-4 py-2 text-xl font-bold rounded-xl',
            'transition-all duration-100',
            'hover:bg-slate-300',
            'active:bg-slate-300 active:translate-y-0.5',
            'focus-visible:outline-1 outline-blue-500',
          )}
        >
          начинать
        </button>
        <input type="text" hidden />
      </div>
    </div>
  )
}
