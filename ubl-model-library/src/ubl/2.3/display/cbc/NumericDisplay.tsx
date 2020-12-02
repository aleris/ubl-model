import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Numeric } from '../../model/cbc/Numeric'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Numeric
}

export default function NumericDisplay({ meta, value }: Params) {
  const stringValue = `${value._}`
  return <FieldDisplay label={meta.label} value={stringValue} />
}
