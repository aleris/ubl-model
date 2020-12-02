import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UBLExtensions } from  '../../model/ext/UBLExtensions'
import { UBLExtensionsFieldMeta } from  '../../meta/ext/UBLExtensionsMeta'
import UBLExtensionDisplay from './UBLExtensionDisplay'
import { UBLExtension } from '../../model/ext/UBLExtension'

type Params<T> = {
  value: UBLExtensions
  meta: FieldMeta<T>
}

export default function UBLExtensionsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={UBLExtensionsFieldMeta.UBLExtension} 
          value={value.UBLExtension}
          itemDisplay={ (itemValue: UBLExtension, key: string | number) =>
            <UBLExtensionDisplay key={key} meta={UBLExtensionsFieldMeta.UBLExtension} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
