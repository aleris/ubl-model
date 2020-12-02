import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Date } from '../../model/cbc/Date'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Date
}

export default function DateDisplay({ meta, value }: Params) {
  const stringValue = value._
  return <FieldDisplay label={meta.label} value={stringValue} />
}
