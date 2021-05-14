import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Text } from '../../model/cbc/Text'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Text
}

export default function TextDisplay({ label, meta, value }: Props) {
  const stringValue = value._
  return <FieldDisplay label={label} value={stringValue} />
}
