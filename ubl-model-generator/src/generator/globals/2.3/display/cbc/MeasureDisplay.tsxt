import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Measure } from '../../model/cbc/Measure'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Measure
}

export default function MeasureDisplay({ label, meta, value }: Props) {
  const stringValue = `${value._}`
  return <FieldDisplay label={label} value={stringValue} />
}
