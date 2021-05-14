import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DateTime } from '../../model/cbc/DateTime'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: DateTime
}

export default function DateTimeDisplay({ label, meta, value }: Props) {
  const stringValue = value._
  return <FieldDisplay label={label} value={stringValue} />
}
