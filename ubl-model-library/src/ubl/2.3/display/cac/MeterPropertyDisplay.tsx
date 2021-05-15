import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MeterProperty } from  '../../model/cac/MeterProperty'
import { MeterPropertyFieldMeta } from  '../../meta/cac/MeterPropertyMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: MeterProperty | undefined
  meta: FieldMeta<T>
}

export default function MeterPropertyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-MeterProperty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={MeterPropertyFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={MeterPropertyFieldMeta.Name}
          />

          <CodeDisplay
            label="Name Code"
            value={value.NameCode?.[0]}
            meta={MeterPropertyFieldMeta.NameCode}
          />

          <TextDisplay
            label="Value"
            value={value.Value?.[0]}
            meta={MeterPropertyFieldMeta.Value}
          />

          <QuantityDisplay
            label="Value Quantity"
            value={value.ValueQuantity?.[0]}
            meta={MeterPropertyFieldMeta.ValueQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ValueQualifier"
            label="Value Qualifier"
            items={value.ValueQualifier}
            meta={MeterPropertyFieldMeta.ValueQualifier} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Value Qualifier"
                value={itemValue}
                meta={MeterPropertyFieldMeta.ValueQualifier}
              />
            }
          />
        </div>
    </div>
  )
}
