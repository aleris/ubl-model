import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DateTime } from '../../model/cbc/DateTime'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: DateTime
}

export default function DateTimeDisplay({ meta, value }: Params) {
  const stringValue = value._
  return <FieldDisplay label={meta.label} value={stringValue} />
}
