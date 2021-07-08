import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Date } from '../../model/cbc/Date'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'

type Props = {
  className: string
  label?: string
  date: Date | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function DateDisplay({ className, label, date, meta, fieldConfig }: Props) {
  if (date === undefined) {
    return null
  }
  const stringValue = date._
  return (
    <div className={className}>
      <FieldDisplay label={label} value={stringValue} config={fieldConfig} />
    </div>
  )
}
