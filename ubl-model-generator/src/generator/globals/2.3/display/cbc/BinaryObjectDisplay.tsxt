import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BinaryObject } from '../../model/cbc/BinaryObject'
import { FieldConfig } from '../FieldConfig'

type Props = {
  className: string
  label?: string
  binaryObject: BinaryObject | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function BinaryObjectDisplay({ className, label, binaryObject, meta, fieldConfig }: Props) {
  if (binaryObject === undefined) {
    return null
  }
  return <div className={className}>[binary]</div>
}
