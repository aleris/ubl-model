import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Quantity } from '../../model/cbc/Quantity'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Quantity
}

export default function QuantityDisplay({ label, meta, value }: Props) {
  const stringValue = `${value._}`
  return <FieldDisplay label={label} value={stringValue} />
}
