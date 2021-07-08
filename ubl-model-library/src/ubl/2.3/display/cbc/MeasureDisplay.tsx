import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Measure } from '../../model/cbc/Measure'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'

type Props = {
  className: string
  label?: string
  measure: Measure | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function MeasureDisplay({ className, label, measure, meta, fieldConfig }: Props) {
  if (measure === undefined) {
    return null
  }
  const stringValue = `${measure._}`
  return (
    <div className={className}>
      <FieldDisplay label={label} value={stringValue} config={fieldConfig} />
    </div>
  )
}
