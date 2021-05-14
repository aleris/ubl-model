import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Identifier } from '../../model/cbc/Identifier'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: Identifier
}

export default function IdentifierDisplay({ label, meta, value }: Props) {
  const stringValue = value.schemeID ? `${value.schemeID}:${value._}` : value._
  return <FieldDisplay label={label} value={stringValue} />
}
