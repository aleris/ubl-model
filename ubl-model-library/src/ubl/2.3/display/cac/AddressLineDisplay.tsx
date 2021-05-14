import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AddressLine } from  '../../model/cac/AddressLine'
import { AddressLineFieldMeta } from  '../../meta/cac/AddressLineMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AddressLine
  meta: FieldMeta<T>
}

export default function AddressLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AddressLine ubl-AddressLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AddressLine ubl-UBLExtensions"
          meta={AddressLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AddressLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AddressLine ubl-Text ubl-Line"
          meta={AddressLineFieldMeta.Line} 
          value={value.Line}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Line"
              value={itemValue}
              meta={AddressLineFieldMeta.Line}
            />
          }
        />
        </div>
    </div>
  )
}
