import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Quantity } from '../../model/cbc/Quantity'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Quantity
}

export default function QuantityDisplay({ meta, value }: Params) {
  const stringValue = `${value._}`
  return <FieldDisplay label={meta.label} value={stringValue} />
}
