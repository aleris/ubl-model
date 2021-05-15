import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Date } from '../../model/cbc/Date'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Date | undefined
  meta: FieldMeta<any>
}

export default function DateDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = value._
  return <div className="ubl-cbc ubl-Date"><FieldDisplay label={label} value={stringValue} /></div>
}
