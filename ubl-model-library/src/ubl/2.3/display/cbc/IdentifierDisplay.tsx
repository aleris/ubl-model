import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Identifier } from '../../model/cbc/Identifier'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: Identifier
}

export default function IdentifierDisplay({ meta, value }: Params) {
  const stringValue = value.schemeID ? `${value.schemeID}:${value._}` : value._
  return <FieldDisplay label={meta.label} value={stringValue} />
}
