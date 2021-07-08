import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Text } from '../../model/cbc/Text'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'

type Props = {
  className: string
  label?: string
  text: Text | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function TextDisplay({ className, label, text, meta, fieldConfig }: Props) {
  if (text === undefined) {
    return null
  }
  const stringValue = text._
  return (
    <div className={className}>
      <FieldDisplay label={label} value={stringValue} config={fieldConfig}/>
    </div>
  )
}
