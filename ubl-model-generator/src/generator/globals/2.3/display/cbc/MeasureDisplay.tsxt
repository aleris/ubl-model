import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Measure } from '../../model/cbc/Measure'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Measure | undefined
  meta: FieldMeta<any>
}

export default function MeasureDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = `${value._}`
  return <div className="ubl-cbc ubl-Measure"><FieldDisplay label={label} value={stringValue} /></div>
}
