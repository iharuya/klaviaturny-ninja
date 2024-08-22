import { cn } from '@/lib/cn'
import type { FC } from 'react'
import { BlankKey } from './blank-key'
import { OtherKey } from './other-key'
import { RussianKey } from './russian-key'

type Props = {
  className?: string
}

export const Keyboard: FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-block border p-1 rounded-xl', className)}>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <RussianKey character="ё" />
          <OtherKey character="1" />
          <OtherKey character="2" />
          <OtherKey character="3" />
          <OtherKey character="4" />
          <OtherKey character="5" />
          <OtherKey character="6" />
          <OtherKey character="7" />
          <OtherKey character="8" />
          <OtherKey character="9" />
          <OtherKey character="0" />
          <OtherKey character="-" />
          <OtherKey character="=" />
          <BlankKey className="w-16" />
        </div>
        <div className="flex gap-1">
          <BlankKey className="w-16" />
          <RussianKey character="й" />
          <RussianKey character="ц" />
          <RussianKey character="у" />
          <RussianKey character="к" />
          <RussianKey character="е" />
          <RussianKey character="н" />
          <RussianKey character="г" />
          <RussianKey character="ш" />
          <RussianKey character="щ" />
          <RussianKey character="з" />
          <RussianKey character="х" />
          <RussianKey character="ъ" />
          <OtherKey character="\" />
        </div>
        <div className="flex gap-1">
          <BlankKey className="w-[82px]" />
          <RussianKey character="ф" />
          <RussianKey character="ы" />
          <RussianKey character="в" />
          <RussianKey character="а" />
          <RussianKey character="п" />
          <RussianKey character="р" />
          <RussianKey character="о" />
          <RussianKey character="л" />
          <RussianKey character="д" />
          <RussianKey character="ж" />
          <RussianKey character="э" />
          <BlankKey className="w-[82px]" />
        </div>
        <div className="flex gap-1">
          <BlankKey className="w-[108px]" />
          <RussianKey character="я" />
          <RussianKey character="ч" />
          <RussianKey character="с" />
          <RussianKey character="м" />
          <RussianKey character="и" />
          <RussianKey character="т" />
          <RussianKey character="ь" />
          <RussianKey character="б" />
          <RussianKey character="ю" />
          <OtherKey character="." />
          <BlankKey className="w-[108px]" />
        </div>
      </div>
    </div>
  )
}
