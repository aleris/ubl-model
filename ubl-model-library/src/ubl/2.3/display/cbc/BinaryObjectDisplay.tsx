import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BinaryObject } from '../../model/cbc/BinaryObject'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  value: BinaryObject | undefined
  meta: FieldMeta<any>
}

export default function BinaryObjectDisplay({ label, value, meta }: Props) {
  if (value === undefined) {
    return null
  }
  return <div className="ubl-cbc ubl-BinaryObject">[binary]</div>
}
