import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Numeric } from '../../model/cbc/Numeric'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Numeric
}

export default function NumericDisplay({ label, meta, value }: Props) {
  const stringValue = `${value._}`
  return <FieldDisplay label={label} value={stringValue} />
}
