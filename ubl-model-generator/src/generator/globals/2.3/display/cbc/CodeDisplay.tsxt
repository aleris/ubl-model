import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Code } from '../../model/cbc/Code'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Code
}

export default function CodeDisplay({ label, meta, value }: Props) {
  const stringValue = value._
  return <FieldDisplay label={label} value={stringValue} />
}
