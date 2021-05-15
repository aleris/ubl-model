import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Text } from '../../model/cbc/Text'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Text | undefined
  meta: FieldMeta<any>
}

export default function TextDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = value._
  return <div className="ubl-cbc ubl-Text"><FieldDisplay label={label} value={stringValue} /></div>
}
