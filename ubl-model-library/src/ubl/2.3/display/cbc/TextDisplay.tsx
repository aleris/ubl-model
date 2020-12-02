import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Text } from '../../model/cbc/Text'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Text
}

export default function TextDisplay({ meta, value }: Params) {
  const stringValue = value._
  return <FieldDisplay label={meta.label} value={stringValue} />
}
