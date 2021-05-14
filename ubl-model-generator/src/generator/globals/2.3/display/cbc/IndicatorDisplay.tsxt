import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Indicator } from '../../model/cbc/Indicator'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Indicator
}

export default function IndicatorDisplay({ label, meta, value }: Props) {
  const stringValue = `${value._}`
  return <FieldDisplay label={label} value={stringValue} />
}
