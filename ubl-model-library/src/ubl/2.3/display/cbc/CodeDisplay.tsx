import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Code } from '../../model/cbc/Code'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'

type Props = {
  className: string
  label?: string
  code: Code | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function CodeDisplay({ className, label, code, meta, fieldConfig }: Props) {
  if (code === undefined) {
    return null
  }
  const stringValue = code._
  return (
    <div className={className}>
      <FieldDisplay label={label} value={stringValue} config={fieldConfig}/>
    </div>
  )
}
