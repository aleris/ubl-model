import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Indicator } from '../../model/cbc/Indicator'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Indicator
}

export default function IndicatorDisplay({ meta, value }: Params) {
  const stringValue = `${value._}`
  return <FieldDisplay label={meta.label} value={stringValue} />
}
