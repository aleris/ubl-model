import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Amount } from '../../model/cbc/Amount'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'

type Props = {
  className: string
  label?: string
  amount: Amount | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function AmountDisplay({ className, label, amount, meta, fieldConfig }: Props) {
  if (amount === undefined) {
    return null
  }
  const stringValue = `${amount._}`
  return (
    <div className={className}>
      <FieldDisplay label={label} value={stringValue} config={fieldConfig} />
    </div>
  )
}
