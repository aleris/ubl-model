import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UBLExtensions } from  '../../model/ext/UBLExtensions'
import { UBLExtensionsFieldMeta } from  '../../meta/ext/UBLExtensionsMeta'
import UBLExtensionDisplay from './UBLExtensionDisplay'
import { UBLExtension } from '../../model/ext/UBLExtension'

type Props<T> = {
  label: string
  value: UBLExtensions | undefined
  meta: FieldMeta<T>
}

export default function UBLExtensionsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-ext ubl-UBLExtensions">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <ElementListDisplay
            className="ubl-ext ubl-UBLExtension"
            label="undefined"
            items={value.UBLExtension}
            meta={UBLExtensionsFieldMeta.UBLExtension} 
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
