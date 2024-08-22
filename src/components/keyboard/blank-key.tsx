import { cn } from '@/lib/cn'
import type { FC } from 'react'

type Props = {
  className?: string
}

export const BlankKey: FC<Props> = ({ className }) => {
  return <div className={cn('w-12 h-12 rounded-xl bg-[#F0F4F7]', className)} />
}
