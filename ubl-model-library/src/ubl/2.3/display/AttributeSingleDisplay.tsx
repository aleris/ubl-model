import React, { ReactNode } from 'react'
import { FieldMeta } from '../meta/FieldMeta'

type Props<T> = {
  className: string
  value: T[] | undefined
  meta: FieldMeta<any>
  itemDisplay: (item: T, key: string | number) => ReactNode
}

export default function AttributeSingleDisplay<T>({ className, value, meta, itemDisplay }: Props<T>) {
  if (value === undefined || value.length === 0) {
    return null
  }

  return (
    <div className={`${className} attribute-single`}>
      { itemDisplay(value[0], 0) }
    </div>
  )
}