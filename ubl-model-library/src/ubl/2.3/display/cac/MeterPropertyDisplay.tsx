import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: MeterProperty
  meta: FieldMeta<T>
}

export default function MeterPropertyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-MeterProperty ubl-MeterPropertyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-MeterProperty ubl-UBLExtensions"
          meta={MeterPropertyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={MeterPropertyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterProperty ubl-Text ubl-Name"
          meta={MeterPropertyFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={MeterPropertyFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterProperty ubl-Code ubl-NameCode"
          meta={MeterPropertyFieldMeta.NameCode} 
          value={value.NameCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Name Code"
              value={itemValue}
              meta={MeterPropertyFieldMeta.NameCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterProperty ubl-Text ubl-Value"
          meta={MeterPropertyFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Value"
              value={itemValue}
              meta={MeterPropertyFieldMeta.Value}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MeterProperty ubl-Quantity ubl-ValueQuantity"
          meta={MeterPropertyFieldMeta.ValueQuantity} 
          value={value.ValueQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Value Quantity"
              value={itemValue}
              meta={MeterPropertyFieldMeta.ValueQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-MeterProperty ubl-Text ubl-ValueQualifier"
          meta={MeterPropertyFieldMeta.ValueQualifier} 
          value={value.ValueQualifier}
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
