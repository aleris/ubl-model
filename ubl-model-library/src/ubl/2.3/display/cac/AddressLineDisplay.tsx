import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AddressLine } from  '../../model/cac/AddressLine'
import { AddressLineFieldMeta } from  '../../meta/cac/AddressLineMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AddressLine | undefined
  meta: FieldMeta<T>
}

export default function AddressLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AddressLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AddressLineFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Line"
            value={value.Line?.[0]}
            meta={AddressLineFieldMeta.Line}
          />
        </div>
    </div>
  )
}
