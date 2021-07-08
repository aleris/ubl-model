import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Time } from '../../model/cbc/Time'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'

type Props = {
  className: string
  label?: string
  time: Time | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function TimeDisplay({ className, label, time, meta, fieldConfig }: Props) {
  if (time === undefined) {
    return null
  }
  const stringValue = time._
  return (
    <div className={className}>
      <FieldDisplay label={label} value={stringValue} config={fieldConfig} />
    </div>
  )
}
