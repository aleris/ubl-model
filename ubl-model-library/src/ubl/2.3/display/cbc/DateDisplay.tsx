import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Date } from '../../model/cbc/Date'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Date
}

export default function DateDisplay({ label, meta, value }: Props) {
  const stringValue = value._
  return <FieldDisplay label={label} value={stringValue} />
}
