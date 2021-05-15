import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Quantity } from '../../model/cbc/Quantity'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Quantity | undefined
  meta: FieldMeta<any>
}

export default function QuantityDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = `${value._}`
  return <div className="ubl-cbc ubl-Quantity"><FieldDisplay label={label} value={stringValue} /></div>
}
