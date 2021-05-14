import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Amount } from '../../model/cbc/Amount'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Amount
}

export default function AmountDisplay({ label, meta, value }: Props) {
  const stringValue = `${value._}`
  return <FieldDisplay label={label} value={stringValue} />
}
