import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UBLExtensions } from  '../../model/ext/UBLExtensions'
import { UBLExtensionsFieldMeta } from  '../../meta/ext/UBLExtensionsMeta'
import UBLExtensionDisplay from './UBLExtensionDisplay'
import { UBLExtension } from '../../model/ext/UBLExtension'

type Props<T> = {
  label: string
  value: UBLExtensions
  meta: FieldMeta<T>
}

export default function UBLExtensionsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-ext ubl-UBLExtensions ubl-UBLExtensionsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeListDisplay
          className="ubl-ext ubl-UBLExtensions ubl-UBLExtension"
          meta={UBLExtensionsFieldMeta.UBLExtension} 
          value={value.UBLExtension}
          itemDisplay={ (itemValue: UBLExtension, key: string | number) =>
            <UBLExtensionDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UBLExtensionsFieldMeta.UBLExtension}
            />
          }
        />
        </div>
    </div>
  )
}
