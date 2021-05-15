import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DateTime } from '../../model/cbc/DateTime'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: DateTime | undefined
  meta: FieldMeta<any>
}

export default function DateTimeDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = value._
  return <div className="ubl-cbc ubl-DateTime"><FieldDisplay label={label} value={stringValue} /></div>
}
