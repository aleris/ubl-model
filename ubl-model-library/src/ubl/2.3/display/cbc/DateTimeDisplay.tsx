import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DateTime } from '../../model/cbc/DateTime'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'

type Props = {
  className: string
  label?: string
  dateTime: DateTime | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function DateTimeDisplay({ className, label, dateTime, meta, fieldConfig }: Props) {
  if (dateTime === undefined) {
    return null
  }
  const stringValue = dateTime._
  return (
    <div className={className}>
      <FieldDisplay label={label} value={stringValue} config={fieldConfig} />
    </div>
  )
}
