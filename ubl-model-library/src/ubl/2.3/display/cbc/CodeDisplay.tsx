import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Code } from '../../model/cbc/Code'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Code | undefined
  meta: FieldMeta<any>
}

export default function CodeDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = value._
  return <div className="ubl-cbc ubl-Code"><FieldDisplay label={label} value={stringValue} /></div>
}
