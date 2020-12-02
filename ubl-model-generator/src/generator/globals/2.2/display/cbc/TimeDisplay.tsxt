import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Time } from '../../model/cbc/Time'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Time
}

export default function TimeDisplay({ meta, value }: Params) {
  const stringValue = value._
  return <FieldDisplay label={meta.label} value={stringValue} />
}
