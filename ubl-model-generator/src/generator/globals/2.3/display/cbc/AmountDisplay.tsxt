import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Amount } from '../../model/cbc/Amount'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: Amount | undefined
  meta: FieldMeta<any>
}

export default function AmountDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  const stringValue = `${value._}`
  return <div className="ubl-cbc ubl-Amount"><FieldDisplay label={label} value={stringValue} /></div>
}
