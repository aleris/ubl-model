import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Time } from '../../model/cbc/Time'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Time
}

export default function TimeDisplay({ label, meta, value }: Props) {
  const stringValue = value._
  return <FieldDisplay label={label} value={stringValue} />
}
