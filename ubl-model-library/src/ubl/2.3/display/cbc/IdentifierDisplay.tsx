import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Identifier } from '../../model/cbc/Identifier'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Identifier | undefined
  meta: FieldMeta<any>
}

export default function IdentifierDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = value.schemeID ? `${value.schemeID}:${value._}` : value._
  return <div className="ubl-cbc ubl-Identifier"><FieldDisplay label={label} value={stringValue} /></div>
}
