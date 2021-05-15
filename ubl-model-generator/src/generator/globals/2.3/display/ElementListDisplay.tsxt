import React, { ReactNode } from 'react'
import { FieldMeta } from '../meta/FieldMeta'

type Props<T> = {
  className: string
  label: string
  items: T[] | undefined
  meta: FieldMeta<any>
  itemDisplay: (item: T, key: string | number) => ReactNode
}

export default function AttributeListDisplay<T>({ className, label, items, meta, itemDisplay }: Props<T>) {
  if (items === undefined || items.length === 0) {
    return null
  }

  return (
    <div className={`ren-element-list ${className}`}>
      <div className="ren-element-list-title">{label}</div>
      <div className="ren-element-list-items">
        { items.map((item, index) => itemDisplay(item, index)) }
      </div>
    </div>
  )
}
