import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Numeric } from '../../model/cbc/Numeric'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Numeric | undefined
  meta: FieldMeta<any>
}

export default function NumericDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = `${value._}`
  return <div className="ubl-cbc ubl-Numeric"><FieldDisplay label={label} value={stringValue} /></div>
}
