import React, { ReactNode } from 'react'
import { FieldMeta } from '../meta/FieldMeta'

type Params<T> = {
  value: T[] | undefined
  itemDisplay: (item: T, key: string | number) => ReactNode
  meta?: FieldMeta<any>
}

export function getMetaClassName(meta: FieldMeta<any> | undefined, extra?: string) {
  const extraString = extra ? ` ${extra}` : ''
  return meta
    ? meta.name !== meta.typeName
      ? `${meta.module} ${meta.name} ${meta.typeName}${extraString}`
      : `${meta.module} ${meta.name}${extraString}`
    : extraString
}

export default function AttributeDisplay<T>({ value, itemDisplay, meta }: Params<T>) {
  if (value === undefined || value.length === 0) {
    return null
  }

  if (meta && meta.cardinality.endsWith('1')) {
    return (
      <div className={getMetaClassName(meta, 'single')}>
        { itemDisplay(value[0], 0) }
      </div>
    )
  }

  return (
    <div className={getMetaClassName(meta, 'multiple')}>
      { value.map((item, index) => itemDisplay(item, index)) }
    </div>
  )
}
