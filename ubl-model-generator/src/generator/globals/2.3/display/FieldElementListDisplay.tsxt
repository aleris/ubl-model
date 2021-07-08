import React, { ReactNode } from 'react'
import { FieldMeta } from '../meta/FieldMeta'
import { DefaultFieldConfig, FieldConfig } from './FieldConfig'
import { FieldLabelDisplay } from './FieldLabelDisplay'
import './ElementListDisplay.scss'

type Props<T> = {
  className: string
  label?: string
  fieldConfig?: FieldConfig
  items: T[] | undefined
  meta: FieldMeta<any>
  itemDisplay: (item: T, key: string | number) => ReactNode
}

export function FieldElementListDisplay<T>({ className, label, fieldConfig = DefaultFieldConfig, items, meta, itemDisplay }: Props<T>) {
  if (items === undefined || items.length === 0) {
    return null
  }

  return (
    <div className={`ElementList ${className}`}>
      {label !== undefined && fieldConfig.showLabel
        ? <FieldLabelDisplay size={fieldConfig.size}>{label}</FieldLabelDisplay>
        : null}
      <div className="ElementList--Items">
        { items.map((item, index) => itemDisplay(item, index)) }
      </div>
    </div>
  )
}
