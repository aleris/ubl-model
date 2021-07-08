import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Numeric } from '../../model/cbc/Numeric'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'

type Props = {
  className: string
  label?: string
  numeric: Numeric | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function NumericDisplay({ className, label, numeric, meta, fieldConfig }: Props) {
  if (numeric === undefined) {
    return null
  }
  const stringValue = `${numeric._}`
  return (
    <div className={className}>
      <FieldDisplay label={label} value={stringValue} config={fieldConfig} />
    </div>
  )
}
