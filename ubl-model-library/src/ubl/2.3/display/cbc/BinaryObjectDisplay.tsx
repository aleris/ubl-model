import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BinaryObject } from '../../model/cbc/BinaryObject'
import FieldDisplay from '../FieldDisplay'

type Params = {
  meta: FieldMeta<any>
  value: BinaryObject
}

export default function BinaryObjectDisplay({ meta, value }: Params) {
  return <div>[binary]</div>
}
