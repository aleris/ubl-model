import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Amount } from '../../model/cbc/Amount'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Amount
}

export default function AmountDisplay({ meta, value }: Params) {
  const stringValue = `${value._}`
  return <FieldDisplay label={meta.label} value={stringValue} />
}
