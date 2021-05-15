import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Time } from '../../model/cbc/Time'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Time | undefined
  meta: FieldMeta<any>
}

export default function TimeDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = value._
  return <div className="ubl-cbc ubl-Time"><FieldDisplay label={label} value={stringValue} /></div>
}
