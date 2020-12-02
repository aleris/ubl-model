import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Measure } from '../../model/cbc/Measure'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Measure
}

export default function MeasureDisplay({ meta, value }: Params) {
  const stringValue = `${value._}`
  return <FieldDisplay label={meta.label} value={stringValue} />
}
