import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BinaryObject } from '../../model/cbc/BinaryObject'
import FieldDisplay from '../FieldDisplay'

type Props = {
  label: string
  meta: FieldMeta<any>
  value: BinaryObject
}

export default function BinaryObjectDisplay({ label, meta, value }: Props) {
  return <div>[binary]</div>
}
