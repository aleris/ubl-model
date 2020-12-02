import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Code } from '../../model/cbc/Code'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Code
}

export default function CodeDisplay({ meta, value }: Params) {
  const stringValue = value._
  return <FieldDisplay label={meta.label} value={stringValue} />
}
