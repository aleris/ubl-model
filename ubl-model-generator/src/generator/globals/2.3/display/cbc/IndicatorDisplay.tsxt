import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Indicator } from '../../model/cbc/Indicator'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Indicator | undefined
  meta: FieldMeta<any>
}

export default function IndicatorDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = `${value._}`
  return <div className="ubl-cbc ubl-Indicator"><FieldDisplay label={label} value={stringValue} /></div>
}
